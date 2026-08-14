import { useEffect, useState, useRef } from 'react';
import styles from './Checkin.module.css';
import { Html5Qrcode } from 'html5-qrcode';

// Subtle audio feedback generator
const playFeedbackSound = (type = 'success') => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    if (type === 'success') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.setValueAtTime(880.00, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } else {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.setValueAtTime(220, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    }
  } catch {
    // Audio context may be restricted by autoplay policies
  }
};

const Checkin = () => {
  const [checkingSession, setCheckingSession] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const [result, setResult] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [manualCode, setManualCode] = useState('');
  const [cameraError, setCameraError] = useState('');

  const scannerRef = useRef(null);
  const processingRef = useRef(false);

  // 1. Session Verification
  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      try {
        const backendUrl = window.location.hostname === 'localhost'
          ? 'http://localhost:8080/api/admin/session'
          : 'https://creatorsblueprintbackend-648711352735.me-west1.run.app/api/admin/session';

        const res = await fetch(backendUrl, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        const data = await res.json().catch(() => ({}));

        if (!isMounted) return;

        if (res.ok && data.authenticated) {
          setAuthenticated(true);
          setCheckingSession(false);
        } else {
          console.warn('Admin session invalid or expired:', data);
          setAuthenticated(false);
          setStatusMessage(data.message || "Whoa there! Not logged in. Teleporting you to the front door 🚪");
          setCheckingSession(false);
          setTimeout(() => {
            window.location.href = '/admin/login';
          }, 2000);
        }
      } catch (err) {
        console.error('Session check failed:', err);
        if (!isMounted) return;
        setAuthenticated(false);
        setStatusMessage("Admin radar offline 📡 Teleporting to login...");
        setCheckingSession(false);
        setTimeout(() => {
          window.location.href = '/admin/login';
        }, 2000);
      }
    };

    checkSession();

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Perform Checkin API Call
  const performCheckin = async (uuidCode) => {
    const code = (uuidCode || '').trim();
    if (!code) return;

    try {
      processingRef.current = true;
      setProcessing(true);
      setStatusMessage(`Consulting the guestlist gods for ${code}... ✨`);

      const backendUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:8080/api/admin/checkin'
        : 'https://creatorsblueprintbackend-648711352735.me-west1.run.app/api/admin/checkin';

      const res = await fetch(backendUrl, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid: code })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        if (navigator.vibrate) navigator.vibrate([100]);
        playFeedbackSound('success');

        setResult({
          type: 'success',
          icon: '🎉',
          title: "You're in, Legend! 🚀",
          message: data.message || "Ticket verified! Go grab your matcha and let's get moving 🧘‍♀️✨",
          attendee: data.attendee
        });
      } else if (data.code === 'ALREADY_CHECKED_IN') {
        if (navigator.vibrate) navigator.vibrate([60, 60, 60]);
        playFeedbackSound('warning');

        setResult({
          type: 'warning',
          icon: '👀',
          title: "Hold Up, Deja Vu? 🤔",
          message: data.message || "This ticket was already scanned earlier! Sneaking in a clone? 😉",
          attendee: data.attendee
        });
      } else if (data.code === 'NOT_REGISTERED') {
        if (navigator.vibrate) navigator.vibrate([150]);
        playFeedbackSound('error');

        setResult({
          type: 'error',
          icon: '🛑',
          title: "Imposter Alert! 🕵️",
          message: data.message || "This QR code isn't in our system. Did someone draw this with crayons? 🖍️"
        });
      } else {
        if (navigator.vibrate) navigator.vibrate([100]);
        playFeedbackSound('error');

        setResult({
          type: 'error',
          icon: '💥',
          title: "Ticket Turbulence! ✈️",
          message: data.message || "Check-in hit a bump. Please check with the front desk boss!"
        });
      }
    } catch (err) {
      console.error('Check-in error:', err);
      if (navigator.vibrate) navigator.vibrate([100]);
      playFeedbackSound('error');

      setResult({
        type: 'error',
        icon: '🧘‍♂️',
        title: "Server Tripped Over a Mat!",
        message: "Couldn't reach the mother-ship. Give that QR code another flash!"
      });
    } finally {
      setProcessing(false);
    }
  };

  // 3. Initialize Scanner
  useEffect(() => {
    if (!authenticated || checkingSession) {
      return;
    }

    let isEffectActive = true;
    let html5QrCode = null;

    const timer = setTimeout(() => {
      const el = document.getElementById('qr-reader');
      if (!el || !isEffectActive) return;

      try {
        html5QrCode = new Html5Qrcode('qr-reader', {
          verbose: false,
          experimentalFeatures: {
            useBarCodeDetectorIfSupported: true
          }
        });
        scannerRef.current = html5QrCode;

        html5QrCode.start(
          { facingMode: 'environment' },
          {
            fps: 20,
            qrbox: (viewfinderWidth, viewfinderHeight) => {
              // Full-area responsive scanning box (90% of viewfinder)
              const minEdge = Math.min(viewfinderWidth, viewfinderHeight);
              const boxSize = Math.max(180, Math.floor(minEdge * 0.90));
              return { width: boxSize, height: boxSize };
            },
            disableFlip: false,
          },
          (decodedText, decodedResult) => {
            console.log('🎯 QR Code successfully scanned:', decodedText);
            if (processingRef.current) return;
            // udapte user ifnromation and perform the check in process 
            performCheckin(decodedText);
          },
          () => {
            // Ignore normal frame misses
          }
        ).catch((err) => {
          console.warn('Camera start error:', err);
          if (isEffectActive) {
            setCameraError('Camera access unavailable or waiting for permissions. You can also use manual lookup below.');
          }
        });
      } catch (err) {
        console.warn('HTML5QRCode constructor error:', err);
      }
    }, 150);

    return () => {
      isEffectActive = false;
      clearTimeout(timer);
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => { });
        scannerRef.current = null;
      }
    };
  }, [authenticated, checkingSession]);

  const handleScanNext = () => {
    setResult(null);
    setProcessing(false);
    processingRef.current = false;
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!manualCode.trim()) return;
    performCheckin(manualCode.trim());
    setManualCode('');
  };

  if (checkingSession) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Verifying your admin mojo... 🕵️‍♂️</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>{statusMessage || "Redirecting to login..."}</p>
      </div>
    );
  }

  return (
    <div className={styles.mobileViewport}>
      {/* Top Bar */}
      <div className={styles.topBar} />

      {/* Header */}
      <header className={styles.mobileHeader}>
        <div className={styles.logoCenterWrapper}>
          <img
            src="/Images/CB_Logos/logo_new_black.png"
            alt="Creators Blueprint"
            className={styles.brandLogo}
          />
        </div>
      </header>

      {/* Main Container */}
      <main className={styles.mainContainer}>
        {/* Camera Viewfinder Card */}
        <div className={styles.cameraCard}>
          <div className={styles.cameraTitleRow}>
            <div className={styles.adminBadge}>
              <span className={styles.badgeDot}></span>
              <span>ADMIN SCANNER</span>
            </div>
            <h1 className={styles.eventTitle}>Flow &amp; Fortune Check-In</h1>
            <p className={styles.eventSubtitle}>Point camera at an attendee's QR ticket</p>
          </div>

          <div className={styles.scannerFrame}>
            <div id="qr-reader" style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Camera Notice */}
          {cameraError && (
            <div className={styles.cameraNotice}>
              📷 {cameraError}
            </div>
          )}

          {/* Active Processing Indicator */}
          {processing && !result && (
            <div className={styles.statusBar}>
              <span className={styles.spinner} style={{ width: '14px', height: '14px', borderWidth: '2px' }}></span>
              <span>Consulting the guestlist gods... ✨</span>
            </div>
          )}
        </div>

        {/* Manual Lookup Fallback */}
        <div className={styles.manualSection}>
          <div className={styles.manualHeader}>
            <span className={styles.manualLabel}>Manual Ticket Lookup</span>
            <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Type or paste UUID</span>
          </div>
          <form onSubmit={handleManualSubmit} className={styles.manualForm}>
            <input
              type="text"
              placeholder="Paste ticket code..."
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
              className={styles.manualInput}
              disabled={processing}
            />
            <button
              type="submit"
              className={styles.manualSubmitBtn}
              disabled={processing || !manualCode.trim()}
            >
              Verify
            </button>
          </form>
        </div>
      </main>

      {/* Mobile Slide-Up Result Sheet / Modal */}
      {result && (
        <div className={styles.resultOverlay} onClick={handleScanNext}>
          <div
            className={`${styles.resultSheet} ${result.type === 'success'
              ? styles.sheetSuccess
              : result.type === 'warning'
                ? styles.sheetWarning
                : styles.sheetError
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.sheetHandle}></div>

            <div className={styles.resultHeaderIcon}>{result.icon}</div>
            <h2 className={styles.resultTitle}>{result.title}</h2>
            <p className={styles.resultMessage}>{result.message}</p>

            {result.attendee && (
              <div className={styles.attendeeBadgeCard}>
                <h3 className={styles.attendeeFullName}>
                  {result.attendee.firstName} {result.attendee.lastName}
                </h3>
                {result.attendee.instagram && (
                  <a
                    href={`https://instagram.com/${result.attendee.instagram.replace(/^@/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.attendeeInstaTag}
                  >
                    <span>📸</span>
                    <span>@{result.attendee.instagram.replace(/^@/, '')}</span>
                  </a>
                )}
              </div>
            )}

            <button className={styles.bigScanNextBtn} onClick={handleScanNext}>
              <span>Scan Next VIP 🎟️</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkin;
