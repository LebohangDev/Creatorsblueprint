import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollTo = (id) => {
        setMobileMenuOpen(false);
        if (location.pathname === '/' || location.pathname === '/proof') {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 500);
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
                    <img src="/Images/CB_Logos/logo_new.png" alt="CB Studio" />
                </div>
                
                <div className={styles.links}>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('mission')}>Mission</span>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('features')}>Features</span>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('how-it-works')}>How it Works</span>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('proof')}>Proof</span>
                </div>
                
                <div onClick={() => navigate('/waitlist')} className={styles.ctaButton}>
                    Join Now
                </div>
                
                <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line ${styles.mobileMenuToggle}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}></i>
                
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            className={styles.mobileMenu}
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('mission')}>Mission</span>
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('features')}>Features</span>
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('how-it-works')}>How it Works</span>
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('proof')}>Proof</span>
                            <div onClick={() => { setMobileMenuOpen(false); navigate('/waitlist'); }} className={styles.mobileCtaButton}>
                                Join Now
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default Nav;