import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Pricing.module.css';

export default function Pricing() {
    const [annualBilling, setAnnualBilling] = useState(false);

    const handlePricingCTAClick = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Start My 7-Day Free Trial',
                content_category: 'SaaS Signup Start',
                section: 'Pricing Section'
            });
        }
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: 'Pricing Section',
                value: 0
            });
        }
        setTimeout(() => {
            window.location.href = "https://app.creatorsblueprint.io";
        }, 150);
    };

    return (
        <section className={styles.pricingSection} id="pricing">
            <div className={styles.pricingHeader}>
                <h2 className={styles.sectionTitle}>
                    Simple, transparent <span>pricing</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                    7 days free · $0 charged today · Cancel anytime
                </p>

                <div className={styles.billingToggleWrapper}>
                    <button 
                        className={`${styles.toggleBtn} ${!annualBilling ? styles.billingActive : ''}`}
                        onClick={() => setAnnualBilling(false)}
                    >
                        Monthly
                    </button>
                    <button 
                        className={`${styles.toggleBtn} ${annualBilling ? styles.billingActive : ''}`}
                        onClick={() => setAnnualBilling(true)}
                    >
                        Annual <span className={styles.discountBadge}>Save 20%</span>
                    </button>
                </div>
            </div>

            <div className={styles.pricingCardWrapper}>
                <motion.div 
                    className={styles.pricingCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.pricingCardHeader}>
                        <span className={styles.pricingPlanName}>Creator Pro</span>
                        <div className={styles.priceDisplay}>
                            <span className={styles.currency}>$</span>
                            <span className={styles.amount}>0</span>
                            <span className={styles.period}>/ 7 days free</span>
                        </div>
                        <p className={styles.thenPrice}>
                            Then {annualBilling ? '$21.60' : '$27'}/month. Card required. Cancel anytime in one click.
                        </p>
                    </div>

                    <ul className={styles.pricingFeatureList}>
                        <li><i className="ri-checkbox-circle-fill"></i> <span>Custom Creator Storefront</span></li>
                        <li><i className="ri-checkbox-circle-fill"></i> <span>Unlimited Digital Products & Ebooks</span></li>
                        <li><i className="ri-checkbox-circle-fill"></i> <span>Stripe Payouts (0% Commission)</span></li>
                        <li><i className="ri-checkbox-circle-fill"></i> <span>Automatic Email File Delivery</span></li>
                        <li><i className="ri-checkbox-circle-fill"></i> <span>Storefront Views & Clicks</span></li>
                    </ul>

                    <button 
                        className={styles.pricingCtaButton}
                        onClick={handlePricingCTAClick}
                    >
                        Start My 7-Day Free Trial <i className="ri-arrow-right-line"></i>
                    </button>

                    <div className={styles.pricingGuarantees}>
                        <span><i className="ri-shield-check-line"></i> Full platform access</span>
                        <span><i className="ri-flashlight-line"></i> Set up in minutes</span>
                        <span><i className="ri-close-circle-line"></i> Cancel before day 7 and pay nothing</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
