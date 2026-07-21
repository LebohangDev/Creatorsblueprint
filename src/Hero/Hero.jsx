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
                        Turn your content into a <span>creator business.</span>
                    </h1>

                    <p className={styles.heroSubText}>
                        Build your storefront, create digital products, accept payments and manage your creator business, all from one platform built for GCC creators.
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
