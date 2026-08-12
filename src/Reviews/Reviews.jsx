import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import styles from './Reviews.module.css';

const TEXT_REVIEWS = [
    { key: 'hajira',   name: 'Hajira Khan',         handle: '@hajrakhaaainn',      initials: 'HK', gradient: 'linear-gradient(135deg, #1D4ED8, #3B82F6)' },
    { key: 'sena',     name: 'Sena Bayram',          handle: '@dubaiwithsena',      initials: 'SB', gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)' },
    { key: 'caroline', name: 'Caroline Labouchere',  handle: '@carolinelabouchere', initials: 'CL', gradient: 'linear-gradient(135deg, #10B981, #34D399)' },
    { key: 'rena',     name: 'Rena Sibaei',          handle: '@rena_sibaei',        initials: 'RS', gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)' },
    { key: 'oyeyinka', name: 'Oyeyinka Oyerinde',    handle: '@heyoyeyinka',        initials: 'OO', gradient: 'linear-gradient(135deg, #EC4899, #F472B6)' },
];

const UGC_REELS = [
    { href: 'https://www.instagram.com/reel/DazvtP6MjQk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', src: '/Images/ugc/ugc_creator2.png', name: 'Oyeyinka Oyerinde', handle: '@heyoyeyinka', alt: 'Oyeyinka Oyerinde Video Screenshot' },
    { href: 'https://www.instagram.com/reel/DbBVIRVS5jZ/', src: '/Images/ugc/ugc_creator1.png', name: 'Rena Sibaei',         handle: '@rena_sibaei',   alt: 'Rena Sibaei Video Screenshot' },
    { href: 'https://www.instagram.com/reel/DbH351LIT-7/', src: '/Images/ugc/ugc_creator3.png', name: 'Sena Bayram',         handle: '@dubaiwithsena', alt: 'Sena Bayram Video Screenshot' },
];

function TextFeedbackCard({ review, text }) {
    return (
        <div className={styles.feedbackCard}>
            <div className={styles.cardTopRow}>
                <div className={styles.cardStars}>★★★★★</div>
            </div>
            <p className={styles.feedbackText}>{text}</p>
            <div className={styles.feedbackHeader}>
                <div className={styles.avatarCircle} style={{ background: review.gradient }}>{review.initials}</div>
                <div className={styles.feedbackAuthor}>
                    <strong>{review.name} <i className={`ri-checkbox-circle-fill ${styles.verifiedIcon}`}></i></strong>
                    <span>{review.handle}</span>
                </div>
            </div>
        </div>
    );
}

function UGCReelCard({ reel }) {
    return (
        <a href={reel.href} target="_blank" rel="noopener noreferrer" className={styles.ugcReelFrameCard}>
            <div className={styles.playButtonOverlay}><i className="ri-play-fill"></i></div>
            <img src={reel.src} alt={reel.alt} className={styles.ugcScreenshotImg} />
            <div className={styles.reelOverlayFooter}>
                <div className={styles.reelCreatorInfo}>
                    <strong>{reel.name} <i className={`ri-checkbox-circle-fill ${styles.verifiedIconOnDark}`}></i></strong>
                    <span>{reel.handle}</span>
                </div>
            </div>
        </a>
    );
}

export default function Reviews() {
    const { t } = useLanguage();
    const [showMore, setShowMore] = useState(false);

    return (
        <section className={styles.reviewsSection} id="reviews">
            <div className={styles.reviewsContainer}>
                <div className={styles.reviewsHeader}>
                    <h2 className={styles.sectionTitle}>{t.reviews.title} 👀</h2>
                    <p className={styles.sectionSubtitle}>{t.reviews.subtitle}</p>
                </div>

                {/* Desktop 3-column masonry grid */}
                <div className={`${styles.mixedGrid} ${styles.desktopOnly}`}>
                    <div className={styles.gridCol}>
                        <TextFeedbackCard review={TEXT_REVIEWS[0]} text={t.reviews.items?.hajira} />
                        <TextFeedbackCard review={TEXT_REVIEWS[1]} text={t.reviews.items?.sena} />
                        <UGCReelCard reel={UGC_REELS[0]} />
                    </div>
                    <div className={styles.gridCol}>
                        <UGCReelCard reel={UGC_REELS[1]} />
                        <UGCReelCard reel={UGC_REELS[2]} />
                    </div>
                    <div className={styles.gridCol}>
                        <TextFeedbackCard review={TEXT_REVIEWS[2]} text={t.reviews.items?.caroline} />
                        <TextFeedbackCard review={TEXT_REVIEWS[3]} text={t.reviews.items?.rena} />
                        <TextFeedbackCard review={TEXT_REVIEWS[4]} text={t.reviews.items?.oyeyinka} />
                    </div>
                </div>

                {/* Mobile single column stack + Show More */}
                <div className={styles.mobileOnly}>
                    <div className={styles.mobileStack}>
                        <TextFeedbackCard review={TEXT_REVIEWS[0]} text={t.reviews.items?.hajira} />
                        <TextFeedbackCard review={TEXT_REVIEWS[1]} text={t.reviews.items?.sena} />
                    </div>

                    <AnimatePresence>
                        {showMore && (
                            <motion.div
                                className={styles.mobileStack}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                style={{ overflow: 'hidden' }}
                            >
                                <UGCReelCard reel={UGC_REELS[0]} />
                                <UGCReelCard reel={UGC_REELS[1]} />
                                <UGCReelCard reel={UGC_REELS[2]} />
                                <TextFeedbackCard review={TEXT_REVIEWS[2]} text={t.reviews.items?.caroline} />
                                <TextFeedbackCard review={TEXT_REVIEWS[3]} text={t.reviews.items?.rena} />
                                <TextFeedbackCard review={TEXT_REVIEWS[4]} text={t.reviews.items?.oyeyinka} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        className={styles.showMoreBtn}
                        onClick={() => setShowMore(v => !v)}
                    >
                        {showMore
                            ? (t.reviews.showLess || 'Show less')
                            : (t.reviews.showMore || 'Show more reviews')}
                        <i className={`ri-chevron-down-line ${styles.showMoreChevron} ${showMore ? styles.chevronUp : ''}`}></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
