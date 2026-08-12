import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

const faqItems = [
    {
        q: 'What is Creators Blueprint?',
        a: 'Creators Blueprint is the creator operating system designed specifically for GCC creators. It gives you a single place to launch a custom creator store, create digital products, process payments, and manage your creator business.'
    },
    {
        q: 'How does the 7-day free trial work?',
        a: 'You get full access to all features for 7 days. You won’t be charged today. If you choose to stay, billing starts automatically after your trial.'
    },
    {
        q: 'Can I cancel anytime during the trial?',
        a: 'Yes. You can cancel with one click from your account dashboard anytime during or after your trial without being charged.'
    },
    {
        q: 'How do payments work?',
        a: 'We connect directly to Stripe. When customers buy your digital products or services, money goes straight to your bank account with 0% platform commission.'
    },
    {
        q: 'How are digital products delivered to buyers?',
        a: 'Once a customer completes checkout on your creator store, your PDF guide, ebook, or digital asset is emailed to them instantly and automatically.'
    },
    {
        q: 'Is Creators Blueprint only for GCC creators?',
        a: 'While our platform features regional Arab creator optimization and GCC currency handling, creators worldwide can use Creators Blueprint to launch their creator store.'
    }
];

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState(0);

    const toggleFaq = (idx) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <section className={styles.faqSection} id="faq">
            <div className={styles.faqHeader}>
                <h2 className={styles.sectionTitle}>
                    Frequently asked <span>questions</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                    Everything you need to know about starting your trial.
                </p>
            </div>

            <div className={styles.faqAccordionContainer}>
                {faqItems.map((item, idx) => {
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
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
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