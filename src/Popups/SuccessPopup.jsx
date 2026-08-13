import React from 'react';
import styles from './Popups.module.css';

const SuccessPopup = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popupCard} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close popup">
          ✕
        </button>

        <span className={styles.successBadge}>Registration Confirmed</span>

        <h3 className={styles.title}>Flow & Fortune</h3>

        <div className={styles.detailsBlock}>
          <div>Reshaped Studio, Marina, Dubai</div>
          <div>Saturday, Sept 5 • 11:00 AM</div>
        </div>

        <p className={styles.description}>
          Your spot has been reserved. A confirmation email with event details has been sent to your inbox.
        </p>

        <button className={styles.actionBtn} onClick={onClose}>
          Return Back
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
