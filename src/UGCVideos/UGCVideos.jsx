import { motion } from 'framer-motion';
import styles from './UGCVideos.module.css';
const ugcVideosData = [
    {
        id: 'video-3',
        creatorName: 'Rena Sibaei',
        initials: 'RS',
        avatarBg: 'linear-gradient(135deg, #3a0ca3, #4cc9f0)',
        creatorHandle: '@rena_sibaei',
        niche: 'Beauty & UGC',
        embedUrl: 'https://www.instagram.com/reel/DbBVIRVS5jZ/?utm_source=ig_embed&utm_campaign=loading',
        bgImage: '/Images/ugc/ugc_creator1.png'
    },
    {
        id: 'video-5',
        creatorName: 'Oyeyinka Oyerinde',
        initials: 'OO',
        avatarBg: 'linear-gradient(135deg, #2d6a4f, #52b788)',
        creatorHandle: '@heyoyeyinka',
        niche: 'UGC & Lifestyle',
        embedUrl: 'https://www.instagram.com/reel/DazvtP6MjQk/?utm_source=ig_embed&utm_campaign=loading',
        bgImage: '/Images/ugc/ugc_creator2.png'
    },
    {
        id: 'video-6',
        creatorName: 'Sena Bayram',
        initials: 'SB',
        avatarBg: 'linear-gradient(135deg, #4361ee, #3a0ca3)',
        creatorHandle: '@dubaiwithsena',
        niche: 'Dubai Life & Travel',
        embedUrl: 'https://www.instagram.com/reel/DbH351LIT-7/?utm_source=ig_embed&utm_campaign=loading',
        bgImage: '/Images/ugc/ugc_creator3.png'
    }
];

export default function UGCVideos() {
    return (
        <section className={styles.ugcSection}>
            <div className={styles.ugcHeader}>
                <h2 className={styles.sectionTitle}>
                    Hear it directly <span>from creators</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                    Real creators. Real businesses. Real reasons they chose Creators Blueprint.
                </p>
            </div>

            <div className={styles.ugcGrid}>
                {ugcVideosData.map((video) => (
                    <motion.div 
                        key={video.id}
                        className={styles.ugcReelCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {video.embedUrl ? (
                            <a 
                                href={video.embedUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                            >
                                <div 
                                    className={styles.reelMediaWrapperCss}
                                    style={video.bgImage ? { backgroundImage: `url(${video.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                                >
                                    {!video.bgImage && (
                                        <div className={styles.reelAvatarCircle} style={{ background: video.avatarBg }}>
                                            {video.initials}
                                        </div>
                                    )}
                                    <div className={styles.playOverlayCss}>
                                        <div className={styles.playButtonCircle}>
                                            <i className="ri-play-fill"></i>
                                        </div>
                                    </div>
                                    <div className={styles.reelGradientOverlay}></div>
                                </div>

                                <div className={styles.reelContent}>
                                    <div className={styles.creatorNameGroup}>
                                        <span className={styles.creatorName}>{video.creatorName}</span>
                                        <i className={`ri-checkbox-circle-fill ${styles.verifiedIcon}`}></i>
                                    </div>
                                    <span className={styles.creatorHandle}>{video.creatorHandle}</span>
                                    <span className={styles.reelNicheTag}>{video.niche}</span>
                                </div>
                            </a>
                        ) : (
                            <>
                                <div 
                                    className={styles.reelMediaWrapperCss}
                                    style={video.bgImage ? { backgroundImage: `url(${video.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                                >
                                    {!video.bgImage && (
                                        <div className={styles.reelAvatarCircle} style={{ background: video.avatarBg }}>
                                            {video.initials}
                                        </div>
                                    )}
                                    <div className={styles.playOverlayCss}>
                                        <div className={styles.playButtonCircle}>
                                            <i className="ri-play-fill"></i>
                                        </div>
                                    </div>
                                    <div className={styles.reelGradientOverlay}></div>
                                </div>

                                <div className={styles.reelContent}>
                                    <div className={styles.creatorNameGroup}>
                                        <span className={styles.creatorName}>{video.creatorName}</span>
                                        <i className={`ri-checkbox-circle-fill ${styles.verifiedIcon}`}></i>
                                    </div>
                                    <span className={styles.creatorHandle}>{video.creatorHandle}</span>
                                    <span className={styles.reelNicheTag}>{video.niche}</span>
                                </div>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
