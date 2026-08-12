import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const steps = [
    {
        number: '01',
        title: 'Step 1: Claim your link in bio handle',
        desc: 'Choose your custom username and create your creator account.',
        icon: 'ri-user-add-line'
    },
    {
        number: '02',
        title: 'Step 2: Build your offer',
        desc: 'Add existing digital products or create new ones using our platform.',
        icon: 'ri-add-circle-line'
    },
    {
        number: '03',
        title: 'Step 3: Put link in bio & start selling',
        desc: 'Place your Creators Blueprint link in your Instagram, TikTok, or YouTube bio and monetize your audience.',
        icon: 'ri-rocket-line'
    }
];

export default function HowItWorks() {
    const handleCTAClick = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Start Building for Free',
                content_category: 'SaaS Signup Start',
                section: 'How It Works'
            });
        }
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: 'How It Works',
                value: 0
            });
        }
        setTimeout(() => {
            window.location.href = "https://app.creatorsblueprint.io";
        }, 150);
    };

    return (
        <section className={styles.howItWorksSection} id="how-it-works">
            <div className={styles.howItWorksHeader}>
                <h2 className={styles.sectionTitle}>
                    How it <span>works</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                    Launch your creator store and start selling in 3 simple steps.
                </p>
            </div>

            <div className={styles.stepsGrid}>
                {steps.map((step, idx) => (
                    <motion.div 
                        key={idx}
                        className={styles.stepCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                        <div className={styles.stepCardHeader}>
                            <span className={styles.stepNumber}>{step.number}</span>
                            <div className={styles.stepIconWrap}>
                                <i className={step.icon}></i>
                            </div>
                        </div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className={styles.howItWorksCtaWrapper}>
                <p className={styles.easyLabel}>Yeah, we know... it's that easy.</p>
                <a 
                    href="https://app.creatorsblueprint.io" 
                    className={styles.primaryButton}
                    onClick={handleCTAClick}
                >
                    Start Building for Free <i className="ri-arrow-right-line"></i>
                </a>
            </div>
        </section>
    );
}
