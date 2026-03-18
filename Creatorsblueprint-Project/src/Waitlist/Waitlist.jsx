import React, { useEffect, useState } from 'react';
import styles from './Waitlist.module.css';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  async function addToWaitlist() {
    try {
      const res = await fetch('https://creatorsblueprintbackend-648711352735.me-west1.run.app/api/waitlist', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const newMessage = "Failed to subscribe user try again";
        setMessage(newMessage);
        setSubmitted(false);

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
  }

  useEffect(() => {
    // Add email regex test
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsValidEmail(true);
      setMessage("");
    } else {
      setIsValidEmail(false);
      setMessage("Please enter a valid email address");
    }
  }, [email])

  const handleSubmit = async (e) => {
    e.preventDefault();



    setMessage(""); // clear previous messages

    if (email) {
      await addToWaitlist();
      setLoading(true);
      setLoading(false);
    }
  };

  return (
    <div className={styles.waitlistContainer}>
      <div className={styles.glassCard}>
        <div className={styles.header}>
          <img src="Images/CB_Logos/logo_new.png" alt="CBstudio" />


        </div>

        <h1 className={styles.title}>The Future of Digital Product Creation</h1>
        <p className={styles.description}>
          Get updates on the release of our new platform to create digital products,
          manage your own storefront, automate payments and more!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.formElement}>
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
            <button type="submit" disabled={!isValidEmail} className={styles.submitButton}>
              {loading ? "Submitting..." : "Join Waitlist"}
            </button>
            <p className={styles.message}>{message}</p>
          </form>
        ) : (
          <div className={styles.successMessage}>
            <h3>You're on the list! 🎉</h3>
            <p>Keep an eye on your inbox for early access updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Waitlist;
