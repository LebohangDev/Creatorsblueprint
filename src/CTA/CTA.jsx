import { motion } from 'framer-motion';
import styles from './CTA.module.css';

export default function CTA() {
    const handleCTAClick = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Start Your 7-Day Free Trial',
                content_category: 'SaaS Signup Start',
                section: 'Final CTA Banner'
            });
        }
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: 'Final CTA Banner',
                value: 0
            });
        }
        setTimeout(() => {
            window.location.href = "https://app.creatorsblueprint.io";
        }, 150);
    };

    return (
        <section className={styles.finalCtaSection}>
            <motion.div 
                className={styles.finalCtaBox}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.finalCtaTitle}>
                    Your audience is already there. <span>Build the business behind it.</span>
                </h2>
                <p className={styles.finalCtaSub}>
                    Launch your storefront, create your first offer and start your 7-day free trial today.
                </p>

                <div className={styles.finalCtaBtnGroup}>
                    <a 
                        href="https://app.creatorsblueprint.io" 
                        className={styles.primaryButtonLarge}
                        onClick={handleCTAClick}
                    >
                        Start Your 7-Day Free Trial <i className="ri-arrow-right-line"></i>
                    </a>
                </div>

                <div className={styles.finalCtaAssurance}>
                    <i className="ri-shield-check-fill"></i>
                    <span>$0 today · Card required · Cancel anytime</span>
                </div>
            </motion.div>
        </section>
    );
}
