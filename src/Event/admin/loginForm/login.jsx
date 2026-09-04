import React, { useState } from 'react';
import styles from './login.module.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      setMessage({ text: "Hold on boss! 🛑 Can't sneak in without your email and password.", type: 'error' });
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const backendUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:8080/api/admin/login'
        : 'https://creatorsblueprintbackend-648711352735.me-west1.run.app/api/admin/login';

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          password: password
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {


        if (!data.token) {
          throw new Error("Login succeeded but no token was returned");
        }
        // Storing token in session storage instead of cookies 
        sessionStorage.setItem('event_admin_token', data.token);
        setMessage({ text: data.message || "Boom, you're in! 🚀 Rolling out the red carpet...", type: 'success' });
        setTimeout(() => {
          window.location.href = "/admin/Checkin";
        }, 800);

      } else {
        let errorText = data.message || data.error;

        switch (data.code) {
          case 'INVALID_CREDENTIALS':
            errorText = data.message || "Nice try sneaky! 🕵️ That email or password didn't match our VIP guestlist.";
            break;
          case 'MISSING_CREDENTIALS':
            errorText = data.message || "Ghost logins aren't allowed 👻 Please drop both email and password.";
            break;
          case 'DATA_NOT_FOUND':
            errorText = data.message || "Account not found in the matrix 🤖 Double check your admin credentials!";
            break;
          default:
            errorText = errorText || "Authentication took a detour 🗺️ Let's try that one more time.";
            break;
        }

        setMessage({ text: errorText, type: 'error' });
      }
    } catch (err) {
      console.error('Admin login request failed:', err);
      setMessage({ text: "Servers taking a matcha latte break 🍵 Couldn't connect, give it another spin!", type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginCard}>
        {/* Top Accent Gradient Line */}
        <div className={styles.topAccentBar} />

        {/* Header */}
        <div className={styles.cardHeader}>
          <div className={styles.logoRow}>
            <img
              src="/Images/CB_Logos/logo_new_black.png"
              alt="Creators Blueprint"
              className={styles.brandLogo}
            />
          </div>

          <div className={styles.badgeRow}>
            <span className={styles.badgeDot}></span>
            <span>ADMIN PORTAL</span>
          </div>

          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Sign in with your administrative credentials to manage event registrations.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.formElement} noValidate>
          {/* Email Input */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="admin-email">Email Address</label>
            <div className={styles.inputContainer}>
              <div className={styles.inputIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <input
                id="admin-email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                autoComplete="email"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="admin-password">Password</label>
            <div className={styles.inputContainer}>
              <div className={styles.inputIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className={styles.togglePasswordBtn}
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>



          {/* Submit Button */}
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner}></span>
                <span>Checking VIP Credentials... 🕵️‍♂️</span>
              </>
            ) : (
              'Sign In to Dashboard 🚀'
            )}
          </button>

          {/* Feedback Message */}
          {message.text && (
            <div className={`${styles.messageBox} ${styles[message.type]}`}>
              {message.text}
            </div>
          )}
        </form>

        <div className={styles.cardFooter}>
          🔒 Authorized crew only. Trespassers will be assigned 100 burpees.
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
