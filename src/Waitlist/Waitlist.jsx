import React, { useEffect, useState } from 'react';
import styles from './Waitlist.module.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('handle') || params.get('username') || '';
  });
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidInsta, setIsValidInsta] = useState(false);
  const [loading, setLoading] = useState(false);

  async function addToWaitlist() {
    setLoading(true);
    try {
      const cleanInsta = instagram.startsWith('@') ? instagram.slice(1) : instagram;
      const res = await fetch('https://creatorsblueprintbackend-648711352735.me-west1.run.app/api/waitlist', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, cleanInsta }),
      });

      if (res.status === 409) {
        const errorMessage = "Email already exists on waitlist! ";
        setMessage(errorMessage);
        setSubmitted(false);
        setLoading(false);

        throw new Error("Email already exists on waitlist!");

      }
      if (!res.ok) {
        const newMessage = "Failed to subscribe user try again";
        setMessage(newMessage);
        setSubmitted(false);
        setLoading(false);

        throw new Error("failed to subscribe user");

      }

      if (window.fbq) {
        window.fbq("track", "Lead");
        window.fbq("track", "CompleteRegistration");
      }
      const newMessage = "Successfully subscribed to waitlist";
      setMessage(newMessage);
      setSubmitted(true);
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.error("failed to subscribe user:", e);
    }
    setLoading(false);
  }

  useEffect(() => {

    // Add email regex test
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    // Add instagram regex test
    const cleanInsta = instagram.startsWith('@') ? instagram.slice(1) : instagram;
    const instaRegex = /^[a-zA-Z0-9._]{1,30}$/;
    const isInstaValid = instaRegex.test(cleanInsta);

    setIsValidEmail(isEmailValid);
    setIsValidInsta(isInstaValid);

    if (email.length > 0 && !isEmailValid) {
      setMessage("Please enter a valid email address");
    } else if (instagram.length > 0 && !isInstaValid) {
      setMessage("Please enter a valid Instagram handle");
    } else if (email.length === 0) {
      setMessage(""); // Clear message if empty
    } else {
      setMessage("");
    }


  }, [email, instagram])

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');

    }

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();



    setMessage(""); // clear previous messages

    if (email) {
      await addToWaitlist();
      setLoading(false);
    }
  };

  return (
    <div className={styles.waitlistContainer}>
      <motion.div
        className={styles.glassCard}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <img src="/Images/CB_Logos/logo_new.png" alt="CBstudio" />


        </motion.div>

        <motion.h1 className={styles.title} variants={itemVariants}>Turn Your Knowledge Into A Digital Product In Under 90 Seconds</motion.h1>

        <motion.div className={styles.waitlistCount} variants={itemVariants}>
          <span className={styles.pulseIcon}></span> Join 2,137 creators already on the waitlist
        </motion.div>

        <motion.div className={styles.perksSection} variants={itemVariants}>
          <ul className={styles.perksList}>
            <li><span className={styles.checkIcon}>✓</span> Free guide to launch your first product</li>
            <li><span className={styles.checkIcon}>✓</span> Priority support</li>
            <li><span className={styles.checkIcon}>✓</span> Founding member status</li>
          </ul>
        </motion.div>

        {!submitted ? (
          <motion.form onSubmit={handleSubmit} className={styles.formElement} variants={itemVariants}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.inputField}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);

              }}
              required
            />
            <div className={styles.inputWrapper}>
              <span className={styles.atSymbol}>@</span>
              <input
                type="text"
                placeholder="Instagram handle (Optional)"
                className={`${styles.inputField} ${styles.inputFieldWithIcon}`}
                value={instagram}
                onChange={(e) => {
                  setInstagram(e.target.value);
                }}
              />
            </div>
            <button type="submit" disabled={!isValidEmail || (instagram.length > 0 && !isValidInsta) || loading} className={styles.submitButton}>
              {loading ? "Submitting..." : "Claim My Priority Support Spot →"}
            </button>
            <p className={styles.message}>{message}</p>
          </motion.form>
        ) : (
          <motion.div className={styles.successMessage} variants={itemVariants}>
            <h3>You're on the list! 🎉</h3>
            <p>Keep an eye on your inbox for priority support updates.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Waitlist;
