import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <img src="/Images/CB_Logos/logo_new_black.png" alt="Creators Blueprint" className={styles.footerLogo} />
                        <p className={styles.footerTagline}>
                            {t.footer.tagline}
                        </p>
                        <p className={styles.footerSeoSnippet}>
                            {t.footer.seo}
                        </p>
                        <div className={styles.footerSocialRow}>
                            <a 
                                href="https://www.instagram.com/creatorsblueprint.io" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.socialIconBtn}
                                title="Follow Creators Blueprint on Instagram"
                                aria-label="Instagram"
                            >
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a 
                                href="https://www.tiktok.com/@creatorsblueprint.io" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.socialIconBtn}
                                title="Follow Creators Blueprint on TikTok"
                                aria-label="TikTok"
                            >
                                <i className="ri-tiktok-line"></i>
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerNavCols}>
                        <div className={styles.footerCol}>
                            <h5>{t.footer.product}</h5>
                            <ul>
                                <li><a href="#features">Custom Creator Store</a></li>
                                <li><a href="#features">Ebook Builder</a></li>
                                <li><a href="#features">Stripe Payouts</a></li>
                                <li><a href="#features">Pricing</a></li>
                            </ul>
                        </div>

                        <div className={styles.footerCol}>
                            <h5>{t.footer.creators}</h5>
                            <ul>
                                <li><a href="#spotlight">{t.nav.creatorStories}</a></li>
                                <li><a href="#how-it-works">{t.nav.howItWorks}</a></li>
                                <li><a href="https://app.creatorsblueprint.io/login">{t.nav.logIn}</a></li>
                                <li><a href="https://app.creatorsblueprint.io">{t.nav.startFreeTrial}</a></li>
                            </ul>
                        </div>

                        <div className={styles.footerCol}>
                            <h5>{t.footer.legal}</h5>
                            <ul>
                                <li><Link to="/legal/privacy">{t.footer.privacy}</Link></li>
                                <li><Link to="/legal/terms">{t.footer.terms}</Link></li>
                                <li><a href="mailto:help@creatorsblueprint.io">{t.footer.support}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div>
                        © {new Date().getFullYear()} Creators Blueprint (Creatorsblueprint LLC). {t.footer.rights}
                    </div>
                    <div className={styles.footerLegalLinks}>
                        <a href="https://www.instagram.com/creatorsblueprint.io" target="_blank" rel="noopener noreferrer" className={styles.inlineInstaLink}>
                            <i className="ri-instagram-line"></i> Instagram
                        </a>
                        <span>·</span>
                        <a href="https://www.tiktok.com/@creatorsblueprint.io" target="_blank" rel="noopener noreferrer" className={styles.inlineInstaLink}>
                            <i className="ri-tiktok-line"></i> TikTok
                        </a>
                        <span>·</span>
                        <Link to="/legal/privacy">{t.footer.privacy}</Link>
                        <span>·</span>
                        <Link to="/legal/terms">{t.footer.terms}</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}