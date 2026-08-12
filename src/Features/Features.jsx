import { motion } from 'framer-motion';
import styles from './Features.module.css';

export default function Features() {
    return (
        <section className={styles.featuresSection} id="features">
            <div className={styles.featuresHeader}>
                <h2 className={styles.sectionTitle}>
                    Everything your <span>link in bio</span> needs
                </h2>
                <p className={styles.sectionSubtitle}>
                    Turn your link in bio into a high-converting creator store with all the tools built into one place.
                </p>
            </div>

            <div className={styles.bentoGrid}>
                
                {/* 1. Creator Store (Large Featured Card) */}
                <motion.div 
                    className={`${styles.bentoCard} ${styles.bentoCardLarge}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <div className={styles.cardHeaderRow}>
                            <div className={styles.featureIconCircle}>
                                <i className="ri-store-2-line"></i>
                            </div>
                            <span className={styles.statusPillLive}>
                                <i className="ri-pulse-fill"></i> Live v1.4
                            </span>
                        </div>
                        <h3 className={styles.cardTitle}>Custom Link-in-Bio Creator Store</h3>
                        <p className={styles.cardDescription}>
                            Keep your digital products, links, and creator brand identity in one high-converting link in bio page.
                        </p>
                        <ul className={styles.featureChecklist}>
                            <li><i className="ri-checkbox-circle-fill"></i> Link-in-bio creator store</li>
                            <li><i className="ri-checkbox-circle-fill"></i> Mobile-first design</li>
                            <li><i className="ri-checkbox-circle-fill"></i> Custom handle & bio</li>
                        </ul>
                    </div>

                </motion.div>

                {/* 2. Ebook & Digital Product Builder */}
                <motion.div 
                    className={styles.bentoCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <div>
                        <div className={styles.cardHeaderRow}>
                            <div className={styles.featureIconCircle}>
                                <i className="ri-book-read-line"></i>
                            </div>
                            <span className={styles.statusPillLive}>
                                <i className="ri-pulse-fill"></i> Live v1.4
                            </span>
                        </div>
                        <h3 className={styles.cardTitle}>Ebook & Digital Product Builder</h3>
                        <p className={styles.cardDescription}>
                            Turn your notes into ready-to-sell PDFs and digital products in minutes.
                        </p>
                    </div>
                    <ul className={styles.featureChecklist}>
                        <li><i className="ri-checkbox-circle-fill"></i> Instant PDF generation</li>
                        <li><i className="ri-checkbox-circle-fill"></i> Automated cover art</li>
                    </ul>
                </motion.div>

                {/* 3. Direct Stripe Payouts */}
                <motion.div 
                    className={styles.bentoCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div>
                        <div className={styles.cardHeaderRow}>
                            <div className={styles.featureIconCircle}>
                                <i className="ri-bank-card-line"></i>
                            </div>
                            <span className={styles.statusPillLive}>
                                <i className="ri-pulse-fill"></i> Live v1.4
                            </span>
                        </div>
                        <h3 className={styles.cardTitle}>Stripe Payouts (0% Fee)</h3>
                        <p className={styles.cardDescription}>
                            Get paid directly to your bank account with zero platform commission on sales.
                        </p>
                    </div>
                    <ul className={styles.featureChecklist}>
                        <li><i className="ri-checkbox-circle-fill"></i> Direct bank payouts</li>
                        <li><i className="ri-checkbox-circle-fill"></i> 0% platform fee</li>
                    </ul>
                </motion.div>

                {/* 4. Automatic File Delivery */}
                <motion.div 
                    className={styles.bentoCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <div>
                        <div className={styles.cardHeaderRow}>
                            <div className={styles.featureIconCircle}>
                                <i className="ri-mail-send-line"></i>
                            </div>
                            <span className={styles.statusPillLive}>
                                <i className="ri-pulse-fill"></i> Live v1.4
                            </span>
                        </div>
                        <h3 className={styles.cardTitle}>Automatic File Delivery</h3>
                        <p className={styles.cardDescription}>
                            Instant email fulfillment sent directly to buyers upon checkout completion.
                        </p>
                    </div>
                    <ul className={styles.featureChecklist}>
                        <li><i className="ri-checkbox-circle-fill"></i> Instant email delivery</li>
                        <li><i className="ri-checkbox-circle-fill"></i> Secure file hosting</li>
                    </ul>
                </motion.div>

                {/* 5. Live Affiliate Partner Program */}
                <motion.div 
                    className={styles.bentoCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div>
                        <div className={styles.cardHeaderRow}>
                            <div className={styles.featureIconCircle}>
                                <i className="ri-share-forward-line"></i>
                            </div>
                            <span className={styles.statusPillLive}>
                                <i className="ri-pulse-fill"></i> Live v1.4
                            </span>
                        </div>
                        <h3 className={styles.cardTitle}>Live Affiliate System</h3>
                        <p className={styles.cardDescription}>
                            Earn 35% recurring commissions on all referred subscribers you bring on board.
                        </p>
                    </div>
                    <ul className={styles.featureChecklist}>
                        <li><i className="ri-checkbox-circle-fill"></i> 35% recurring payout</li>
                        <li><i className="ri-checkbox-circle-fill"></i> Automated referral tracking</li>
                    </ul>
                </motion.div>

                {/* 6. Phase 2: Marketing Guides */}
                <motion.div 
                    className={`${styles.bentoCard} ${styles.bentoCardDisabled}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <div>
                        <div className={styles.cardHeaderRow}>
                            <div className={`${styles.featureIconCircle} ${styles.featureIconCirclePhase2}`}>
                                <i className="ri-book-read-line"></i>
                            </div>
                            <span className={styles.statusPillSoon}>
                                <i className="ri-time-line"></i> Coming Soon · Phase 2
                            </span>
                        </div>
                        <h3 className={styles.cardTitle}>Marketing Guides</h3>
                        <p className={styles.cardDescription}>
                            Step-by-step playbooks and guides to help you launch your ebooks, grow your email list, and boost your sales.
                        </p>
                    </div>
                    <ul className={styles.featureChecklist}>
                        <li><i className="ri-checkbox-circle-fill"></i> Simple launch plans for your digital products</li>
                        <li><i className="ri-checkbox-circle-fill"></i> Proven tips to convert followers into buyers</li>
                        <li><i className="ri-checkbox-circle-fill"></i> Easy guides to build and grow your email list</li>
                    </ul>
                </motion.div>

                {/* 7. Phase 2: Content Calendar */}
                <motion.div 
                    className={`${styles.bentoCard} ${styles.bentoCardDisabled}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <div>
                        <div className={styles.cardHeaderRow}>
                            <div className={`${styles.featureIconCircle} ${styles.featureIconCirclePhase2}`}>
                                <i className="ri-calendar-event-line"></i>
                            </div>
                            <span className={styles.statusPillSoon}>
                                <i className="ri-time-line"></i> Coming Soon · Phase 2
                            </span>
                        </div>
                        <h3 className={styles.cardTitle}>Content Calendar</h3>
                        <p className={styles.cardDescription}>
                            Plan out your social media posts, product launches, and promotional announcements in one clean visual calendar.
                        </p>
                    </div>
                    <ul className={styles.featureChecklist}>
                        <li><i className="ri-checkbox-circle-fill"></i> Organize your post ideas and launch dates visually</li>
                        <li><i className="ri-checkbox-circle-fill"></i> Keep track of upcoming product drops and sales</li>
                        <li><i className="ri-checkbox-circle-fill"></i> Stay consistent with your content every week</li>
                    </ul>
                </motion.div>

                {/* 8. Phase 2: Real-Time Analytics */}
                <motion.div 
                    className={`${styles.bentoCard} ${styles.bentoCardDisabled}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <div>
                        <div className={styles.cardHeaderRow}>
                            <div className={`${styles.featureIconCircle} ${styles.featureIconCirclePhase2}`}>
                                <i className="ri-line-chart-line"></i>
                            </div>
                            <span className={styles.statusPillSoon}>
                                <i className="ri-time-line"></i> Coming Soon · Phase 2
                            </span>
                        </div>
                        <h3 className={styles.cardTitle}>Real-Time Analytics</h3>
                        <p className={styles.cardDescription}>
                            Monitor creator store views, product clicks, and conversion rates from your dashboard.
                        </p>
                    </div>
                </motion.div>

                {/* 9. Phase 2: Email Funnels */}
                <motion.div 
                    className={`${styles.bentoCard} ${styles.bentoCardDisabled}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <div>
                        <div className={styles.cardHeaderRow}>
                            <div className={`${styles.featureIconCircle} ${styles.featureIconCirclePhase2}`}>
                                <i className="ri-chat-3-line"></i>
                            </div>
                            <span className={styles.statusPillSoon}>
                                <i className="ri-time-line"></i> Coming Soon · Phase 2
                            </span>
                        </div>
                        <h3 className={styles.cardTitle}>Email Funnels & Sequences</h3>
                        <p className={styles.cardDescription}>
                            Automated subscriber welcome sequences and abandoned cart recovery automation.
                        </p>
                    </div>
                </motion.div>

                {/* 10. Phase 2: 1-on-1 Booking System */}
                <motion.div 
                    className={`${styles.bentoCard} ${styles.bentoCardDisabled}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    <div>
                        <div className={styles.cardHeaderRow}>
                            <div className={`${styles.featureIconCircle} ${styles.featureIconCirclePhase2}`}>
                                <i className="ri-contacts-book-line"></i>
                            </div>
                            <span className={styles.statusPillSoon}>
                                <i className="ri-time-line"></i> Coming Soon · Phase 2
                            </span>
                        </div>
                        <h3 className={styles.cardTitle}>1-on-1 Booking System</h3>
                        <p className={styles.cardDescription}>
                            Integrated consultation scheduling, calendar sync, and paid coaching appointments.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
