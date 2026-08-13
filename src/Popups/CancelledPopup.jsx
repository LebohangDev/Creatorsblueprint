import React from 'react';
import styles from './Popups.module.css';

const CancelledPopup = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popupCard} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close popup">
          ✕
        </button>

        <span className={styles.cancelledBadge}>Checkout Cancelled</span>

        <h3 className={styles.title}>Payment Not Completed</h3>

        <p className={styles.description}>
          Your spot remains open. You can complete your registration whenever you're ready.
        </p>

        <button className={`${styles.actionBtn} ${styles.actionBtnSecondary}`} onClick={onClose}>
          Return Back
        </button>
      </div>
    </div>
  );
};

export default CancelledPopup;
