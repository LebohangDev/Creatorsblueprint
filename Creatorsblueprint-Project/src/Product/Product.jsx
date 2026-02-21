
import React, { useState } from 'react';
import styles from './product.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Product = () => {
    const [activeTab, setActiveTab] = useState('paid');
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setIsValidEmail(validateEmail(val));
    };



    const book_info = [
        {
            type: 'free',
            id: 'free_book',
            image: '/Images/Ebooks/free_book.svg',
            title: 'Free',
            header: <>GET <span>INSTANT</span> ACCESS TO OUR FREE EBOOK!</>,
            subTitle: 'Enter your email to get access to our free eBook!',
            pointsTitle: <>What will <span>you</span> learn?</>,
            pointsSubtitle: 'Everything you need to know to build, grow, and earn from your online community.',
            points: [
                {
                    icon: 'ri-line-chart-line',
                    text: 'How to turn followers into paying fans'
                },
                {
                    icon: 'ri-user-star-line',
                    text: 'How to build a strong personal brand'
                },
                {
                    icon: 'ri-rocket-line',
                    text: 'How to create multiple streams of income'
                }
            ]
        },
        {
            type: 'paid',
            id: 'paid_book',
            amount: 9,
            image: '/Images/Ebooks/paid_book.svg', // Placeholder or same naming convention
            title: 'From content to cashflow ebook',
            header: <>UNLOCK THE <span>FULL</span> CREATOR BLUEPRINT</>,
            subTitle: 'Get the complete system to monetize your audience.',
            pointsTitle: <>Deep Dive <span>Strategies</span></>,
            pointsSubtitle: 'Advanced techniques for scaling up your platform as your audience, content, and revenue expand.',
            points: [
                {
                    icon: 'ri-money-dollar-circle-line',
                    text: 'Advanced monetization strategies'
                },
                {
                    icon: 'ri-briefcase-4-line',
                    text: 'Building a sustainable business model'
                },
                {
                    icon: 'ri-vip-crown-line',
                    text: 'Exclusive access to resources and tools'
                }
            ],
            successUrl: "https://creatorsblueprint.io/Books/Paidbook/From_content_to_cashflow_ebook_cb.pdf",
            cancelUrl: "https://creatorsblueprint.io/?payment=cancel",
        }
    ];

    // keep track of which current books information should be rendered 

    const currentBook = activeTab === 'paid' ? book_info[1] : book_info[0];

    // pass the selected plan from user
    async function handleZinnaPayment(bookChoice) {
        try {

            const paidBook = {
                amount: bookChoice.amount,
                title: bookChoice.title,
                email: email,
                successUrl: bookChoice.successUrl,
                cancelUrl: bookChoice.cancelUrl,


            }
            console.log(paidBook);

            const res = await fetch('https://creatorsblueprintbackend.onrender.com/api/create-payment-intent', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(paidBook),

            });
            console.log(paidBook);

            const data = await res.json()
            console.log("data:", data);
            window.location.href = data.redirect_url;

            console.log("redirect url:", data.redirect_url)



        } catch (e) {
            console.error("failed to send request to create payment session for user:", e)



        }






    }

    return (
        <div className={styles.productContainer}>
            <div className={styles.productContent}>
                <div className={styles.topSection}>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.infoContainer}
                        >
                            <h1>{currentBook.header}</h1>
                            <p>{currentBook.subTitle}</p>

                            {activeTab === 'free' ? (
                                <div className={styles.formContainer}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className={styles.emailInput}
                                    />
                                    <a href="Books/0_to_Viral_Instagram.pdf" download>
                                        <button
                                            className={styles.accessButton}
                                            disabled={!isValidEmail}
                                            onClick={() => { setEmail(''); }}

                                        >
                                            Get Access
                                        </button>
                                    </a>
                                </div>
                            ) : (
                                <div className={styles.formContainer}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className={styles.emailInput}
                                    />
                                    <button
                                        type="button"
                                        className={styles.paidButton}
                                        disabled={!isValidEmail}
                                        onClick={() => { setEmail(''); handleZinnaPayment(currentBook); console.log(currentBook); }}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <div className={styles.bookContainer}>
                        {/* toggle between free and paid versions */}
                        <div className={styles.toggleContainer}>
                            {/* free version set .active to design for active state*/}
                            <button className={activeTab === 'free' ? styles.buttonActive : styles.toggleButton} onClick={() => setActiveTab('free')}>
                                Free Version
                            </button>

                            <button className={activeTab === 'paid' ? styles.buttonActive : styles.toggleButton} onClick={() => setActiveTab('paid')}>
                                Paid Version
                            </button>
                        </div>
                        <div className={styles.imageContainer}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeTab}
                                    src={currentBook.image}
                                    alt={`${currentBook.type} book`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className={styles.learnContainer}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.learnContent}
                        >
                            <div className={styles.learnHeader}>
                                <h1>{currentBook.pointsTitle}</h1>
                                <p>{currentBook.pointsSubtitle}</p>
                            </div>

                            <div className={styles.learnGrid}>
                                {currentBook.points.map((point, index) => (
                                    <div key={index} className={styles.learnCard}>
                                        <i className={point.icon}></i>
                                        <p>{point.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Product;
