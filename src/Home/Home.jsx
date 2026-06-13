import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import styles from './Home.module.css';
import ResponsiveGrid from './ResponsiveGrid.jsx';
import LiveStoreMockup from './LiveStoreMockup.jsx';

const CTA_URL = "https://app.creatorsblueprint.io";

const heroBadges = [
    { icon: 'ri-magic-line', label: 'AI Ebook Magic' },
    { icon: 'ri-store-3-line', label: 'Custom Storefronts' },
    { icon: 'ri-checkbox-circle-line', label: 'Instant Checkout' },
    { icon: 'ri-mail-send-line', label: 'Autopilot Email Funnels' },
    { icon: 'ri-bar-chart-2-line', label: 'Pro Analytics' },
    { icon: 'ri-fingerprint-line', label: 'Own Your Brand' }
];

function Home({ setNavActive }) {
    const [faqOpen, setFaqOpen] = useState(null);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [lightboxContent, setLightboxContent] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [handle, setHandle] = useState('');
    const [checkerStatus, setCheckerStatus] = useState(''); // '', 'checking', 'available', 'taken', 'invalid'

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/proof') {
            const timer = setTimeout(() => {
                const element = document.getElementById('proof');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [location.pathname]);

    // Custom trailing cursor values
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { stiffness: 450, damping: 30 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovered, setIsHovered] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!handle) {
            setCheckerStatus('');
            return;
        }

        const handleRegex = /^[a-zA-Z0-9_]{3,20}$/;
        if (!handleRegex.test(handle)) {
            setCheckerStatus('invalid');
            return;
        }

        setCheckerStatus('checking');

        const delayDebounce = setTimeout(() => {
            const reservedHandles = [
                'admin', 'lebohang', 'abubakar', 'malak', 'soniya', 'varun', 'cb',
                'cbstudio', 'creatorsblueprint', 'support', 'test', 'username', 'billing',
                'dashboard', 'settings', 'login', 'signup', 'logout', 'api', 'stripe'
            ];

            if (reservedHandles.includes(handle.toLowerCase())) {
                setCheckerStatus('taken');
            } else {
                setCheckerStatus('available');
            }
        }, 600);

        return () => clearTimeout(delayDebounce);
    }, [handle]);

    useEffect(() => {
        if (isMobile) return;

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);

        const handleMouseEnter = () => setCursorVisible(true);
        const handleMouseLeave = () => setCursorVisible(false);

        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        const attachListeners = () => {
            document.querySelectorAll('a, button, [role="button"], input, select, textarea').forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        };

        attachListeners();
        const observer = new MutationObserver(attachListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            observer.disconnect();
        };
    }, [cursorX, cursorY, isMobile]);
    // Fade-in animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // FAQ Data
    const faqs = [
        { q: "What is CB Studio?", a: "CB Studio is a comprehensive SaaS platform designed to help creators, brands, and digital entrepreneurs package their knowledge into digital products, build beautiful sales pages, and automate delivery." },
        { q: "Who is CB Studio for?", a: "It's for anyone with an audience or expertise who wants to build owned digital assets, systems, and automated monetization flows instead of relying solely on unpredictable views and brand deals." },
        { q: "Do I need technical skills?", a: "Not at all. CB Studio is built to handle the technical infrastructure for you. You bring the knowledge; we provide the platform to package and sell it." },
        { q: "What can I build with CB Studio?", a: "You can create digital products like ebooks, templates, and guides, alongside high-converting sales landing pages and automated delivery funnels." },
        { q: "Is this for creators only?", a: "While built with creators in mind, it's perfect for consultants, coaches, agencies, and any digital brand wanting to scale their revenue through digital products." },
        { q: "When can I join?", a: "CB Studio is currently rolling out. Click any 'Join Now' or 'Get Started' button to secure your spot and start building." },
    ];

    // Testimonial Data
    const testimonials = [
        {
            quote: "CB Studio helped me completely structure my knowledge into a premium offer. I finally have an automated backend.",
            author: "Money Mode",
            role: "Finance Creator",
            img: "/Images/testimonials/640258826_17874076500535987_1094533529845700348_n.jpg"
        },
        {
            quote: "The system made my brand feel incredibly professional. It turned my content into something truly scalable.",
            author: "Caroline Labouchere",
            role: "Lifestyle Influencer",
            img: "/Images/testimonials/640407766_17874075669535987_6944034250565214510_n (1).jpg"
        },
        {
            quote: "I was relying entirely on brand deals before. Now I have a 24/7 automated sales engine selling my own products.",
            author: "Busy Avocado Kitchen",
            role: "Food & Recipe Creator",
            img: "/Images/testimonials/640408335_17874075948535987_5269460741186102746_n (1).jpg"
        },
        {
            quote: "This infrastructure is a game changer. The sales pages look stunning and the checkout automation is seamless.",
            author: "Amy Fox",
            role: "Fitness Coach",
            img: "/Images/testimonials/640944934_17874076308535987_1550338404705835315_n (1).jpg"
        }
    ];

    // Handle scroll for nav hiding (similar to original)
    useEffect(() => {
        const container = document.getElementById('root');
        let lastScrollTop = 0;
        const handleScroll = (event) => {
            if (window.innerWidth >= 1024) {
                if (event.target.scrollTop < lastScrollTop) {
                    setNavActive(true);
                } else if (event.target.scrollTop > lastScrollTop) {
                    setNavActive(false);
                }
            }
            lastScrollTop = event.target.scrollTop;
        };
        if (container) container.addEventListener('scroll', handleScroll);
        return () => {
            if (container) container.removeEventListener('scroll', handleScroll);
        }
    }, [setNavActive]);

    useEffect(() => {
        if (window.fbq) {
            window.fbq('track', 'PageView');
            window.fbq('track', 'ViewContent', {
                content_name: 'Landing Page',
                content_category: 'Waitlist'
            });
        }
    }, []);

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') setLightboxContent(null); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);


    return (
        <div className={styles.homeContainer}>

            {/* 1. HERO SECTION */}
            <section id="hero" className={`${styles.section} ${styles.hero}`}>
                <div className={styles.heroGrid}>
                    {/* Left Column: Content and Features */}
                    <div className={styles.heroLeft}>
                        <motion.h1
                            className={styles.heroHeadline}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Package your knowledge. <br />
                            Turn attention into <br />
                            <span>ownership.</span>
                        </motion.h1>

                        <motion.p
                            className={styles.heroSubText}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Claim your handle, connect your social, and launch premium digital products in 90 seconds. Zero coding required.
                        </motion.p>

                        <motion.div
                            className={styles.badgeContainer}
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            {heroBadges.map((badge, idx) => (
                                <motion.div
                                    key={idx}
                                    className={styles.heroBadgePill}
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className={`${badge.icon} ${styles.badgeIcon}`}></i>
                                    <span>{badge.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className={`${styles.buttonGroup} ${styles.heroButtonGroup}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <a href={CTA_URL} className={styles.primaryButton}>
                                Claim My Handle <i className="ri-arrow-right-line"></i>
                            </a>
                            <a
                                href="#features"
                                className={styles.secondaryButton}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Explore Features
                            </a>
                        </motion.div>
                    </div >

                    {/* Right Column: Hajira Khan Live Store Mockup */}
                    <div className={styles.heroRight}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                        >
                            <LiveStoreMockup />
                        </motion.div>
                    </div>
                </div >
            </section >

            {/* 2. TRUST / VALUE STRIP */}
            < section id="trust" className={styles.valueStrip} >
                {
                    [
                        { icon: 'ri-rocket-2-line', text: 'Launch sales pages fast' },
                        { icon: 'ri-settings-4-line', text: 'Automate your backend' },
                        { icon: 'ri-money-dollar-circle-line', text: 'Convert attention into revenue' },
                        { icon: 'ri-loop-right-line', text: 'Build once, sell 24/7' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className={styles.valueItem}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <i className={item.icon}></i>
                            <span>{item.text}</span>
                        </motion.div>
                    ))
                }
            </section >

            {/* 2.5 CONSOLIDATION SECTION (REPLACE THE MESSY STACK) */}
            < section id="consolidation" className={`${styles.section} ${styles.consolidationSection}`
            }>
                <motion.div
                    className={styles.consolidationHeader}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                    <h2 className={styles.title}>Consolidate. <span>Simplify. Scale.</span></h2>
                    <p className={styles.subtitle}>
                        Stop bleeding money on 5+ expensive monthly subscriptions. We built the ultimate tech stack so you don't have to.
                    </p>
                </motion.div>

                <div className={styles.consolidationWrapper}>
                    <div className={styles.dockComparisonWrapper}>
                        {/* The Fragmented Dock Container */}
                        <div className={styles.competitorDockCard}>
                            <span className={styles.cardCaption}>The Messy, Expensive Way</span>
                            <div className={styles.macOSDock}>
                                <div className={styles.dockGlowRed}></div>
                                <div className={`${styles.dockIconItem} ${styles.jiggleAlways}`}>
                                    <div className={`${styles.appIconSquircle} ${styles.appGumroad}`}>
                                        <span className={styles.badgeStrike}></span>
                                        <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.2 13c-.9 0-1.7-.5-2.1-1.3l1.8-1c.2.4.5.6.8.6.4 0 .7-.3.7-.7V8h-2V6.5h3.5V13c0 1.1-.9 2-2 2z" /></svg>
                                        <div className={styles.glossOverlay}></div>
                                    </div>
                                    <span className={styles.dockIconLabel}>Gumroad</span>
                                </div>
                                <div className={`${styles.dockIconItem} ${styles.jiggleAlways}`}>
                                    <div className={`${styles.appIconSquircle} ${styles.appCanva}`}>
                                        <span className={styles.badgeStrike}></span>
                                        <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c1.7 0 3.1.9 3.8 2.3l-1.4.8c-.4-.9-1.3-1.4-2.4-1.4-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9c1.1 0 2-.5 2.4-1.4l1.4.8c-.7 1.4-2.1 2.3-3.8 2.3z" /></svg>
                                        <div className={styles.glossOverlay}></div>
                                    </div>
                                    <span className={styles.dockIconLabel}>Canva</span>
                                </div>
                                <div className={`${styles.dockIconItem} ${styles.jiggleAlways}`}>
                                    <div className={`${styles.appIconSquircle} ${styles.appNotion}`}>
                                        <span className={styles.badgeStrike}></span>
                                        <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 3h15a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3zM6.5 6v12H9v-5l4.5 5H17.5V6H15v5L10.5 6H6.5z" /></svg>
                                        <div className={styles.glossOverlay}></div>
                                    </div>
                                    <span className={styles.dockIconLabel}>Notion</span>
                                </div>
                                <div className={`${styles.dockIconItem} ${styles.jiggleAlways}`}>
                                    <div className={`${styles.appIconSquircle} ${styles.appLinktree}`}>
                                        <span className={styles.badgeStrike}></span>
                                        <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v16M8 6l4-4 4 4M5 12l7-7 7 7M9 22h6" /></svg>
                                        <div className={styles.glossOverlay}></div>
                                    </div>
                                    <span className={styles.dockIconLabel}>Linktree</span>
                                </div>
                                <div className={`${styles.dockIconItem} ${styles.jiggleAlways}`}>
                                    <div className={`${styles.appIconSquircle} ${styles.appMetricool}`}>
                                        <span className={styles.badgeStrike}></span>
                                        <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" /></svg>
                                        <div className={styles.glossOverlay}></div>
                                    </div>
                                    <span className={styles.dockIconLabel}>Metricool</span>
                                </div>
                            </div>
                        </div>

                        {/* Transition Arrow Indicator */}
                        <div className={styles.dockComparisonArrow}>
                            <i className={isMobile ? "ri-arrow-down-line" : "ri-arrow-right-line"}></i>
                            <div className={styles.arrowPulse}></div>
                        </div>

                        {/* The Unified App Container */}
                        <div className={styles.unifiedAppCard}>
                            <span className={styles.cardCaption}>The Ownership Way ✨</span>
                            <div className={`${styles.appIconSquircle} ${styles.appCBStudio}`}>
                                <img src="/Images/CB_Logos/CB_fingerprint.png" alt="CB Studio" className={styles.cbStudioAppLogo} />
                                <div className={styles.glossOverlay}></div>
                                <div className={styles.neonHaloBlue}></div>
                            </div>
                            <span className={styles.unifiedAppLabel}>CB Studio</span>
                        </div>
                    </div>

                    <div className={styles.consolidationTextInfo}>
                        <h3>Consolidate everything. Save over $400/month.</h3>
                        <p>
                            Instead of jumping between tabs to manage checkouts, write drafts, design covers, and set up delivery automations, CB Studio gives you one premium workspace to rule them all. Keep 100% of your earnings with <strong>zero hidden transaction fees</strong>.
                        </p>
                    </div>

                    <motion.div
                        className={styles.stanComparisonCard}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className={styles.stanList}>
                            {[
                                { emoji: '🎓', title: 'AI Ebook & Course Magic', replaces: 'Replaces Kajabi', price: '$119' },
                                { emoji: '📱', title: 'Storefront & Frictionless Checkout', replaces: 'Replaces Squarespace, Shopify', price: '$29' },
                                { emoji: '📊', title: 'Instagram & Social Analytics', replaces: 'Replaces Metricool, Flick', price: '$15' },
                                { emoji: '📝', title: 'AI Creator Workspace', replaces: 'Replaces Notion', price: '$10' },
                                { emoji: '🎨', title: 'AI Visual & Cover Designer', replaces: 'Replaces Canva', price: '$15' },
                                { emoji: '🔗', title: 'Custom Link-in-Bio Hub', replaces: 'Replaces Linktree', price: '$9' }
                            ].map((item, idx) => (
                                <div key={idx} className={styles.stanItem}>
                                    <div className={styles.stanItemLeft}>
                                        <div className={styles.stanItemEmoji}>{item.emoji}</div>
                                        <div className={styles.stanItemMeta}>
                                            <span className={styles.stanItemTitle}>{item.title}</span>
                                            {item.replaces && (
                                                <span className={styles.stanItemReplaces}>
                                                    Replaces <span className={styles.replacesBrands}>{item.replaces.replace('Replaces ', '')}</span>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className={styles.stanItemRight}>
                                        <span className={styles.stanItemPrice}>{item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.stanSeparator}></div>
                        <div className={styles.stanFooterRow}>
                            <div className={styles.stanItemLeft}>
                                <div className={styles.stanFooterIconRed}>
                                    <i className="ri-close-line"></i>
                                </div>
                                <span className={styles.stanFooterOldText}>What You'd Spend Otherwise</span>
                            </div>
                            <div className={styles.stanFooterRight}>
                                <span className={styles.stanOldPriceStrike}>$197/mo</span>
                            </div>
                        </div>
                        <div className={styles.stanFooterRow}>
                            <div className={styles.stanItemLeft}>
                                <div className={styles.stanFooterIconBlue}>
                                    <img src="/Images/CB_Logos/CB_fingerprint.png" alt="CB Logo" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                </div>
                                <span className={styles.stanFooterNewText}>Join Creatorsblueprint ✨</span>
                            </div>
                            <div className={styles.stanFooterRight}>
                                <span className={styles.stanNewPrice}>$22/mo</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* 3. MISSION */}
            < section id="mission" className={styles.section} >
                <motion.div
                    className={styles.glassCard}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className={styles.grid2}>
                        <div>
                            <div className={styles.badge}>Our Mission</div>
                            <h2 className={`${styles.title} ${styles.missionTitle}`}>
                                We help creators turn attention into <span>ownership.</span>
                            </h2>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '1.1rem' }}>
                                Views don't pay the bills, ownership does. The algorithms in the GCC are changing daily. If you're only relying on brand deals and social reach, you are at the mercy of algorithms. We give you the infrastructure to fully own your platform and monetize your knowledge 24/7.
                            </p>
                        </div>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>20+</div>
                                <div className={styles.statLabel}>Clients Helped</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>$50k+</div>
                                <div className={styles.statLabel}>Generated</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>10+</div>
                                <div className={styles.statLabel}>Products Launched</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section >


            {/* 5. HOW IT WORKS */}
            < section id="how-it-works" className={styles.section} >
                <div className={styles.grid2}>
                    <motion.div
                        className={styles.stepsLeft}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className={`${styles.title} ${styles.stepsTitle}`}>Turn attention into <span>cashflow</span> in 4 steps</h2>
                        <p className={styles.stepsDesc}>
                            No complex tech, no bloated monthly subscriptions. Simple setup, auto-delivery, and instant payouts.
                        </p>
                        <a href={CTA_URL} className={styles.primaryButton}>Claim My Handle</a>
                    </motion.div>

                    <motion.div
                        className={styles.stepList}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { step: '1', title: 'Pick your play', desc: 'Identify what your audience is searching for based on your actual expertise.' },
                            { step: '2', title: 'Spin up the product', desc: 'Let our AI package your expertise into high-value ebooks or resources in 90 seconds.' },
                            { step: '3', title: 'Launch the page', desc: 'Deploy a gorgeous, high-converting digital storefront with frictionless checkouts.' },
                            { step: '4', title: 'Automate sales', desc: 'Drive traffic from your socials and let our systems auto-fulfill orders 24/7.' }
                        ].map((item, i) => (
                            <motion.div key={i} className={styles.stepItem} variants={fadeInUp}>
                                <div className={styles.stepNumber}>{item.step}</div>
                                <div className={styles.stepContent}>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section >

            {/* 5.5 PLATFORM SHOWCASE */}
            < section id="features" className={styles.section} >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInUp}
                    style={{ width: '100%' }}
                >
                    <div className={styles.badge} style={{ margin: '0 auto 16px auto', display: 'block', width: 'fit-content' }}>Under the Hood</div>
                    <h2 className={styles.title}>Inside the <span>Studio</span></h2>
                    <p className={styles.subtitle}>Everything you need to package, launch, and scale your creator business without hiring an agency.</p>

                    {/* ── Feature block: Storefront Preview ── */}
                    <div className={styles.featureBlock}>
                        <div className={styles.featureBlockText}>
                            <div className={styles.featureBlockTag}>
                                <i className="ri-store-3-line"></i> Storefront Preview
                            </div>
                            <h3 className={styles.featureBlockTitle}>Your brand,<br /><span>one link.</span></h3>
                            <p className={styles.featureBlockDesc}>
                                A stunning digital storefront where your entire creator identity lives. Package your knowledge and share it with one easily shareable link.
                            </p>
                        </div>
                        <div className={styles.videoMockupWrapper}>
                            {/* Floating Badge: Email Delivery */}
                            <div className={`${styles.floatingCircleBadge} ${styles.badgeEmail}`}>
                                <div className={styles.circleBadgeIcon}>
                                    <i className="ri-mail-send-line"></i>
                                </div>
                                <span>EMAIL DELIVERY</span>
                            </div>

                            {/* Floating Badge: Ebooks */}
                            <div className={`${styles.floatingCircleBadge} ${styles.badgeEbooks}`}>
                                <div className={styles.circleBadgeIcon}>
                                    <i className="ri-book-open-line"></i>
                                </div>
                                <span>EBOOKS</span>
                            </div>

                            {/* Floating Badge: Auto Payments */}
                            <div className={`${styles.floatingCircleBadge} ${styles.badgePayments}`}>
                                <div className={styles.circleBadgeIcon}>
                                    <i className="ri-bank-card-line"></i>
                                </div>
                                <span>AUTO PAYMENTS</span>
                            </div>

                            {/* Floating Badge: Links */}
                            <div className={`${styles.floatingCircleBadge} ${styles.badgeLinks}`}>
                                <div className={styles.circleBadgeIcon}>
                                    <i className="ri-link"></i>
                                </div>
                                <span>LINKS</span>
                            </div>

                            {/* Floating Badge: Affiliate Links */}
                            <div className={`${styles.floatingCircleBadge} ${styles.badgeAffiliate}`}>
                                <div className={styles.circleBadgeIcon}>
                                    <i className="ri-percent-line"></i>
                                </div>
                                <span>AFFILIATE LINKS</span>
                            </div>

                            {/* Main Video Browser Mockup */}
                            <div
                                className={styles.windowMockup}
                                onClick={() => setLightboxContent({ src: '/Video/storefront-preview.mp4', type: 'video', name: 'Storefront Preview', caption: 'The Platform' })}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.windowBody}>
                                    <div className={styles.featureVideoWrap}>
                                        <div className={styles.featureVideoGlow} />
                                        <video
                                            className={styles.featureVideo}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            disablePictureInPicture
                                            style={{ pointerEvents: 'none' }}
                                        >
                                            <source src="/Video/storefront-preview.mp4" type="video/mp4" />
                                        </video>
                                        <div className={styles.videoOverlayHint}>
                                            <i className="ri-fullscreen-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Product card previews ── */}
                    <div className={styles.showcaseCardsRow}>
                        <div className={styles.showcaseCardItem}>
                            <div className={styles.showcaseCardTag}>
                                <i className="ri-book-2-line"></i> Ebook Ideas
                            </div>
                            <div
                                className={styles.windowMockup}
                                onClick={() => setLightboxContent({ src: '/Video/ebook-flow.mp4', type: 'video', name: 'Ebook Ideas', caption: 'AI Builder' })}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.windowBody}>
                                    <div className={styles.showcaseCardVideoWrap}>
                                        <video
                                            className={`${styles.showcaseCardVideo} ${styles.ebookVideo}`}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            disablePictureInPicture
                                            style={{ pointerEvents: 'none' }}
                                        >
                                            <source src="/Video/ebook-flow.mp4" type="video/mp4" />
                                        </video>
                                        <div className={styles.videoOverlayHint}>
                                            <i className="ri-fullscreen-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.showcaseCardDesc}>AI-assisted product creation that structures your knowledge into a high-value digital asset.</p>
                        </div>
                        <div className={styles.showcaseCardItem}>
                            <div className={styles.showcaseCardTag}>
                                <i className="ri-edit-box-line"></i> Editor Preview
                            </div>
                            <div
                                className={styles.windowMockup}
                                onClick={() => setLightboxContent({ src: '/Video/editor-preview.mp4', type: 'video', name: 'Editor Preview', caption: 'Product Customization' })}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.windowBody}>
                                    <div className={styles.showcaseCardVideoWrap}>
                                        <video
                                            className={styles.showcaseCardVideo}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            disablePictureInPicture
                                            style={{ pointerEvents: 'none' }}
                                        >
                                            <source src="/Video/editor-preview.mp4" type="video/mp4" />
                                        </video>
                                        <div className={styles.videoOverlayHint}>
                                            <i className="ri-fullscreen-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.showcaseCardDesc}>The ultimate platform for creators to refine, package, and monetize their knowledge.</p>
                        </div>
                    </div>
                </motion.div>
            </section >

            {/* 6. PHASE 1 PROOF */}
            < section id="proof" className={styles.section} >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className={styles.badge} style={{ margin: '0 auto 24px auto', display: 'block', width: 'fit-content' }}>Validated & Proven</div>
                    <h2 className={styles.title}>Phase 1: Proven in the <span>Real World</span></h2>
                    <p className={styles.subtitle}>Before we built the product, we built the results. We manually helped creators turn expertise into products and monetized systems.</p>
                </motion.div>

                <ResponsiveGrid
                    gridClassName={styles.proofGrid}
                    staggerContainer={staggerContainer}
                    fadeInUp={fadeInUp}
                    items={[
                        { name: 'Money Mode', img: '/Images/testimonials/640258826_17874076500535987_1094533529845700348_n.jpg' },
                        { name: 'Caroline Labouchere', img: '/Images/testimonials/640407766_17874075669535987_6944034250565214510_n (1).jpg' },
                        { name: 'Busy Avocado Kitchen', img: '/Images/testimonials/640408335_17874075948535987_5269460741186102746_n (1).jpg' },
                        { name: 'Amy Fox', img: '/Images/testimonials/640944934_17874076308535987_1550338404705835315_n (1).jpg' }
                    ]}
                    renderItem={(client) => (
                        <div
                            className={styles.proofCard}
                            onClick={() => setLightboxContent({ src: client.img, type: 'image', name: client.name, caption: 'Phase 1 Client' })}
                            role="button"
                            aria-label={`View ${client.name} preview`}
                        >
                            <img src={client.img} alt={client.name} />
                            <div className={styles.proofOverlay}>
                                <h4>{client.name}</h4>
                                <p>Phase 1 Client</p>
                            </div>
                            <div className={styles.proofExpandHint}>
                                <i className="ri-expand-diagonal-line"></i>
                            </div>
                        </div>
                    )}
                />
            </section >

            {/* 7. TESTIMONIALS */}
            < section className={styles.section} >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                    <h2 className={styles.title}>The <span>Wall of Love</span></h2>
                    <p className={styles.subtitle}>What creators are saying about the CB Studio infrastructure.</p>
                </motion.div>

                <ResponsiveGrid
                    gridClassName={styles.testimonialGrid}
                    staggerContainer={staggerContainer}
                    fadeInUp={fadeInUp}
                    items={testimonials}
                    renderItem={(test) => (
                        <div className={styles.testimonialCardGrid}>
                            <div className={styles.quoteIcon}>"</div>
                            <div className={styles.testimonialQuoteText}>
                                "{test.quote}"
                            </div>
                            <div className={styles.testimonialAuthorFlex}>
                                <img src={test.img} alt={test.author} className={styles.testimonialAvatarImg} />
                                <div className={styles.testimonialAuthorInfo}>
                                    <span className={styles.testimonialAuthorName}>{test.author}</span>
                                    <span className={styles.testimonialAuthorRole}>{test.role}</span>
                                </div>
                            </div>
                        </div>
                    )}
                />
            </section >

            {/* 8. PHASE 2 INTRO */}
            < section className={styles.section} >
                <motion.div
                    style={{ textAlign: 'center', maxWidth: '800px' }}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Now We're Entering <span>Phase 2</span></h2>
                    <p className={styles.phase2Text}>
                        We took everything we learned in Phase 1 and turned it into a product. CB Studio is the scalable evolution, giving you the exact infrastructure we used for our top clients.
                    </p>
                    <a href={CTA_URL} className={`${styles.primaryButton} ${styles.primaryButtonLarge}`}>
                        Get Early Access
                    </a>
                </motion.div>
            </section >

            {/* 8.5 SUBSCRIPTION PLANS & PRICING */}
            < section id="pricing" className={styles.section} >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className={styles.pricingHeader}
                >
                    <div className={styles.badge}>FOUNDING MEMBER — LIMITED ACCESS</div>
                    <h2 className={styles.title}>Everything you need to <br />own your <span>platform</span></h2>
                    <p className={styles.subtitle}>One plan. All features. Cancel anytime. Join as a Founding Member before we expand our tier pricing.</p>
                </motion.div>

                <motion.div
                    className={`${styles.glassCard} ${styles.pricingCard}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.pricingCardHeader}>
                        <span className={styles.pricingTag}>Founding Member Special</span>
                        <div className={styles.priceRow}>
                            <span className={styles.slashedPrice}>$27 USD</span>
                            <span className={styles.aedPrice}>$22 USD</span>
                            <span className={styles.pricePeriod}>/mo</span>
                        </div>
                        <h4>FOUNDING MEMBER LIFETIME ACCESS</h4>
                    </div>

                    <div className={styles.pricingSeparator}></div>

                    <div className={styles.pricingIncludes}>
                        <h5>WHAT'S INCLUDED:</h5>
                        <ul className={styles.includesList}>
                            <li>
                                <i className="ri-checkbox-circle-fill"></i>
                                <span><strong>Custom Storefront</strong> for your digital products</span>
                            </li>
                            <li>
                                <i className="ri-checkbox-circle-fill"></i>
                                <span><strong>Pro Social Media</strong> (Instagram) Analytics</span>
                            </li>
                            <li>
                                <i className="ri-checkbox-circle-fill"></i>
                                <span><strong>Unlimited Ebook</strong> & Course Creations</span>
                            </li>
                            <li>
                                <i className="ri-checkbox-circle-fill"></i>
                                <span><strong>Automated Email</strong> & SMTP Delivery</span>
                            </li>
                            <li>
                                <i className="ri-checkbox-circle-fill"></i>
                                <span><strong>Stripe Checkout</strong> & Stripe Connect Payouts</span>
                            </li>
                            <li>
                                <i className="ri-checkbox-circle-fill"></i>
                                <span><strong>24/7 Order Fulfillments</strong> & Automations</span>
                            </li>
                            <li>
                                <i className="ri-checkbox-circle-fill"></i>
                                <span><strong>Custom Link-in-Bio</strong> Hub</span>
                            </li>
                        </ul>
                    </div>

                    <a href={CTA_URL} className={styles.pricingButton}>
                        Secure Founding Member Spot <i className="ri-arrow-right-line"></i>
                    </a>
                </motion.div>
            </section >

            {/* 8.6 CORE SYSTEMS OVERVIEW */}
            < section id="core-systems" className={styles.section} >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{ textAlign: 'center', marginBottom: '40px' }}
                >
                    <div className={styles.badge}>Under The Hood</div>
                    <h2 className={styles.title}>Powering Your <span>Creator Studio</span></h2>
                    <p className={styles.subtitle}>State of the art technology and automated pipelines designed to run your business 24/7.</p>
                </motion.div>

                <div className={styles.systemsGrid}>
                    {[
                        {
                            icon: 'ri-compass-3-line',
                            title: '9-Step Onboarding Wizard',
                            desc: 'Connect channels, define niche/market, pick brand tone (Educational, Luxury, Bold, Motivational), highlight topics, upload cover photos, and launch your concept blueprint.'
                        },
                        {
                            icon: 'ri-instagram-line',
                            title: 'Instagram Analyzer Scraper',
                            desc: 'Securely calls an Apify scraper to extract profile metadata, captions, engagement metrics, and top posts analytics. The AI identifies topics your fans already love.'
                        },
                        {
                            icon: 'ri-coins-line',
                            title: 'Usage Credits System',
                            desc: 'Fair server usage quotas tracking Idea Generations, Ebook Creations, Ebook Edits, and Cover Generations. Limits reset automatically at the beginning of each billing cycle.'
                        },
                        {
                            icon: 'ri-share-line',
                            title: 'Refgrow Partnership Program',
                            desc: 'Earn recurring revenue splits from creators you refer to CB Studio. The dashboard automatically embeds a Refgrow tracking frame using your registered email.'
                        },
                        {
                            icon: 'ri-brain-line',
                            title: 'Advanced Writing AI Pipeline',
                            desc: 'Integrates OpenAI GPT-4o and Gemini models. Formats text, inserts pages, and compiles layout schemas with Templated.io & CraftMyPDF into professional PDFs.'
                        },
                        {
                            icon: 'ri-shield-keyhole-line',
                            title: 'Secured Payments & Downloads',
                            desc: 'Stripe Connect routes payouts directly to your bank account. Digital eBook files are stored on secure GCS and delivered with time-limited download keys.'
                        }
                    ].map((sys, idx) => (
                        <motion.div
                            key={idx}
                            className={`${styles.glassCard} ${styles.systemCard}`}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <div className={styles.systemIconWrap}>
                                <i className={sys.icon}></i>
                            </div>
                            <h3>{sys.title}</h3>
                            <p>{sys.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section >

            {/* 9. TEAM */}
            < section className={styles.section} >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className={styles.title}>Built by <span>Young Graduates from Dubai</span></h2>
                    <p className={styles.subtitle}>The team behind Creatorsblueprint.</p>
                </motion.div>

                <ResponsiveGrid
                    gridClassName={styles.teamGrid}
                    staggerContainer={staggerContainer}
                    fadeInUp={fadeInUp}
                    items={[
                        { name: 'Abubakar Khan', role: 'Founder', img: '/Images/team/Rectangle 23.png', bio: "A multi-venture founder with a background in digital business, media, and brand development. After building both a media agency and a clothing brand from scratch, he gained strong insight into creating and scaling brands online." },
                        { name: 'Lebohang Khasipe', role: 'Chief Technical Officer', img: '/Images/team/Rectangle 23-4.png', bio: "A Full-stack developer who completed his masters in networking and cloud. He is utilizing his skills to develop the future of creator infrastructure through seamless frontend and backend integration." },
                        { name: 'Malak Dabjan', role: 'Co-Founder / Product Specialist', img: '/Images/team/Rectangle 23-2.png', bio: "A law and human-rights-driven professional with a strong passion for empowerment. Guided by a people-first mindset, committed to helping others unlock opportunities and build sustainable success." },
                        { name: 'Soniya Rajpurohit', role: 'Co-Founder / Marketing Head', img: '/Images/team/Rectangle 23-1.png', bio: "Expert in advertising and PR with experience at top Dubai agencies. Brings strong expertise in brand positioning and messaging, with a portfolio spanning global names like Google and YouTube." },
                        { name: 'Abdoabiturab Vadnagarwala', role: 'CFO / Automation Engineer', img: '/Images/team/Rectangle 23-3.png', bio: "Computer Systems Engineering background with experience across AI automation, software, and finance. Bridges technical systems with sharp financial and operational thinking." },
                        { name: 'Varun Kumaravel', role: 'Lead Developer', img: '/Images/team/varun.jpeg', bio: "Grew up in Canada and brings an ambitious, tech-driven mindset. He completed his masters in networking and cloud, and uses his full-stack expertise to build robust, scalable systems." },
                    ]}
                    renderItem={(member) => (
                        <div className={`${styles.glassCard} ${styles.teamCard}`}>
                            <div className={styles.teamImage}>
                                {member.img ? <img src={member.img} alt={member.name} onError={(e) => e.target.style.display = 'none'} /> : null}
                            </div>
                            <h3>{member.name}</h3>
                            <h4>{member.role}</h4>
                            <p>{member.bio}</p>
                        </div>
                    )}
                />
            </section >



            {/* 10. FAQ */}
            < section className={styles.section} >
                <motion.h2
                    className={styles.title}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Frequently Asked <span>Questions</span>
                </motion.h2>

                <div className={styles.faqContainer}>
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            className={styles.faqItem}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div
                                className={styles.faqQuestion}
                                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                            >
                                {faq.q}
                                <i className={`ri-arrow-${faqOpen === i ? 'up' : 'down'}-s-line`}></i>
                            </div>
                            <AnimatePresence>
                                {faqOpen === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className={styles.faqAnswer}
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section >


            {/* Lightbox Modal */}
            < AnimatePresence >
                {lightboxContent && (
                    <motion.div
                        className={styles.lightboxOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setLightboxContent(null)}
                    >
                        <motion.div
                            className={`${styles.lightboxContent} ${lightboxContent.type === 'video' ? styles.lightboxContentVideo : ''}`}
                            initial={{ scale: 0.88, opacity: 0, y: 24 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.88, opacity: 0, y: 24 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.lightboxClose} onClick={() => setLightboxContent(null)}>
                                <i className="ri-close-line"></i>
                            </button>

                            <div className={styles.lightboxMediaWrap}>
                                {lightboxContent.type === 'video' ? (
                                    <video
                                        src={lightboxContent.src}
                                        className={styles.lightboxVideo}
                                        autoPlay
                                        controls
                                        playsInline
                                    />
                                ) : (
                                    <img src={lightboxContent.src} alt={lightboxContent.name} className={styles.lightboxImage} />
                                )}
                            </div>

                            <div className={styles.lightboxCaption}>
                                <h4>{lightboxContent.name}</h4>
                                <span>{lightboxContent.caption || 'Product Feature'}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence >

            {cursorVisible && !isMobile && (
                <>
                    <motion.div
                        className={styles.customCursorDot}
                        style={{
                            left: cursorX,
                            top: cursorY,
                            x: -4,
                            y: -4
                        }}
                    />
                    <motion.div
                        className={styles.customCursorRing}
                        style={{
                            left: cursorXSpring,
                            top: cursorYSpring,
                            x: -16,
                            y: -16
                        }}
                        animate={{
                            scale: isHovered ? 1.5 : 1,
                            borderColor: isHovered ? 'rgba(56, 189, 248, 0.8)' : 'rgba(56, 189, 248, 0.3)',
                            backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.05)' : 'rgba(255, 255, 255, 0)'
                        }}
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                </>
            )}
        </div >
    );
}

export default Home;