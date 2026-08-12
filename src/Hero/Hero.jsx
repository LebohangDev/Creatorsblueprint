import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext.jsx';

const CTA_URL = "https://app.creatorsblueprint.io";

export default function Hero() {
    const { t } = useLanguage();

    const handleCTAClick = (e, sectionName) => {
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

        setTimeout(() => {
            window.location.href = CTA_URL;
        }, 150);
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroGrid}>
                
                {/* Left Column: Headline, Subtitle, CTAs & Microcopy */}
                <div className={styles.heroTextCol}>
                    <h1 className={styles.heroTitle}>
                        {t.hero.titlePart1}
                        <span className={styles.brushHighlight}>
                            {t.hero.titleHighlight}
                            <svg className={styles.brushStroke} viewBox="0 0 250 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M3 14C50 4 150 3 247 11" stroke="var(--accent-blue)" strokeWidth="6" strokeLinecap="round" />
                            </svg>
                        </span>
                        {t.hero.titlePart2}
                    </h1>

                    <p className={styles.heroSubText}>
                        {t.hero.subtitle}
                    </p>

                    {/* Primary & Secondary Buttons */}
                    <div className={styles.heroButtonGroup}>
                        <a 
                            href={CTA_URL} 
                            className={styles.primaryButtonLarge}
                            onClick={(e) => handleCTAClick(e, 'Hero Main Button')}
                        >
                            {t.hero.cta} <i className="ri-arrow-right-line"></i>
                        </a>
                        <a
                            href="#how-it-works"
                            className={styles.secondaryButton}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {t.nav.howItWorks}
                        </a>
                    </div>

                    {/* Microcopy & Assurances */}
                    <div className={styles.heroMicrocopyBox}>
                        <div className={styles.heroAssuranceText}>
                            <i className="ri-shield-check-fill"></i>
                            <span>{t.hero.trialNote}</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Hajira Dual Stacked iPhone Mockup + Total Revenue Card */}
                <div className={styles.heroVisualCol}>
                    <div className={styles.stackedPhonesStage}>

                        {/* Hajira Total Revenue Floating Card beside Left Phone */}
                        <div className={styles.heroRevenueCard}>
                            <div className={styles.revenueCardHeader}>
                                <span className={styles.revenueLabel}>{t.hero.totalRevenue}</span>
                                <span className={styles.revenueBadge}>{t.hero.thisMonth}</span>
                            </div>
                            <div className={styles.revenueAmountRow}>
                                <span className={styles.revenueAmount}>AED 5,480</span>
                                <svg className={styles.sparklineSvg} viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 2 20 Q 15 18, 25 12 T 42 10 T 58 3" stroke="#0F1B3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className={styles.revenueCardFooter}>
                                <span>{t.hero.successfulSales}</span>
                                <i className="ri-arrow-up-line"></i>
                            </div>
                        </div>

                        {/* Back iPhone: Instagram Profile */}
                        <div className={`${styles.iphoneFrame} ${styles.backPhoneIG}`}>
                            <img 
                                src="/Images/creators/hajira_ig.png" 
                                alt="Hajira Khan Instagram Profile" 
                                className={styles.iphoneScreenImg}
                            />
                        </div>

                        {/* Front iPhone: Creators Blueprint Creator Store */}
                        <div className={`${styles.iphoneFrame} ${styles.frontPhoneStorefront}`}>
                            <img 
                                src="/Images/creators/hajira_storefront.png" 
                                alt="Hajira Khan Creator Store" 
                                className={styles.iphoneScreenImg}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
