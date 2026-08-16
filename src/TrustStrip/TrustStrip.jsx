import styles from './TrustStrip.module.css';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function TrustStrip() {
    const { t } = useLanguage();
    const items = t.trustStrip || [];

    return (
        <section className={styles.trustSection}>
            <div className={styles.trustWrapper}>
                <div className={styles.trustContainer}>
                    {items.map((item, idx) => (
                        <div key={idx} className={styles.trustCard}>
                            <div className={styles.iconCircle}>
                                <i className={item.icon}></i>
                            </div>
                            <span className={styles.cardText}>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



