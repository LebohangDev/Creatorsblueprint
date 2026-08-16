import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                
                <div className={styles.footerMain}>
                    <div className={styles.footerBrand}>
                        <img src="/Images/CB_Logos/logo_new_black.png" alt="Creators Blueprint" className={styles.footerLogo} />
                        <p className={styles.footerTagline}>
                            {t.footer.tagline}
                        </p>
                    </div>

                    <div className={styles.footerLinks}>
                        <a href="#features">{t.nav?.features || 'Features'}</a>
                        <a href="#spotlight">{t.nav?.creatorStories || 'Creators'}</a>
                        <a href="#how-it-works">{t.nav?.howItWorks || 'How it Works'}</a>
                        <Link to="/legal/privacy">{t.footer.privacy}</Link>
                        <Link to="/legal/terms">{t.footer.terms}</Link>
                        <a href="mailto:help@creatorsblueprint.io">{t.footer.support || 'Support'}</a>
                    </div>

                    <div className={styles.footerSocials}>
                        <a 
                            href="https://www.instagram.com/creatorsblueprint.io" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.socialBtn}
                            aria-label="Instagram"
                            title="Instagram"
                        >
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a 
                            href="https://www.tiktok.com/@creatorsblueprint.io" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.socialBtn}
                            aria-label="TikTok"
                            title="TikTok"
                        >
                            <i className="ri-tiktok-line"></i>
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© {new Date().getFullYear()} Creators Blueprint. {t.footer.rights}</p>
                </div>

            </div>
        </footer>
    );
}