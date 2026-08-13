import React, { useEffect, useState } from 'react';
import styles from './Checkin.module.css';
import { Html5Qrcod } from 'html5-qrcode';
import { div } from 'framer-motion/client';

const Checkin = () => {
  const [checkingSession, setCheckingSession] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // store teh result of the abckend response 
  const [result, setResult] = useState(null);
  const [processing, setProcessing] = useState(false); // this is to disable the scan button for a few seconds after a scan so that we don't send the same data twice

  const sannerRef = useRef(null);
  const processingRef = useRef(false); // just using ref to make sure we don't send the same data twice





  useEffect(() => {
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

        if (res.ok && data.authenticated) {
          setAuthenticated(true);
        } else {
          console.warn('Admin session invalid or expired:', data);
          setAuthenticated(false);
          setStatusMessage(data.message || 'User not signed in. Please sign in first.');
          setTimeout(() => {
            window.location.href = '/admin/login';
          }, 2500);
        }
      } catch (err) {
        console.error('Session check failed:', err);
        setAuthenticated(false);
        setStatusMessage('Session check failed. Please sign in first.');
        setTimeout(() => {
          window.location.href = '/admin/login';
        }, 2500);
      } finally {
        setTimeout(() => {
          setCheckingSession(false);
        }, 2000);
      }
    };

    checkSession();
  }, []);




  // enpoint to send wahts scanned back to checkin 

  if (checkingSession) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Verifying admin session...</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.topBar}></div>
        <div className={styles.content}>
          <div className={styles.badge}>ADMIN PORTAL</div>
          <h1 className={styles.heading}>Admin Scanner</h1>
          <p className={styles.subtext}>Active admin session verified successfully.</p>
        </div>
      </div>
    </div>
  );
};

export default Checkin;
