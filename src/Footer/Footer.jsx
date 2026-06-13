import { useNavigate, useLocation } from "react-router-dom";
import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollTo = (e, id) => {
        e.preventDefault();
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
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.brandSection}>
                    <img src="/Images/CB_Logos/logo_new.png" alt="CB Studio" className={styles.logo} />
                    <p className={styles.brandDesc}>
                        Turn your attention into assets. Build digital products, launch automated sales pages, and scale smarter with the all-in-one creator backend.
                    </p>
                    <div className={styles.socials}>
                        <a href="https://www.instagram.com/creatorsblueprint.io" target="_blank" rel="noreferrer"><i className="ri-instagram-line"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=61580392831846" target="_blank" rel="noreferrer"><i className="ri-facebook-circle-fill"></i></a>
                        <a href="https://wa.link/creatorsblueprint" target="_blank" rel="noreferrer"><i className="ri-whatsapp-line"></i></a>
                    </div>
                </div>

                <div className={styles.linksSection}>
                    <div className={styles.linkColumn}>
                        <h4>Platform</h4>
                        <a href="#features" onClick={(e) => handleScrollTo(e, 'features')}>Features</a>
                        <a href="#how-it-works" onClick={(e) => handleScrollTo(e, 'how-it-works')}>How it Works</a>
                        <a href="https://app.creatorsblueprint.io/pricing">Pricing</a>
                    </div>
                    <div className={styles.linkColumn}>
                        <h4>Company</h4>
                        <a href="#mission" onClick={(e) => handleScrollTo(e, 'mission')}>Mission</a>
                        <a href="#proof" onClick={(e) => handleScrollTo(e, 'proof')}>Phase 1 Proof</a>
                        <a href="mailto:hello@creatorsblueprint.io">Contact</a>
                    </div>
                    <div className={styles.linkColumn}>
                        <h4>Legal</h4>
                        <a href="/legal/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        <a href="/legal/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; {currentYear} CB Studio by Creatorsblueprint. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;