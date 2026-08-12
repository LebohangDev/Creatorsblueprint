import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './CreatorSpotlight.module.css';

const creatorShowcaseData = [
    {
        id: 'hajira',
        name: 'Hajira Khan',
        handle: '@hajrakhaaainn',
        followers: '247K Followers',
        posterImage: '/Images/creators/hajira_storefront.png'
    },
    {
        id: 'caroline',
        name: 'Caroline Labouchere',
        handle: '@carolinelabouchere',
        followers: '683K Followers',
        posterImage: '/Images/creators/caroline_storefront.png'
    },
    {
        id: 'rena',
        name: 'Rena Sibaei',
        handle: '@rena_sibaei',
        followers: '4.9K Followers',
        posterImage: '/Images/creators/rena_storefront.png'
    },
    {
        id: 'oyeyinka',
        name: 'Oyeyinka Oyerinde',
        handle: '@heyoyeyinka',
        followers: '359 Followers',
        posterImage: '/Images/creators/oyeyinka_storefront.png'
    },
    {
        id: 'sena',
        name: 'Sena Bayram',
        handle: '@dubaiwithsena',
        followers: '1,135 Followers',
        posterImage: '/Images/creators/sena_storefront.png'
    }
];

export default function CreatorSpotlight() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', checkScroll);
            checkScroll();
        }
        return () => el?.removeEventListener('scroll', checkScroll);
    }, []);

    const scrollByAmount = (distance) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.spotlightSection} id="spotlight">
            <div className={styles.spotlightHeaderRow}>
                <div className={styles.spotlightTitleGroup}>
                    <h2 className={styles.sectionTitle}>
                        See how creators are building with <span>Creators Blueprint</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        From their social profile to their own creator store, Creators Blueprint gives creators one place to turn attention into ownership.
                    </p>
                </div>

                <div className={styles.carouselArrowControls}>
                    <button 
                        className={`${styles.carouselArrowBtn} ${!canScrollLeft ? styles.arrowDisabled : ''}`}
                        onClick={() => scrollByAmount(-370)}
                        aria-label="Previous Creator"
                    >
                        <i className="ri-arrow-left-line"></i>
                    </button>
                    <button 
                        className={`${styles.carouselArrowBtn} ${!canScrollRight ? styles.arrowDisabled : ''}`}
                        onClick={() => scrollByAmount(370)}
                        aria-label="Next Creator"
                    >
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>

            <div 
                className={styles.carouselContainer}
                ref={scrollRef}
            >
                {creatorShowcaseData.map((creator, idx) => (
                    <motion.div 
                        key={creator.id}
                        className={styles.singlePhoneCarouselCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                        {/* Name, Handle, and Followers directly above the single iPhone screen */}
                        <div className={styles.cardCreatorHeader}>
                            <h3 className={styles.cardCreatorName}>
                                {creator.name} <i className={`ri-checkbox-circle-fill ${styles.verifiedIcon}`}></i>
                            </h3>
                            <span className={styles.cardCreatorSub}>
                                {creator.handle} · {creator.followers}
                            </span>
                        </div>

                        {/* Single iPhone Mockup Frame displaying creator store screen */}
                        <div className={styles.singleIphoneFrame}>
                            <img 
                                src={creator.posterImage} 
                                alt={`${creator.name} Creator Store Showcase`} 
                                className={styles.iphoneScreenImg}
                                style={['caroline', 'sena', 'oyeyinka', 'hajira', 'rena'].includes(creator.id) ? { objectFit: 'cover', objectPosition: 'top center' } : {}}
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
