import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import styles from './FAQ.module.css';

export default function FAQ() {
    const { t } = useLanguage();
    const [openIdx, setOpenIdx] = useState(0);

    const toggleFaq = (idx) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    const faqList = t.faq?.items || [];

    return (
        <section className={styles.faqSection} id="faq">
            <div className={styles.faqHeader}>
                <h2 className={styles.sectionTitle}>
                    {t.faq.title}
                </h2>
                <p className={styles.sectionSubtitle}>
                    {t.faq.subtitle}
                </p>
            </div>

            <div className={styles.faqAccordionContainer}>
                {faqList.map((item, idx) => {
                    const isOpen = openIdx === idx;
                    return (
                        <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
                            <button className={styles.faqQuestionRow} onClick={() => toggleFaq(idx)}>
                                <span>{item.q}</span>
                                <i className={`ri-chevron-down-line ${styles.faqChevron} ${isOpen ? styles.faqChevronRotate : ''}`}></i>
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        className={styles.faqAnswerContent}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <p>{item.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}