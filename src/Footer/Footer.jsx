import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <img src="/Images/CB_Logos/logo_new.png" alt="Creators Blueprint" className={styles.footerLogo} />
                        <p className={styles.footerTagline}>
                            The creator operating system built for GCC creators. Turn your audience into a high-margin digital business.
                        </p>
                        <p className={styles.footerSeoSnippet}>
                            Empowering GCC creators across UAE, KSA, Qatar, Kuwait, Bahrain, and Oman with custom creator stores, digital product pipelines, and Stripe payments.
                        </p>
                    </div>

                    <div className={styles.footerNavCols}>
                        <div className={styles.footerCol}>
                            <h5>Product</h5>
                            <ul>
                                <li><a href="#features">Custom Creator Store</a></li>
                                <li><a href="#features">Ebook Builder</a></li>
                                <li><a href="#features">Stripe Payouts</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                            </ul>
                        </div>

                        <div className={styles.footerCol}>
                            <h5>Creators</h5>
                            <ul>
                                <li><a href="#spotlight">Creator Showcase</a></li>
                                <li><a href="#how-it-works">How It Works</a></li>
                                <li><a href="https://app.creatorsblueprint.io/login">Log In</a></li>
                                <li><a href="https://app.creatorsblueprint.io">Start Free Trial</a></li>
                            </ul>
                        </div>

                        <div className={styles.footerCol}>
                            <h5>Legal & Trust</h5>
                            <ul>
                                <li><Link to="/legal/privacy">Privacy Policy</Link></li>
                                <li><Link to="/legal/terms">Terms of Service</Link></li>
                                <li><a href="mailto:support@creatorsblueprint.io">Contact Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div>
                        © {new Date().getFullYear()} Creators Blueprint (Creatorsblueprint LLC). All rights reserved.
                    </div>
                    <div className={styles.footerLegalLinks}>
                        <Link to="/legal/privacy">Privacy Policy</Link>
                        <span>·</span>
                        <Link to="/legal/terms">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}