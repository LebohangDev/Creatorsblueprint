import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavCTAClick = (type) => {
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Start Free Trial',
                content_category: 'SaaS Signup Start',
                section: `Navbar ${type}`
            });
        }
        setTimeout(() => {
            window.location.href = 'https://app.creatorsblueprint.io';
        }, 150);
    };

    const handleScrollTo = (id) => {
        setMobileMenuOpen(false);
        if (location.pathname === '/') {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    };

    return (
        <motion.div 
            className={styles.navWrapper}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.navContainer}>
                <div className={styles.logo} onClick={() => navigate('/')}>
                    <img src="/Images/CB_Logos/logo_new.png" alt="Creators Blueprint" />
                </div>
                
                <div className={styles.links}>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('spotlight')}>Creator Stories</span>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('features')}>Features</span>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('how-it-works')}>How It Works</span>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('pricing')}>Pricing</span>
                </div>
                
                <div className={styles.navActionRight}>
                    <a href="https://app.creatorsblueprint.io/login" className={styles.loginLink}>Log In</a>
                    <div 
                        onClick={() => handleNavCTAClick('Desktop')} 
                        className={styles.ctaButton}
                    >
                        Start Free Trial
                    </div>
                </div>

                <div 
                    className={styles.mobileMenuToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            className={styles.mobileMenu}
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('spotlight')}>Creator Stories</span>
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('features')}>Features</span>
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('how-it-works')}>How It Works</span>
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('pricing')}>Pricing</span>
                            <a href="https://app.creatorsblueprint.io/login" className={styles.mobileLoginLink}>Log In</a>
                            <div 
                                className={styles.mobileCtaButton}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    handleNavCTAClick('Mobile');
                                }}
                            >
                                Start Free Trial
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default Nav;