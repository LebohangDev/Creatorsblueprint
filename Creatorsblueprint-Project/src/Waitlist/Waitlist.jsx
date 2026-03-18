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
  const [instagram, setInstagram] = useState('');
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
      if (!res.ok) {
        const newMessage = "Failed to subscribe user try again";
        setMessage(newMessage);
        setSubmitted(false);
        setLoading(false);

        throw new Error("failed to subscribe user");

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
    } else if (email.length === 0 || instagram.length === 0) {
      setMessage(""); // Clear message if one is empty but no invalid typing
    } else {
      setMessage("");
    }
  }, [email, instagram])

  const handleSubmit = async (e) => {
    e.preventDefault();



    setMessage(""); // clear previous messages

    if (email && instagram) {
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
          <img src="Images/CB_Logos/logo_new.png" alt="CBstudio" />


        </motion.div>

        <motion.h1 className={styles.title} variants={itemVariants}>The Future of Digital Product Creation</motion.h1>
        <motion.p className={styles.description} variants={itemVariants}>
          Get updates on the release of our new platform to create digital products,
          manage your own storefront, automate payments and more!
        </motion.p>

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
                placeholder="Instagram handle"
                className={`${styles.inputField} ${styles.inputFieldWithIcon}`}
                value={instagram}
                onChange={(e) => {
                  setInstagram(e.target.value);
                }}
                required
              />
            </div>
            <button type="submit" disabled={!isValidEmail || !isValidInsta || loading} className={styles.submitButton}>
              {loading ? "Submitting..." : "Join Waitlist"}
            </button>
            <p className={styles.message}>{message}</p>
          </motion.form>
        ) : (
          <motion.div className={styles.successMessage} variants={itemVariants}>
            <h3>You're on the list! 🎉</h3>
            <p>Keep an eye on your inbox for early access updates.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Waitlist;
