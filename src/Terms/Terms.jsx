import styles from "./Terms.module.css";

function Terms() {
    return (
        <div className={styles.termsContainer}>
            <div className={styles.termsContent}>
                
                {/* Header Section */}
                <div className={styles.header}>
                    <i className="ri-file-text-line"></i>
                    <h1>Terms of <span>Service</span></h1>
                    <p className={styles.subtitle}>CB Studio SaaS Platform</p>
                </div>

                {/* Metadata Card */}
                <div className={styles.metaCard}>
                    <div className={styles.metaGrid}>
                        <div><strong>Entity Responsible:</strong> Creator Blueprint FZ-LLC</div>
                        <div><strong>Effective Date:</strong> June 1st, 2026</div>
                        <div><strong>Incorporation Domicile:</strong> Ras Al Khaimah Economic Zone (RAKEZ), UAE</div>
                        <div><strong>Last Updated Date:</strong> June 1st, 2026</div>
                        <div><strong>Primary Contact Endpoint:</strong> <a href="mailto:help@creatorsblueprint.io">help@creatorsblueprint.io</a></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className={styles.legalBody}>
                    
                    <section>
                        <h2>1. Legal Framework and Acceptance of Terms</h2>
                        
                        <h3>1.1 Binding Agreement</h3>
                        <p>
                            These Terms of Service (including all referenced policies, schedules, and addenda, collectively referred to as the <strong>"Agreement"</strong>) constitute a legally binding, valid, and enforceable contract between <strong>Creator Blueprint FZ-LLC</strong>, a free zone limited liability company established under the rules and regulations of the Ras Al Khaimah Economic Zone (RAKEZ), United Arab Emirates, operating under the trade name <strong>CB Studio</strong> (hereinafter referred to as the <strong>"Company"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>) and any natural person, legal entity, or authorized corporate agent who accesses, registers for, or interacts with the platform (hereinafter referred to as the <strong>"User"</strong>, <strong>"Creator"</strong>, or <strong>"you"</strong>).
                        </p>

                        <h3>1.2 Explicit Conditional Access</h3>
                        <p>
                            The Company offers access to its cloud-hosted software application, automated ebook generation pipelines, digital creator store hosting infrastructure, and affiliate tracking modules (collectively, the <strong>"Services"</strong>) conditioned entirely upon your unconditioned acceptance of this Agreement.
                        </p>

                        <div className={styles.warningBox}>
                            <h4>IMPORTANT NOTICE ON ACCEPTANCE</h4>
                            <p>
                                BY CLICKING "I AGREE", COMPLETING THE ADMINISTRATIVE ONBOARDING PROCESS, GENERATING AN EBOOK, OR SETTING UP A HOSTED CREATOR STORE, YOU DECLARE THAT YOU HAVE READ, UNDERSTOOD, AND CONCURRENTLY AGREE TO BE BOUND BY EVERY CLAUSE, DISCLAIMER, RISK ALLOCATION, AND LIABILITY CAP CONTAINED HEREIN. IF YOU DO NOT AGREE TO THIS AGREEMENT IN ITS ENTIRETY, YOU LACK AUTHORIZATION TO USE THE SERVICES AND MUST IMMEDIATELY ESCAPE THE PLATFORM AND CEASE ALL INTERACTION WITH DOMAINS OPERATED BY THE COMPANY.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2>2. Definitions</h2>
                        <p>
                            For the purposes of this Agreement, the following terms shall have the designated meanings. Any terms not defined herein shall be interpreted according to standard commercial usage in the SaaS and e-commerce industries:
                        </p>
                        <ul>
                            <li><strong>"Account"</strong> means the personalized digital environment, database access privileges, and administrative interface issued by the Company to a specific User upon successful completion of the registration protocol.</li>
                            <li><strong>"AI Engine Providers"</strong> means the external third-party enterprise machine learning and large language model architectures integrated via API into the platform, including but not limited to OpenAI, LLC, Nano Banana Pro, and Templated.io.</li>
                            <li><strong>"Buyer"</strong> means any end-consumer or individual web traffic participant who visits a Creator Store hosted on the CB Studio platform to purchase, download, or interact with a digital asset.</li>
                            <li><strong>"Creator Store"</strong> means the dynamic web presentation layer, hosted on infrastructure managed by the Company, that allows a Creator to display, market, and sell digital assets to Buyers.</li>
                            <li><strong>"User Content"</strong> means any raw inputs, data structures, textual entries, layout choices, image assets, or PDF files uploaded, keyed, or otherwise transferred to the platform by a User.</li>
                            <li><strong>"AI-Generated Output"</strong> means the structured text files, ebook layout structures, dynamic compilation results, and digital cover graphic files delivered to a User by the platform as a result of processing data through third-party machine learning APIs.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Eligibility and Corporate Authority</h2>
                        
                        <h3>3.1 Age and Contractual Capacity</h3>
                        <p>
                            The Services are intended exclusively for commercial deployment by professional content creators, influencers, and social media personalities who are at least eighteen (18) years of age and possess full legal capacity to enter into binding, non-voidable commercial contracts under the laws of the United Arab Emirates and their local jurisdiction.
                        </p>

                        <h3>3.2 Social Verification Prerequisite</h3>
                        <p>
                            To preserve the professional ecosystem of the platform, you must possess an active, valid, and public-facing Instagram account. If your Instagram profile is private, deactivated, or classified as a bot account, you fail to meet our eligibility parameters and your Account will be suspended.
                        </p>

                        <h3>3.3 Corporate Authority to Bind</h3>
                        <p>
                            If you register an Account or accept these terms on behalf of a corporate enterprise, limited liability company, partnership, or commercial agency, you represent and warrant that you possess the explicit legal authority to bind that entity to this Agreement. In such cases, the term "User", "Creator", or "you" shall collectively refer to both the human operator and the underlying business entity.
                        </p>
                    </section>

                    <section>
                        <h2>4. Account Registration and Administrative Security</h2>
                        
                        <h3>4.1 Data Integrity Warranties</h3>
                        <p>
                            When registering an Account, you agree to provide true, current, and complete information as prompted by our onboarding interfaces. You maintain a continuous contractual obligation to update these registration parameters through our Stripe Customer Portal link or profile settings to prevent data stagnation. The provision of false, out-of-date, or intentionally deceptive registration elements constitutes a material breach of this Agreement.
                        </p>

                        <h3>4.2 Credentials Safeguards and Non-Transferability</h3>
                        <p>
                            Your Account login credentials (including passwords and Google OAuth tokens) are strictly confidential. <strong>Credential sharing, team-account multiplexing, or transferring an Account to a third-party content creator without the express written authorization of the Company is prohibited.</strong> You accept exclusive, non-delegable liability for all activities, asset generations, financial transactions, and compliance liabilities originating from your Account credentials. You agree to notify the Company immediately at <a href="mailto:help@creatorsblueprint.io">help@creatorsblueprint.io</a> if you discover an unauthorized login or data breach affecting your profile.
                        </p>
                    </section>

                    <section>
                        <h2>5. Revenue-Generating Disclosures & Structural Isolation</h2>
                        
                        <h3>5.1 Marketplace Venue Clarification</h3>
                        <p>
                            Creators acknowledge that CB Studio acts strictly as a technical platform infrastructure provider. The Company does not act as a retail vendor, broker, auctioneer, or agent for any products offered through Creator Stores.
                        </p>
                        <p>
                            <strong>WHEN A BUYER PURCHASES AN EBOOK OR DIGITAL ASSET THROUGH A CREATOR STORE HOSTED ON THE PLATFORM, THE CONTRACT FOR SALE IS FORMED DIRECTLY AND EXCLUSIVELY BETWEEN THAT CREATOR AND THE BUYER. THE COMPANY IS NOT A PARTY TO, BENEFICIARY OF, OR GUARANTOR OF THAT COMMERCIAL TRANSACTION.</strong>
                        </p>

                        <h3>5.2 Dynamic UAE Licensing Pass-Through Mandate</h3>
                        <p>
                            Pursuant to the federal laws of the United Arab Emirates governing electronic commerce, media production, and digital trading, <strong>any Creator residing within, physically operating from, or banking within the United Arab Emirates who processes consumer payments via Stripe Connect is required to hold a valid commercial trade license or freelance media permit issued by a competent regulatory authority (e.g., RAKEZ, Dubai DET).</strong>
                        </p>
                        <p>
                            By linking a Stripe Connect profile to the platform, you represent, warrant, and covenant that you possess and will maintain an active, valid license. You agree to submit verification copies of your corporate trade license to the Company immediately upon request. Non-compliance with this section will trigger an immediate freeze of all pending Stripe payouts and a permanent termination of your platform privileges.
                        </p>
                    </section>

                    <section>
                        <h2>6. Subscriptions, Payments, and Billing Lifecycle</h2>
                        
                        <h3>6.1 Subscription Engine Mechanics</h3>
                        <p>
                            Access to core ebook generation tools and Creator Store hosting features requires an active, paid tier subscription plan. The Company utilizes a single, tier-based subscription model. All subscription fees are priced in United States Dollars (USD) or United Arab Emirates Dirhams (AED), as determined by the Company checkout dashboard.
                        </p>

                        <h3>6.2 Automatic Renewal Protocols</h3>
                        <p>
                            <strong>ALL SUBSCRIPTIONS ARE CONFIGURED ON AN AUTOMATICALLY RECURRING BASIS AND RENEW INDEFINITELY AT THE START OF EACH SUCCESSIVE MONTHLY BILLING INTERVAL. BY SELECTING A PAID TIER PLAN, YOU AUTHORIZE STRIPE, ON BEHALF OF THE COMPANY, TO AUTOMATICALLY CHARGE YOUR LINKED PAYMENT METHOD FOR THE THEN-CURRENT SUBSCRIPTION FEE ON THE EXACT CALENDAR DATE CORRESPONDING TO THE INITIAL REGISTRATION ANNIVERSARY.</strong>
                        </p>

                        <h3>6.3 Cancellation and Non-Refundability Framework</h3>
                        <p>
                            You can cancel your subscription plan at any time through the built-in Stripe Customer Portal interface. To prevent the processing of an upcoming recurring charge, you must execute your cancellation request at least forty-eight (48) hours prior to the next scheduled renewal date.
                        </p>
                        <p>
                            <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALL FEES PAID TO THE COMPANY ARE NON-REFUNDABLE. THE COMPANY DOES NOT ISSUE PRORATED REFUNDS, CREDITS, OR CASH REVERSALS FOR UNUSED PORTIONS OF A MONTHLY SUBSCRIPTION PERIOD OR UNEXERCISED AI GENERATION QUOTAS.</strong>
                        </p>

                        <h3>6.4 Invoice Delivery</h3>
                        <p>
                            The Company does not generate or manually distribute paper or custom email invoices for business customers. Creators receive an automated transactional email receipt from Stripe following every successful transaction. Full invoice tracking and payment ledger histories are accessible continuously within the platform via the integrated Stripe Customer Portal link.
                        </p>
                    </section>

                    <section>
                        <h2>7. Automated Public Instagram Data Extraction (Apify)</h2>
                        
                        <h3>7.1 Scope of Extraction Request</h3>
                        <p>
                            To accelerate onboarding and creator store configuration, the platform incorporates automated data-gathering scraping modules powered by Apify. By providing your public Instagram handle during the validation checklist, you grant the Company an explicit, active mandate and authorization to execute web-scraping queries against your public Instagram profile page to extract your public profile image URL, follower/following metrics, display name, and biographical text parameters.
                        </p>

                        <h3>7.2 Creator Representation and Warranties on Scraping</h3>
                        <p>
                            You represent and warrant that the Instagram account handle provided belongs to you or that you possess a valid corporate right to control it, that the target account is entirely public, and that your authorization does not violate third-party agreements or the underlying rules of the social media network. You acknowledge that Meta Platforms, Inc. may change its platform restrictions, which could degrade, block, or completely terminate the functionality of the Apify scraping mechanism. The Company accepts no liability for service disruptions resulting from changes to Meta's public network architecture.
                        </p>
                    </section>

                    <section>
                        <h2>8. Intellectual Property and Licensing Architectures</h2>
                        
                        <h3>8.1 Company Intellectual Property Boundaries</h3>
                        <p>
                            The Company retains exclusive ownership, title, copyright, and patent privileges over all software source codes, user interface designs, dynamic backend preset engineering prompts, systemic configurations, databases, brand logos, and trade secrets related to the CB Studio platform. Except for the explicit, restricted software license granted in Section 8.2, nothing in this Agreement transfers any Company Intellectual Property to a User.
                        </p>

                        <h3>8.2 Software License Grant</h3>
                        <p>
                            Subject to your continuous payment of all subscription fees and adherence to the guidelines outlined in this Agreement, the Company grants you a limited, non-exclusive, non-transferable, revocable, non-sublicensable license to access and use the platform interface via an approved web browser solely for your business operational purposes.
                        </p>

                        <h3>8.3 Ownership of User Content and AI Outputs</h3>
                        <ul>
                            <li><strong>User Content:</strong> The Creator retains sole ownership, title, and intellectual property rights over all raw assets uploaded to our GCP storage buckets (e.g., source images, reference PDFs, customized text blocks).</li>
                            <li><strong>AI-Generated Outputs:</strong> Pursuant to your subscription tier rights, the Company transfers all transferable rights and title to the AI-Generated Output (completed digital books, generated structural cover files, creator store presentation texts) to the Creator once the generation cycle is complete.</li>
                        </ul>

                        <h3>8.4 Contractual License Granted to the Company</h3>
                        <p>
                            To operate the platform, host creator stores, and distribute content, you grant the Company a worldwide, royalty-free, fully paid-up, sublicensable (solely to our technical subprocessors like Google Cloud Platform and OpenAI), non-exclusive license to host, parse, cache, reproduce, translate, and transmit your User Content and AI-Generated Outputs. <strong>This license is strictly limited to providing and maintaining the Services, and the Company will not use your content or outputs to train public or proprietary machine learning models.</strong>
                        </p>

                        <h3>8.5 Feedback Ownership</h3>
                        <p>
                            If you submit any feature requests, architectural optimizations, or operational feedback to the Company, you agree that all such elements become the sole property of the Company. The Company may use, implement, or monetize this feedback without any payment or obligation to you.
                        </p>
                    </section>

                    <section>
                        <h2>9. Artificial Intelligence (AI) Safety and Usage Disclaimers</h2>
                        
                        <h3>9.1 Alchemical Hallucination Disclaimers</h3>
                        <p>
                            The platform leverages advanced third-party LLM algorithms to assist Creators with asset generation. You acknowledge that AI output can contain errors, inaccuracies, and hallucinations. <strong>THE COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING THE ACCURACY, ORIGINALITY, COMPLETE SUITABILITY, OR INTELLECTUAL PROPERTY INFRASTRUCTURE VALIDITY OF ANY AI-GENERATED OUTPUTS.</strong>
                        </p>

                        <h3>9.2 Non-Delegable Curation Mandate</h3>
                        <p>
                            The Creator accepts sole, non-delegable responsibility for checking, reviewing, revising, and verifying all AI-Generated Outputs before publishing, marketing, or selling them on a Creator Store. The Creator is responsible for ensuring that all content sold on the platform does not violate copyright protections, trademark registrations, or consumer protection guidelines.
                        </p>

                        <h3>9.3 No Professional Advice</h3>
                        <p>
                            AI-Generated Outputs are intended strictly for creative, digital, and promotional purposes. Under no circumstances should platform content be construed as legal, medical, financial, tax, or professional advice.
                        </p>
                    </section>

                    <section>
                        <h2>10. Third-Party Utilities and Integrations</h2>
                        
                        <h3>10.1 Subprocessor Ecosystem Limitations</h3>
                        <p>
                            The Services rely on third-party service providers (e.g., Stripe, Stripe Connect, Google Cloud Platform, OpenAI, and Refgrow). You acknowledge that these external integrations are governed by their respective corporate terms of service and data governance policies.
                        </p>

                        <h3>10.2 Refgrow Affiliate Attribution Platform Rules</h3>
                        <p>
                            The platform incorporates the Refgrow affiliate tracking script to manage, monitor, and pay out commissions within our affiliate ecosystem. By activating your affiliate status or loading a Creator Store containing tracking variables, you acknowledge that the Refgrow client-side script parses query parameters and deploys domain-specific first-party cookies and localStorage keys to track attribution across modern browser security environments (such as Safari ITP). The Company is not responsible for tracking inaccuracies caused by browser configurations, ad-blockers, or local script interference.
                        </p>
                    </section>

                    <section>
                        <h2>11. Privacy and Data Protection Reference</h2>
                        <p>
                            The processing of all Personal Data, account information, scraped social data, and affiliate records collected via the platform is governed by our Privacy Policy. The terms of the Privacy Policy are fully incorporated into this Agreement by reference.
                        </p>
                    </section>

                    <section>
                        <h2>12. Acceptable Use and Prohibited Activities</h2>
                        <p>
                            You agree not to engage in, facilitate, or permit any of the following prohibited activities:
                        </p>
                        <ul>
                            <li><strong>Illegal and Harmful Uses:</strong> Uploading, generating, or commercializing content that violates UAE criminal law, international human trafficking treaties, child exploitation prohibitions, or anti-money laundering regulations.</li>
                            <li><strong>Platform Reverse Engineering:</strong> Attempting to decompile, disassemble, or extract the platform's source code, software architecture, or backend preset system prompts.</li>
                            <li><strong>Automated Extraction and Scraping:</strong> Deploying unauthorized automated bots, crawlers, or extraction scripts against domains or infrastructure managed by the Company.</li>
                            <li><strong>Malicious Software Injection:</strong> Introducing viruses, malware, trojan horses, worms, or logic bombs into our GCP cloud run servers.</li>
                            <li><strong>Credential Sharing:</strong> Sharing, multiplexing, or distributing Account access tokens or login parameters to unauthorized third parties.</li>
                            <li><strong>AI Model Abuse:</strong> Engaging in adversarial prompt generation or jailbreaking techniques designed to manipulate our integrated third-party AI endpoints.</li>
                            <li><strong>Financial Fraud:</strong> Utilizing stolen credit card data, manipulating Stripe Connect pathways, or fabricating transactions to bypass platform billing rules.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>13. Content Moderation Rights and Intellectual Property Policy</h2>
                        
                        <h3>13.1 Subjective Review and Discretionary Takedowns</h3>
                        <p>
                            The Company retains the right, but not the obligation, to monitor, review, and moderate User Content and AI-Generated Outputs. <strong>The Company reserves the right to remove, delete, or disable access to any content, creator store, or product layout at its sole discretion, without prior notice or liability, if it determines that the material violates these Terms, presents legal exposure, or undermines platform stability.</strong>
                        </p>

                        <h3>13.2 DMCA and Copyright Enforcement Workflow</h3>
                        <p>
                            If you believe that any material hosted on a Creator Store infringes your copyright protections, you may submit a formal notification to our support endpoint: <a href="mailto:help@creatorsblueprint.io">help@creatorsblueprint.io</a>. Your notice must include a physical or electronic signature of the owner, specific identification of the work, clear target URLs, and a statement made under penalty of perjury that the deployment is unauthorized.
                        </p>

                        <h3>13.3 Counter-Notice Process</h3>
                        <p>
                            If a Creator believes their content was removed in error under a copyright claim, they may submit a formal written counter-notice containing their identity parameters, target URLs, and a statement consenting to the jurisdiction of the courts of Dubai to resolve the dispute.
                        </p>
                    </section>

                    <section>
                        <h2>14. Termination and Suspension Rights</h2>
                        
                        <h3>14.1 Voluntary Termination by User</h3>
                        <p>
                            You may terminate this Agreement at any time by executing an Account deletion request within your profile settings dashboard interface. Upon confirmation, your subscription will be canceled and your operational assets purged permanently.
                        </p>

                        <h3>14.2 Discretionary Termination and Suspension by Company</h3>
                        <p>
                            The Company reserves the right to immediately suspend or permanently terminate your Account, without notice, liability, or financial mitigation, under circumstances involving a material breach, non-payment, requests from law enforcement, third-party subprocessor disconnections, or a UAE Creator's failure to maintain a valid trade license.
                        </p>

                        <h3>14.3 Sample License Check</h3>
                        <p>
                            Double-check your trade license verification status. Non-compliance with this section will trigger an immediate freeze of all pending Stripe payouts and a permanent termination of your platform privileges.
                        </p>

                        <h3>14.4 Effects of Termination and Data Purge Protocols</h3>
                        <p>
                            Upon account termination, our automated scripts trigger a deletion sequence that permanently scrubs all uploaded files, generated books, creator store layouts, and scraped metrics from our production databases within a few minutes. Notwithstanding this automated data purge, the Company retains the right to preserve transactional data sets, invoices, payment histories, and metadata logs required by law or Stripe's regulatory compliance frameworks to satisfy tax, accounting, or ongoing legal holds.
                        </p>
                    </section>

                    <section>
                        <h2>15. Comprehensive Warranty Disclaimers</h2>
                        
                        <h3>15.1 "As-Is" and "As-Available" Foundations</h3>
                        <p>
                            <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPILATION OF SERVICES, SOFTWARE INTERFACES, DATA ASSETS, AND AI CHANNELS PROVIDED BY THE COMPANY ARE DELIVERED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS, IMPLIED, OR STATUTORY.</strong>
                        </p>

                        <h3>15.2 Structural Disclaimer of Warranties</h3>
                        <p>
                            <strong>THE COMPANY EXPLICITLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ACCURACY. THE COMPANY DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, ENTIRELY ERROR-FREE, OR FREE OF MALICIOUS CODE. WE MAKE NO REPRESENTATIONS REGARDING THE REVENUE, ENGAGEMENT, OR SUCCESS YOU WILL ACHIEVE USING THE PLATFORM.</strong>
                        </p>
                    </section>

                    <section>
                        <h2>16. Indemnification Firewall</h2>
                        <p>
                            You agree to defend, indemnify, and hold harmless the Company, its parent entities, subsidiaries, officers, directors, software developers, and agents from and against any third-party claims, liabilities, financial losses, damages, costs, or legal fees arising out of or related to your misuse of the platform, intellectual property or privacy infringement associated with your creator store, transactional buyer disputes, violation of applicable laws, or a UAE Creator's failure to maintain a valid trade license.
                        </p>
                    </section>

                    <section>
                        <h2>17. Limitation of Liability</h2>
                        
                        <h3>17.1 Exclusion of Consequential and Indirect Damages</h3>
                        <p>
                            <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE COMPANY, ITS FOUNDERS, OR DEVELOPERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF DATA, LOSS OF BUSINESS OPPORTUNITIES, REPUTATIONAL DAMAGE, OR THE COSTS OF PROCUREMENT OF SUBSTITUTE GOODS, REGARDLESS OF THE LEGAL THEORY OF LIABILITY.</strong>
                        </p>

                        <h3>17.2 Definitive Liability Cap</h3>
                        <p>
                            <strong>THE TOTAL AGGREGATE LIABILITY OF THE COMPANY FOR ALL CLAIMS, DISPUTES, OR ACTIONS ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT SHALL BE STRICTLY LIMITED TO THE GREATER OF: (A) ONE HUNDRED UNITED STATES DOLLARS (USD $100), OR (B) THE TOTAL SUBSCRIPTION FEES PAID BY YOU TO THE COMPANY IN THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE ACCRUAL OF THE CAUSE OF ACTION.</strong>
                        </p>
                    </section>

                    <section>
                        <h2>18. Mandatory Informal Dispute Resolution and Governing Law</h2>
                        
                        <h3>18.1 Mandatory Informal Negotiation Framework</h3>
                        <p>
                            Prior to initiating any formal legal actions or court filings, both parties agree to make a good-faith effort to resolve the dispute through informal negotiations for a mandatory period of thirty (30) days from the initial written receipt of a dispute notice.
                        </p>

                        <h3>18.2 Governing Law and Choice of Forum</h3>
                        <p>
                            This Agreement, its interpretation, and any disputes arising out of its subject matter shall be governed exclusively by the federal laws of the United Arab Emirates and the local laws of the Emirate of Dubai. <strong>BOTH PARTIES AGREE THAT ANY LEGAL ACTION, LITIGATION, OR FORMAL PROCEEDING MUST BE BROUGHT EXCLUSIVELY BEFORE THE COURTS OF DUBAI, UNITED ARAB EMIRATES.</strong>
                        </p>

                        <h3>18.3 Language and Class Action Waiver</h3>
                        <p>
                            All negotiations, filings, disclosures, and formal court proceedings must be conducted entirely in the English language. <strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOU EXPLICITLY WAIVE THE RIGHT TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS ACTION LITIGATION OR CONSOLIDATED COURT PROCEEDING AGAINST THE COMPANY.</strong>
                        </p>
                    </section>

                    <section>
                        <h2>19. Changes to Interface and Agreement Terms</h2>
                        <p>
                            The Company reserves the right to modify, adjust, or completely rewrite these Terms of Service at any time at its sole discretion. When material changes are made, we will update the metadata markers at the top of this document and notify active Creators via email or a prominent layout dashboard banner. Continued use of the platform constitutes acknowledgment and acceptance of the updated terms.
                        </p>
                    </section>

                    <section>
                        <h2>20. General Provisions</h2>
                        <p>
                            This Agreement, alongside the integrated Privacy Policy, constitutes the entire agreement between the parties, superseding all prior oral or written representations. If any provision is held illegal or unenforceable, the remaining parameters shall remain in full force. The Company shall not be liable for non-performance caused by Force Majeure events (e.g., cloud hosting provider drops). The parties operate strictly as independent contractors.
                        </p>
                    </section>

                    <section>
                        <h2>21. Legal Contact Details & Notice Procedures</h2>
                        <p>
                            All formal legal notices, takedown demands, or compliance communications directed to the Company must be sent electronically to: <a href="mailto:help@creatorsblueprint.io">help@creatorsblueprint.io</a>.
                        </p>
                    </section>

                </div>

            </div>
        </div>
    );
}

export default Terms;