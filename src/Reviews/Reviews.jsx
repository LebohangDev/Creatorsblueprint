import { motion } from 'framer-motion';
import styles from './Reviews.module.css';
import InstagramEmbed from './InstagramEmbed';

export default function Reviews() {
    return (
        <section className={styles.reviewsSection} id="spotlight">
            <div className={styles.reviewsHeader}>
                <h2 className={styles.sectionTitle}>
                    See what creators are <span>saying</span> 👀
                </h2>
                <p className={styles.sectionSubtitle}>
                    Creators Blueprint is the easiest way to launch your storefront and sell online.
                </p>
            </div>

            <div className={styles.mixedGrid}>
                
                {/* Column 1: Text Card (Top) -> UGC Video (Bottom) */}
                <div className={styles.gridCol}>
                    {/* Text Card 1: Hajira Khan */}
                    <motion.div 
                        className={styles.feedbackCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={styles.feedbackHeader}>
                            <div className={styles.avatarCircle} style={{ background: 'linear-gradient(135deg, #7209b7, #f72585)' }}>
                                HK
                            </div>
                            <div className={styles.feedbackAuthor}>
                                <strong>Hajira Khan <i className={`ri-checkbox-circle-fill ${styles.verifiedIcon}`}></i></strong>
                                <span>@hajrakhaaainn · 6h</span>
                            </div>
                        </div>
                        <p className={styles.feedbackText}>
                            800+ playlist sales later, I couldn't love <strong>@creatorsblueprint</strong> more! ✨
                        </p>
                    </motion.div>

                    {/* UGC Video 1: Oyeyinka Oyerinde */}
                    <motion.div 
                        className={styles.ugcReelFrameCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <img 
                            src="/Images/ugc/ugc_creator2.png" 
                            alt="Oyeyinka Oyerinde Video Screenshot" 
                            className={styles.ugcScreenshotImg} 
                        />
                        <div className={styles.reelOverlayFooter}>
                            <div className={styles.reelCreatorInfo}>
                                <strong>Oyeyinka Oyerinde</strong>
                                <span>@heyoyeyinka</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Column 2: UGC Video (Top) -> Text Card (Bottom) */}
                <div className={styles.gridCol}>
                    {/* UGC Video 2: Rena Sibaei */}
                    <motion.div 
                        className={styles.ugcReelFrameCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                    >
                        <img 
                            src="/Images/ugc/ugc_creator1.png" 
                            alt="Rena Sibaei Video Screenshot" 
                            className={styles.ugcScreenshotImg} 
                        />
                        <div className={styles.reelOverlayFooter}>
                            <div className={styles.reelCreatorInfo}>
                                <strong>Rena Sibaei</strong>
                                <span>@rena_sibaei</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Card 2: Sena Bayram */}
                    <motion.div 
                        className={styles.feedbackCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <div className={styles.feedbackHeader}>
                            <div className={styles.avatarCircle} style={{ background: 'linear-gradient(135deg, #4361ee, #3a0ca3)' }}>
                                SB
                            </div>
                            <div className={styles.feedbackAuthor}>
                                <strong>Sena Bayram <i className={`ri-checkbox-circle-fill ${styles.verifiedIcon}`}></i></strong>
                                <span>@dubaiwithsena · 2h</span>
                            </div>
                        </div>
                        <p className={styles.feedbackText}>
                            The GCC focus makes all the difference. Instant payment processing and storefront templates built for Arab creators.
                        </p>
                    </motion.div>
                </div>

                {/* Column 3: Text Card (Top) */}
                <div className={styles.gridCol}>
                    {/* Text Card 3: Caroline Labouchere */}
                    <motion.div 
                        className={styles.feedbackCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <div className={styles.feedbackHeader}>
                            <div className={styles.avatarCircle} style={{ background: 'linear-gradient(135deg, #0077b6, #00b4d8)' }}>
                                CL
                            </div>
                            <div className={styles.feedbackAuthor}>
                                <strong>Caroline Labouchere <i className={`ri-checkbox-circle-fill ${styles.verifiedIcon}`}></i></strong>
                                <span>@carolinelabouchere · 4h</span>
                            </div>
                        </div>
                        <p className={styles.feedbackText}>
                            Hosting and selling my 2 ebooks about my surgeries and modeling has been a game changer! <strong>Creators Blueprint</strong> makes it so easy. If I can do it, anyone can! ✨
                        </p>
                    </motion.div>

                    {/* Text Card 4: Rena Sibaei */}
                    <motion.div 
                        className={styles.feedbackCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <div className={styles.feedbackHeader}>
                            <div className={styles.avatarCircle} style={{ background: 'linear-gradient(135deg, #f77f00, #d62828)' }}>
                                RS
                            </div>
                            <div className={styles.feedbackAuthor}>
                                <strong>Rena Sibaei <i className={`ri-checkbox-circle-fill ${styles.verifiedIcon}`}></i></strong>
                                <span>@rena_sibaei · 1h</span>
                            </div>
                        </div>
                        <p className={styles.feedbackText}>
                            I went from having no online presence to having my own storefront live in literally one afternoon. <strong>Creators Blueprint</strong> made it so simple, I didn't need to figure out anything technical. ✨
                        </p>
                    </motion.div>

                    {/* Text Card 5: Oyeyinka Oyerinde */}
                    <motion.div 
                        className={styles.feedbackCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <div className={styles.feedbackHeader}>
                            <div className={styles.avatarCircle} style={{ background: 'linear-gradient(135deg, #2d6a4f, #52b788)' }}>
                                OO
                            </div>
                            <div className={styles.feedbackAuthor}>
                                <strong>Oyeyinka Oyerinde <i className={`ri-checkbox-circle-fill ${styles.verifiedIcon}`}></i></strong>
                                <span>@heyoyeyinka · 3h</span>
                            </div>
                        </div>
                        <p className={styles.feedbackText}>
                            As a UGC creator in Dubai, I needed something that actually works here. <strong>Creators Blueprint</strong> lets me manage my links, sell my services, and get paid all from one place. This is the one! 🙌
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
