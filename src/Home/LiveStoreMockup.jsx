import React from 'react';
import styles from './Home.module.css';

export default function LiveStoreMockup() {
    return (
        <div className={styles.liveStoreMockupContainer}>
            {/* 1. Background Card (Offset to the right and back) */}
            <div className={styles.abstractHeaderCard}>
                <div className={styles.abstractHeaderImageWrap}>
                    <img src="/Images/mockup_assets/abstract_header.png" alt="Abstract Pattern" />
                </div>
                <div className={styles.abstractHeaderCardBody}>
                    <div className={styles.abstractHeaderPrice}>$32</div>
                    <div className={styles.abstractHeaderPaymentRow}>
                        <i className="ri-mastercard-fill" style={{ color: '#eb001b' }}></i>
                        <i className="ri-apple-fill" style={{ color: '#ffffff' }}></i>
                        <span>Pay</span>
                    </div>
                    <div className={styles.abstractHeaderDelivery}>
                        <i className="ri-truck-line"></i>
                    </div>
                </div>
            </div>

            {/* 2. Primary Phone Mockup */}
            <div className={styles.mockupPhone}>
                {/* Phone Notch/Header decoration */}
                <div className={styles.phoneHeaderDecoration}>
                    <div className={styles.phoneCamera}></div>
                    <div className={styles.phoneSpeaker}></div>
                </div>

                <div className={styles.phoneScrollableContent}>
                    {/* Profile Section */}
                    <div className={styles.profileSection}>
                        {/* Profile pic inside gradient circle */}
                        <div className={styles.profileAvatarFrame}>
                            <img src="/Images/mockup_assets/avatar.png" alt="Hajira Khan" className={styles.profileAvatarImage} />
                        </div>
                        
                        <div className={styles.profileNameRow}>
                            <h3>Hajira Khan</h3>
                            <i className="ri-verified-badge-fill" style={{ color: '#38bdf8' }}></i>
                        </div>
                        
                        <span className={styles.profileHandle}>@hajirakhaan</span>
                        
                        {/* Social Links Icons */}
                        <div className={styles.profileSocials}>
                            <i className="ri-instagram-line"></i>
                            <i className="ri-tiktok-line"></i>
                            <i className="ri-youtube-line"></i>
                            <i className="ri-twitter-x-fill"></i>
                            <i className="ri-linkedin-box-fill"></i>
                        </div>
                        
                        {/* Bio Text */}
                        <div className={styles.profileBio}>
                            <p>Digital creator</p>
                            <p><i className="ri-map-pin-2-fill" style={{ color: '#ef4444' }}></i> Dubai</p>
                            <p>Model | Creator</p>
                            <p>Dm or Email for collabs 💗</p>
                            <p>Get my Exclusive playlist 👇</p>
                        </div>
                        
                        {/* Link-in-bio URL */}
                        <a href="https://creatorsblueprint.io/hajiraKhan" target="_blank" rel="noopener noreferrer" className={styles.profileLinkInBio}>
                            <i className="ri-link"></i> creatorsblueprint.io/hajiraKhan
                        </a>
                    </div>

                    {/* Product Cards List */}
                    <div className={styles.productsList}>
                        {/* Card 1: AI Generated Ebook */}
                        <div className={styles.productCard}>
                            <div className={styles.productCardHeaderInfo}>
                                <div className={styles.productCardImage}>
                                    <img src="/Images/mockup_assets/ebook_cover.png" alt="AI Ebook Cover" />
                                </div>
                                <div className={styles.productCardMainInfo}>
                                    <h4>AI Generated Ebook</h4>
                                    <p className={styles.productCardDescText}>High-quality AI generated ebook ready to download and resell.</p>
                                    <div className={styles.productCardDeliveryBadge}>
                                        <i className="ri-mail-line"></i> Email Delivery
                                    </div>
                                    <div className={styles.productCardPricingRow}>
                                        <span className={styles.productCardPriceText}>$17</span>
                                        <span className={styles.productCardSlashedPrice}>$39</span>
                                        <span className={styles.productCardRating}><i className="ri-star-fill"></i> 4.8</span>
                                        <span className={styles.productCardDiscount}>57% OFF</span>
                                    </div>
                                </div>
                            </div>
                            <button className={styles.productCardActionBtn}>
                                Get Instant Access <i className="ri-arrow-right-s-line"></i>
                            </button>
                        </div>

                        {/* Card 2: Uploaded Digital Product */}
                        <div className={styles.smallProductRowCard}>
                            <div className={styles.smallProductImage}>
                                <img src="/Images/mockup_assets/bollywood_cover.png" alt="Bollywood Cover" />
                            </div>
                            <div className={styles.smallProductInfo}>
                                <h4>Uploaded Digital Product</h4>
                                <p>Ebooks, guides, templates & more</p>
                                <span className={styles.smallProductDelivery}><i className="ri-mail-line"></i> Email Delivery</span>
                            </div>
                            <div className={styles.smallProductPriceRight}>
                                <span>$29</span>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </div>

                        {/* Card 3: Affiliate Links */}
                        <div className={styles.smallProductRowCard}>
                            <div className={styles.smallProductIconPurple}>
                                <i className="ri-link"></i>
                            </div>
                            <div className={styles.smallProductInfo}>
                                <h4>Affiliate Links</h4>
                                <p>Top tools I use & recommend</p>
                                <span className={styles.smallProductSubText}>Earn commissions</span>
                            </div>
                            <div className={styles.smallProductPriceRight}>
                                <i className="ri-arrow-right-s-line"></i>
                            </div>
                        </div>

                        {/* Card 4: Payment Options */}
                        <div className={styles.smallProductRowCard}>
                            <div className={styles.smallProductIconBlue}>
                                <i className="ri-bank-card-line"></i>
                            </div>
                            <div className={styles.smallProductInfo}>
                                <h4>Payment Options</h4>
                                <p>Visa, Mastercard, Apple Pay & more</p>
                                <div className={styles.smallProductPaymentLogos}>
                                    <i className="ri-visa-line" style={{ color: '#1a1f71' }}></i>
                                    <i className="ri-mastercard-fill" style={{ color: '#eb001b' }}></i>
                                    <i className="ri-apple-fill" style={{ color: '#ffffff' }}></i>
                                    <span>Pay</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer powered branding */}
                    <div className={styles.mockupFooterBranding}>
                        <span>Powered by Creators Blueprint ✨</span>
                    </div>
                </div>
            </div>

            {/* 3. Social Analytics Card (Upper Left) */}
            <div className={styles.analyticsCard}>
                <div className={styles.analyticsCardHeader}>
                    <div className={styles.analyticsCardTitleWrap}>
                        <div className={styles.analyticsIconWrap}>
                            <i className="ri-bar-chart-2-fill"></i>
                        </div>
                        <h4>Social Analytics</h4>
                    </div>
                    <i className="ri-arrow-right-s-line"></i>
                </div>
                
                <div className={styles.analyticsStatsGrid}>
                    <div className={styles.analyticsStatItem}>
                        <span className={styles.analyticsStatLabel}>Followers</span>
                        <span className={styles.analyticsStatValue}>219K</span>
                        <span className={styles.analyticsStatChange}><i className="ri-arrow-up-line"></i> 12.5%</span>
                        <span className={styles.analyticsStatSub}>vs last 30 days</span>
                    </div>
                    <div className={styles.analyticsStatItem}>
                        <span className={styles.analyticsStatLabel}>Profile Views</span>
                        <span className={styles.analyticsStatValue}>45.7K</span>
                        <span className={styles.analyticsStatChange}><i className="ri-arrow-up-line"></i> 8.7%</span>
                        <span className={styles.analyticsStatSub}>vs last 30 days</span>
                    </div>
                    <div className={styles.analyticsStatItem}>
                        <span className={styles.analyticsStatLabel}>Link Clicks</span>
                        <span className={styles.analyticsStatValue}>12.3K</span>
                        <span className={styles.analyticsStatChange}><i className="ri-arrow-up-line"></i> 15.3%</span>
                        <span className={styles.analyticsStatSub}>vs last 30 days</span>
                    </div>
                </div>

                {/* SVG Graph */}
                <div className={styles.analyticsGraphWrap}>
                    <svg className={styles.analyticsSvgGraph} viewBox="0 0 260 80" fill="none">
                        <defs>
                            <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgba(124, 58, 237, 0.25)" />
                                <stop offset="100%" stopColor="rgba(124, 58, 237, 0.0)" />
                            </linearGradient>
                        </defs>
                        <path 
                            d="M 10 70 Q 30 50 50 65 T 90 45 T 130 55 T 170 30 T 210 40 T 250 25" 
                            fill="none" 
                            stroke="#7c3aed" 
                            strokeWidth="3.5" 
                            strokeLinecap="round" 
                        />
                        <path 
                            d="M 10 70 Q 30 50 50 65 T 90 45 T 130 55 T 170 30 T 210 40 T 250 25 L 250 80 L 10 80 Z" 
                            fill="url(#graphGrad)" 
                        />
                        <circle cx="250" cy="25" r="5" fill="#7c3aed" />
                        <rect x="225" y="2" width="35" height="15" rx="4" fill="#7c3aed" />
                        <text x="242.5" y="12" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">12.3K</text>
                    </svg>
                </div>
            </div>

            {/* 4. Floating Glassmorphic Badges */}
            {/* Left side: AI Generated Ebooks */}
            <div className={`${styles.floatingLiveBadge} ${styles.liveBadgeEbooks}`}>
                <div className={`${styles.liveBadgeIconBox} ${styles.iconBoxPurple}`}>
                    <i className="ri-sparkles-fill"></i>
                </div>
                <span>AI Generated Ebooks</span>
            </div>

            {/* Left side: Email Delivery */}
            <div className={`${styles.floatingLiveBadge} ${styles.liveBadgeEmail}`}>
                <div className={`${styles.liveBadgeIconBox} ${styles.iconBoxBlue}`}>
                    <i className="ri-mail-fill"></i>
                </div>
                <span>Email Delivery</span>
            </div>

            {/* Left side: Secure Payments */}
            <div className={`${styles.floatingLiveBadge} ${styles.liveBadgePayments}`}>
                <div className={`${styles.liveBadgeIconBox} ${styles.iconBoxIndigo}`}>
                    <i className="ri-wallet-3-fill"></i>
                </div>
                <span>Secure Payments</span>
            </div>

            {/* Right side: Affiliate Links */}
            <div className={`${styles.floatingLiveBadge} ${styles.liveBadgeAffiliate}`}>
                <div className={`${styles.liveBadgeIconBox} ${styles.iconBoxPink}`}>
                    <i className="ri-link"></i>
                </div>
                <span>Affiliate Links</span>
            </div>

            {/* Right side: Uploaded Products */}
            <div className={`${styles.floatingLiveBadge} ${styles.liveBadgeProducts}`}>
                <div className={`${styles.liveBadgeIconBox} ${styles.iconBoxViolet}`}>
                    <i className="ri-download-cloud-2-fill"></i>
                </div>
                <span>Uploaded Products</span>
            </div>
        </div>
    );
}
