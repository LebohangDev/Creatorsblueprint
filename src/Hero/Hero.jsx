import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const CTA_URL = "https://app.creatorsblueprint.io";

export default function Hero() {
    const [handleInput, setHandleInput] = useState('');

    const handleCTAClick = (e, sectionName, customHandle = null) => {
        if (e && e.preventDefault) e.preventDefault();

        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Start Your 7-Day Free Trial',
                content_category: 'SaaS Signup Start',
                section: sectionName
            });
        }
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: sectionName,
                value: 0
            });
        }

        const handleToUse = customHandle !== null ? customHandle : handleInput;
        const cleanHandle = handleToUse ? handleToUse.trim().replace(/^@/, '') : '';
        const targetUrl = cleanHandle 
            ? `${CTA_URL}?handle=${encodeURIComponent(cleanHandle)}`
            : CTA_URL;

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 150);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleCTAClick(e, 'Hero Handle Claim', handleInput);
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroGrid}>
                
                {/* Left Column: Headline, Subtitle, Handle Form & CTAs */}
                <motion.div 
                    className={styles.heroTextCol}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className={styles.heroTitle}>
                        The{' '}
                        <span className={styles.brushHighlight}>
                            link in bio
                            <svg className={styles.brushStroke} viewBox="0 0 280 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="heroBrushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#ffee32" />
                                        <stop offset="50%" stopColor="#ffd100" />
                                        <stop offset="100%" stopColor="#ff9e00" />
                                    </linearGradient>
                                </defs>
                                {/* Stylish hand-drawn double-pass scribble underline with animated draw */}
                                <motion.path 
                                    d="M 4 5 C 70 3, 170 3, 272 5 C 190 10, 90 12, 14 14 C 90 13, 180 12, 276 13" 
                                    stroke="url(#heroBrushGradient)" 
                                    strokeWidth="2.2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                                />
                            </svg>
                        </span>{' '}
                        for your <span>creator business.</span>
                    </h1>

                    <p className={styles.heroSubText}>
                        Build your storefront, sell digital products, accept direct payouts, and manage your creator business, all from one high-converting link in bio.
                    </p>


                    {/* Primary & Secondary Buttons */}
                    <div className={styles.heroButtonGroup}>
                        <a 
                            href={CTA_URL} 
                            className={styles.primaryButtonLarge}
                            onClick={(e) => handleCTAClick(e, 'Hero Main Button')}
                        >
                            Start Your 7-Day Free Trial <i className="ri-arrow-right-line"></i>
                        </a>
                        <a
                            href="#how-it-works"
                            className={styles.secondaryButton}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            See How It Works
                        </a>
                    </div>

                    {/* Microcopy & Assurances */}
                    <div className={styles.heroMicrocopyBox}>
                        <div className={styles.heroAssuranceText}>
                            <i className="ri-shield-check-fill"></i>
                            <span>$0 today · Card required · Cancel anytime</span>
                        </div>
                        <div className={styles.heroPricingNotice}>
                            Full access for 7 days. Then $27/month.
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Hajira Dual Stacked iPhone Mockup */}
                <motion.div 
                    className={styles.heroVisualCol}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div className={styles.stackedPhonesStage}>
                        {/* Back iPhone: Instagram Profile */}
                        <div className={`${styles.iphoneFrame} ${styles.backPhoneIG}`}>
                            <img 
                                src="/Images/creators/hajira_ig.png" 
                                alt="Hajira Khan Instagram Profile" 
                                className={styles.iphoneScreenImg}
                            />
                        </div>

                        {/* Front iPhone: Creators Blueprint Storefront */}
                        <div className={`${styles.iphoneFrame} ${styles.frontPhoneStorefront}`}>
                            <img 
                                src="/Images/creators/hajira_storefront.png" 
                                alt="Hajira Khan Storefront" 
                                className={styles.iphoneScreenImg}
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
