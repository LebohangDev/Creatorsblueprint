// src/pages/PaymentCancel.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/PaymentPage.module.css";

export default function PaymentCancel() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to home after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>❌ Payment Canceled</h1>
        <p className={styles.message}>
          Your payment was canceled. You will be redirected to the home page shortly.
        </p>
      </div>
    </div>
  );
}