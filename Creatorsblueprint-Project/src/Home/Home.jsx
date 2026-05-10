import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Home.module.css';
import ResponsiveGrid from './ResponsiveGrid.jsx';

const CTA_URL = "/waitlist";

function Home({ setNavActive }) {
    const [faqOpen, setFaqOpen] = useState(null);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [lightboxContent, setLightboxContent] = useState(null);

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
        const handleKey = (e) => { if (e.key === 'Escape') setLightboxImg(null); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);


    return (
        <div className={styles.homeContainer}>

            {/* 1. HERO SECTION */}
            <section id="hero" className={`${styles.section} ${styles.hero}`}>
                {/* Hero Images Collage Background */}
                <motion.div 
                    className={styles.heroImages}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <div className={`${styles.heroImage} ${styles.heroImage1}`}>
                        <img src="/Images/home/Rectangle 19.png" alt="Creator Session" />
                    </div>
                    <div className={`${styles.heroImage} ${styles.heroImage2}`}>
                        <img src="/Images/home/Rectangle 21.png" alt="Platform Dashboard" />
                    </div>
                    <div className={`${styles.heroImage} ${styles.heroImage3}`}>
                        <img src="/Images/home/Rectangle 20.png" alt="Working" />
                    </div>
                </motion.div>

                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Introducing CB Studio
                    </motion.div>
                    
                    <motion.h1 
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Views and Likes Are Nice.<br />
                        <span>Revenue Is Better.</span>
                    </motion.h1>
                    
                    <motion.p 
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Turn your attention into assets. Build digital products, launch automated sales pages, and scale smarter with the all-in-one creator backend.
                    </motion.p>
                    
                    <motion.div 
                        className={styles.buttonGroup}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a href={CTA_URL} className={styles.primaryButton}>
                            Join Now <i className="ri-arrow-right-line"></i>
                        </a>
                        <a href="#features" className={styles.secondaryButton}>
                            Explore Features
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* 2. TRUST / VALUE STRIP */}
            <section id="trust" className={styles.valueStrip}>
                {[
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
                ))}
            </section>

            {/* 3. MISSION */}
            <section id="mission" className={styles.section}>
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
                                CreatorsBlueprint exists to help creators turn attention into <span>ownership.</span>
                            </h2>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '1.1rem' }}>
                                In a world where creators depend on unpredictable views, likes, and brand deals, CB Studio helps them build owned digital assets, systems, and automated monetization flows. We believe you should control your revenue engine.
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
            </section>

            {/* 4. FEATURES SECTION */}
            <section id="features" className={styles.section}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInUp}
                >
                    <h2 className={styles.title}>The All-in-One <span>Creator Backend</span></h2>
                    <p className={styles.subtitle}>Everything you need to package, launch, and automate your digital business.</p>
                </motion.div>

                <ResponsiveGrid 
                    gridClassName={styles.grid3}
                    staggerContainer={staggerContainer}
                    fadeInUp={fadeInUp}
                    items={[
                        { icon: 'ri-magic-line', title: 'AI-Powered Product Builder', desc: 'Build and launch monetizable digital products faster than ever before. Package your knowledge efficiently.' },
                        { icon: 'ri-layout-masonry-line', title: 'Landing Page Funnels', desc: 'Create premium, high-converting sales pages without starting from scratch. Design that demands attention.' },
                        { icon: 'ri-robot-2-line', title: 'Automated Delivery', desc: 'Automate product delivery and creator systems. Set it up once and let the software handle fulfillment.' },
                        { icon: 'ri-bar-chart-grouped-line', title: 'Sales Automation', desc: 'Turn your audience into a repeatable revenue engine with smart workflows and optimized checkout flows.' },
                        { icon: 'ri-vip-diamond-line', title: 'Premium Packaging', desc: 'Give your digital products the high-end feel they deserve. Increase perceived value instantly.' },
                        { icon: 'ri-dashboard-3-line', title: 'Creator Infrastructure', desc: 'Manage your entire digital empire from one sleek dashboard built specifically for the modern creator.' }
                    ]}
                    renderItem={(feat) => (
                        <div className={`${styles.glassCard} ${styles.featureCard}`}>
                            <div className={styles.featureIcon}>
                                <i className={feat.icon}></i>
                            </div>
                            <h3>{feat.title}</h3>
                            <p>{feat.desc}</p>
                        </div>
                    )}
                />
            </section>

            {/* 5. HOW IT WORKS */}
            <section id="how-it-works" className={styles.section}>
                <div className={styles.grid2}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.title} style={{ textAlign: 'left' }}>From Audience to <span>Assets</span> in 4 Steps</h2>
                        <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '32px' }}>
                            We've streamlined the entire process. No more stringing together 5 different expensive tools.
                        </p>
                        <a href={CTA_URL} className={styles.primaryButton}>Start Now</a>
                    </motion.div>
                    
                    <motion.div 
                        className={styles.stepList}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { step: '1', title: 'Define your offer', desc: 'Identify what your audience actually wants to buy based on your unique expertise.' },
                            { step: '2', title: 'Build your digital product', desc: 'Use our AI-assisted tools to structure and generate your high-value digital asset.' },
                            { step: '3', title: 'Launch your page', desc: 'Deploy a premium, converting sales landing page with integrated payments.' },
                            { step: '4', title: 'Convert & Automate', desc: 'Drive traffic from your socials and let the system handle sales and delivery 24/7.' }
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
            </section>

            {/* 5.5 PLATFORM SHOWCASE */}
            <section id="platform" className={styles.section}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInUp}
                    style={{ width: '100%' }}
                >
                    <div className={styles.badge} style={{ margin: '0 auto 16px auto', display: 'block', width: 'fit-content' }}>The Platform</div>
                    <h2 className={styles.title}>Inside <span>CB Studio</span></h2>
                    <p className={styles.subtitle}>Every tool you need to package, launch, and scale your creator business.</p>

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
                        <div 
                            className={styles.featureVideoWrap}
                            onClick={() => setLightboxContent({ src: '/Video/storefront-preview.mp4', type: 'video', name: 'Storefront Preview', caption: 'The Platform' })}
                            style={{ cursor: 'pointer' }}
                        >
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

                    {/* ── Product card previews ── */}
                    <div className={styles.showcaseCardsRow}>
                        <div className={styles.showcaseCardItem}>
                            <div className={styles.showcaseCardTag}>
                                <i className="ri-book-2-line"></i> Ebook Ideas
                            </div>
                            <div 
                                className={styles.showcaseCardVideoWrap}
                                onClick={() => setLightboxContent({ src: '/Video/ebook-flow.mp4', type: 'video', name: 'Ebook Ideas', caption: 'AI Builder' })}
                                style={{ cursor: 'pointer' }}
                            >
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
                            <p className={styles.showcaseCardDesc}>AI-assisted product creation that structures your knowledge into a high-value digital asset.</p>
                        </div>
                        <div className={styles.showcaseCardItem}>
                            <div className={styles.showcaseCardTag}>
                                <i className="ri-edit-box-line"></i> Editor Preview
                            </div>
                            <div 
                                className={styles.showcaseCardVideoWrap}
                                onClick={() => setLightboxContent({ src: '/Video/editor-preview.mp4', type: 'video', name: 'Editor Preview', caption: 'Product Customization' })}
                                style={{ cursor: 'pointer' }}
                            >
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
                            <p className={styles.showcaseCardDesc}>The ultimate tool for creators to refine, package, and polish their digital empire.</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 6. PHASE 1 PROOF */}
            <section id="proof" className={styles.section}>
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
            </section>

            {/* 7. TESTIMONIALS */}
            <section className={styles.section}>
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
            </section>

            {/* 8. PHASE 2 INTRO */}
            <section className={styles.section}>
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
            </section>

            {/* 9. TEAM */}
            <section className={styles.section}>
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
                        { name: 'Varun Kumaravel', role: 'Lead Developer', img: '/Images/team/varun.jpg', bio: "Grew up in Canada and brings an ambitious, tech-driven mindset. He completed his masters in networking and cloud, and uses his full-stack expertise to build robust, scalable systems." },
                    ]}
                    renderItem={(member) => (
                        <div className={`${styles.glassCard} ${styles.teamCard}`}>
                            <div className={styles.teamImage}>
                                {member.img ? <img src={member.img} alt={member.name} onError={(e) => e.target.style.display='none'} /> : null}
                            </div>
                            <h3>{member.name}</h3>
                            <h4>{member.role}</h4>
                            <p>{member.bio}</p>
                        </div>
                    )}
                />
            </section>

            {/* 10. FAQ */}
            <section className={styles.section}>
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
            </section>

            {/* 11. FINAL CTA */}
            <section className={styles.section}>
                <motion.div 
                    className={styles.ctaBox}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2>Ready to Turn Attention Into <span>Assets?</span></h2>
                    <p className={styles.subtitle} style={{ marginBottom: '40px' }}>
                        Join the next phase of creator monetization. Launch smarter with CB Studio today.
                    </p>
                    <a href={CTA_URL} className={`${styles.primaryButton} ${styles.primaryButtonLarge}`}>
                        Join the Waitlist <i className="ri-rocket-2-fill" style={{ marginLeft: '8px' }}></i>
                    </a>
                </motion.div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
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
            </AnimatePresence>
        </div>
    );
}

export default Home;