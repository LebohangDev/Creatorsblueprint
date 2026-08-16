import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
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
    const { t } = useLanguage();
    const scrollRef = useRef(null);

    return (
        <section className={styles.spotlightSection} id="spotlight">
            <div className={styles.spotlightHeaderRow}>
                <div className={styles.spotlightTitleGroup}>
                    <h2 className={styles.sectionTitle}>
                        {t.spotlight.title}
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.spotlight.subtitle}
                    </p>
                </div>
            </div>

            <div 
                className={styles.carouselContainer}
                ref={scrollRef}
            >
                {creatorShowcaseData.map((creator) => (
                    <div 
                        key={creator.id}
                        className={styles.singlePhoneCarouselCard}
                    >
                        <div className={styles.cardCreatorHeader}>
                            <h3 className={styles.cardCreatorName}>
                                {creator.name} <i className={`ri-checkbox-circle-fill ${styles.verifiedIcon}`}></i>
                            </h3>
                            <span className={styles.cardCreatorSub}>
                                {creator.handle} · {creator.followers}
                            </span>
                        </div>

                        <div className={styles.singleIphoneFrame}>
                            <img 
                                src={creator.posterImage} 
                                alt={`${creator.name} Creator Store Showcase`} 
                                className={styles.iphoneScreenImg}
                                style={['caroline', 'sena', 'oyeyinka', 'hajira', 'rena'].includes(creator.id) ? { objectFit: 'cover', objectPosition: 'top center' } : {}}
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

