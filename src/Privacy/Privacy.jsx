import styles from "./Privacy.module.css";

function Privacy() {
    return (
        <div className={styles.privacyContainer}>
            <div className={styles.privacyContent}>
                
                {/* Header Section */}
                <div className={styles.header}>
                    <i className="ri-shield-keyhole-line"></i>
                    <h1>Privacy <span>Policy</span></h1>
                    <p className={styles.subtitle}>CB Studio SaaS Platform</p>
                </div>

                {/* Metadata Card */}
                <div className={styles.metaCard}>
                    <div className={styles.metaGrid}>
                        <div><strong>Corporate Legal Entity:</strong> Creator Blueprint FZ-LLC</div>
                        <div><strong>Effective Date:</strong> June 1st, 2026</div>
                        <div><strong>Incorporation Domicile:</strong> Ras Al Khaimah Economic Zone (RAKEZ), UAE</div>
                        <div><strong>Last Updated Date:</strong> June 1st, 2026</div>
                        <div><strong>Document Version:</strong> 1.0 (Official Launch Edition)</div>
                        <div><strong>Primary Intake Endpoint:</strong> <a href="mailto:help@creatorsblueprint.io">help@creatorsblueprint.io</a></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className={styles.legalBody}>
                    
                    <section>
                        <h2>1. Introduction, Scope, and Legal Roles</h2>
                        
                        <h3>1.1 Purpose</h3>
                        <p>
                            Creator Blueprint FZ-LLC, a free zone limited liability company established under the rules and regulations of the Ras Al Khaimah Economic Zone (RAKEZ), United Arab Emirates, operating under the commercial product name <strong>"CB Studio"</strong> (hereinafter referred to as <strong>"the Company"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>), values the privacy, digital integrity, and data protection rights of our users. This Privacy Policy (the <strong>"Policy"</strong>) is a comprehensive disclosures document detailing how we collect, process, secure, transfer, and retain personal data when individuals interact with our SaaS web application, enterprise ebook generation interfaces, hosted creator store layouts, affiliate program networks, and associated web domains located at or linked to creatorsblueprint.io (collectively, the <strong>"Services"</strong>).
                        </p>

                        <h3>1.2 Scope of Application</h3>
                        <p>
                            This Policy ensures compliance with global privacy regulations, including the UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (UAE PDPL), the EU General Data Protection Regulation (Regulation (EU) 2016/679) (GDPR), the United Kingdom General Data Protection Regulation (UK GDPR), and the California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020 (CCPA/CPRA). This Policy applies strictly to all natural persons who interact with our Services, including:
                        </p>
                        <ul>
                            <li><strong>"Creators / Users":</strong> Digital influencers, content creators, and account holders who register an account with CB Studio to build, design, host, and sell digital assets.</li>
                            <li><strong>"Affiliates":</strong> Participants in our integrated marketing and commission-tracking ecosystem powered by Refgrow.</li>
                            <li><strong>"End-Buyers":</strong> Consumers who access, view, or execute commercial transactions on any Creator Store hosted on infrastructure deployed by the Company.</li>
                            <li><strong>"Visitors":</strong> Unauthenticated web traffic participants navigating our main domain interfaces.</li>
                        </ul>

                        <h3>1.3 Identification of Legal Status: Controller vs. Processor</h3>
                        <p>
                            Understanding our structural legal capacity under global data protection laws is critical:
                        </p>
                        <ul>
                            <li><strong>CB Studio as a Data Controller:</strong> The Company acts as a Data Controller for all personal data collected directly to set up accounts, manage billing tiers, execute direct promotional campaigns, track platform security parameters, and monitor core cloud infrastructure performance.</li>
                            <li><strong>CB Studio as a Data Processor:</strong> When a Creator utilizes our platform infrastructure to host a creator store, customize sales links, collect buyer emails, or distribute digital assets to End-Buyers, the Creator acts as the Data Controller. The Company processes that End-Buyer personal data strictly as a Data Processor, acting under the direct contractual instruction and mandate of the Creator as set out in our Terms of Service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>2. Legal Definitions</h2>
                        <p>
                            For the purpose of clarity and interpretation within this Policy, the following terms shall have the designated meaning below:
                        </p>
                        <ul>
                            <li><strong>"Personal Data"</strong> (or <strong>"Personal Information"</strong> under CCPA/CPRA) means any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier, or factors specific to physical, physiological, genetic, mental, economic, cultural, or social identity.</li>
                            <li><strong>"Processing"</strong> means any operation or set of operations performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure, or destruction.</li>
                            <li><strong>"Data Controller"</strong> means the natural or legal person, public authority, agency, or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data.</li>
                            <li><strong>"Data Processor"</strong> means a natural or legal person, public authority, agency, or other body which processes personal data on behalf of the Data Controller.</li>
                            <li><strong>"Subprocessor"</strong> means an external third-party infrastructure provider, API integration vendor, or auxiliary service provider engaged by CB Studio to assist in executing processing tasks under strict data management mandates.</li>
                            <li><strong>"AI Services"</strong> means the integrated large language model (LLM) and automated machine learning compilation tools provided via enterprise application programming interfaces (APIs) by OpenAI, LLC, Nano Banana Pro, and Templated.io.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Information We Collect & Processing Categories</h2>
                        <p>
                            We collect minimal, targeted, and operationally necessary Personal Data. We strictly prohibit the collection of sensitive categories of personal data (e.g., biometric markers, medical files, race, religion, sexual orientation, or physical government identification cards).
                        </p>

                        <div className={styles.infoBox}>
                            <h4>Data Ingestion Architecture</h4>
                            <p>
                                <strong>Direct Submissions</strong> &rarr; Identifiers, Accounts, Uploaded Raw Media Assets <br />
                                <strong>Automated Scrapes</strong> &rarr; Apify Pipeline &rarr; Public Instagram Content <br />
                                <strong>Automated Logging</strong> &rarr; Infrastructure Telemetry, Secure JWT Session States <br />
                                <strong>Creator Store Actions</strong> &rarr; Buyer Marketing Consent, Stripe Metadata Tokens
                            </p>
                        </div>

                        <h3>3.1 Personal Identifiers and Account Records (Provided Directly)</h3>
                        <ul>
                            <li><strong>Account Registration Data:</strong> Full legal name, verified electronic mail address, date of birth (collected to enforce age eligibility rules), and encrypted/hashed password credentials.</li>
                            <li><strong>Social Authentication Inputs:</strong> Secure cryptographic tokens passed via Google OAuth or NextAuth protocols when initiating login sequences.</li>
                            <li><strong>Social Handles:</strong> Public identification markers on external networks, including Instagram and TikTok handles.</li>
                            <li><strong>Payment Infrastructure References:</strong> Internal Stripe customer identifiers, unique Stripe Connect account tokens, subscription tier codes, and subscription expiration trackers. <em>We explicitly do not collect, view, or retain raw payment card primary account numbers (PAN), CVV security codes, or banking credentials; all payment transactions are handled directly through isolated frameworks managed by Stripe.</em></li>
                        </ul>

                        <h3>3.2 Automated Public Social Media Extraction (Apify Ingestion Pipeline)</h3>
                        <p>
                            To simplify profile setups and automate Creator store creation, the platform runs an automated extraction sequence using Apify. When a Creator explicitly inputs their handle and consents to account validation, our system extracts and stores:
                        </p>
                        <ul>
                            <li>The public Instagram display name and biographical text string.</li>
                            <li>Public follower count and following metrics.</li>
                            <li>The underlying hosting URL of the user’s public Instagram profile picture asset.</li>
                        </ul>
                        <p>
                            <em>Note: Our extraction modules do not scrape private accounts, direct message logs, image tags, captions, or underlying metadata fields. This data is only stored while the user's account is active and is deleted immediately upon account deletion.</em>
                        </p>

                        <h3>3.3 User-Generated Content and Media Payloads</h3>
                        <p>
                            We ingest and process raw data structures, content, and files uploaded directly by users to populate their SaaS dashboard or feed the AI pipeline:
                        </p>
                        <ul>
                            <li>Uploaded source images, illustrations, and digital cover drafts.</li>
                            <li>Uploaded text passages, research documents, outline definitions, and reference PDFs.</li>
                            <li>Custom external links, product recommendations, and affiliate redirect markers.</li>
                            <li>Completed AI-generated ebooks, structured text layouts, formatting instructions, and compiled digital cover graphics.</li>
                        </ul>

                        <h3>3.4 Technical Data and Micro-Telemetry (Automated Collection)</h3>
                        <p>
                            To ensure system performance, data integrity, and fraud prevention, our system generates and records minimal technical metrics:
                        </p>
                        <ul>
                            <li>Secure HTTP-only, encrypted Javascript Web Tokens (JWT) deployed through NextAuth to maintain authenticated session states.</li>
                            <li>Essential platform cookies necessary to authenticate system entry points.</li>
                            <li>Anonymized routing data, internal performance logs, system error logs, and transactional performance metadata.</li>
                            <li>Anti-fraud telemetry strings and device tracking signatures deployed on Stripe-hosted checkout fields.</li>
                        </ul>

                        <h3>3.5 Affiliate Network Data</h3>
                        <p>
                            When an Affiliate joins our network via the integrated Refgrow program, we collect:
                        </p>
                        <ul>
                            <li>The affiliate’s verified email address linked to their master account profile.</li>
                            <li>Unique conversion tracking metrics, referral identifiers, and financial commission ledger balances.</li>
                        </ul>

                        <h3>3.6 End-Buyer Information</h3>
                        <p>
                            When a consumer completes an asset purchase on a Creator Store hosted on our system, we collect:
                        </p>
                        <ul>
                            <li>The End-Buyer’s email address, <strong>strictly</strong> if the End-Buyer provides explicit, opt-in consent to receive promotional materials from that specific Creator.</li>
                        </ul>

                        <h3>3.7 Product Analytics and Session Recording</h3>
                        <p>
                            We use PostHog, a third-party analytics and product evaluation service, to help us understand how users engage with our platform, troubleshoot issues, and improve our product.
                        </p>
                        <p>
                            Through PostHog, we may collect and process information such as:
                        </p>
                        <ul>
                            <li><strong>Device and Network Information:</strong> Your IP address, device type, operating system, and browser type.</li>
                            <li><strong>Usage Data:</strong> Pages visited, buttons clicked, navigation paths, and time spent on specific features.</li>
                            <li><strong>Session Recordings:</strong> We may record user sessions to identify technical bugs and understand user behavior to enhance the overall experience. We configure these recordings to automatically mask sensitive information (such as passwords and payment details) before it is captured.</li>
                        </ul>
                        <p>
                            PostHog acts as our data processor and handles this information strictly in accordance with our instructions to provide their services to us. For more detailed information on how PostHog handles data, you can review the <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">PostHog Privacy Policy</a>.
                        </p>
                    </section>

                    <section>
                        <h2>4. How We Collect Information</h2>
                        <p>
                            The Company utilizes specific, transparent technical methods to ingest personal data into our private Google Cloud Platform infrastructure:
                        </p>
                        <ul>
                            <li><strong>Direct Ingestion UI Forms:</strong> Data typed directly into the application during administrative onboarding, checkout forms, and user setting interfaces.</li>
                            <li><strong>Automated Cross-Platform API Web Scrapes:</strong> Targeted programmatic extraction queries executed against public profiles using the Apify automated extraction node.</li>
                            <li><strong>Cloud Run Infrastructure Ingestion Logging:</strong> Server-side generation of access timestamps, network logging, and internal performance arrays.</li>
                            <li><strong>Integrated JavaScript Trackers (Refgrow Script):</strong> A first-party tracking asset embedded within the global layout engine (<code>layout.js</code>) to parse browser URL query parameters and match referral attributes for our affiliate commission program.</li>
                            <li><strong>Secure External Redirect Interfaces:</strong> Dynamic redirection away from our core application domain to enterprise-managed, secure external pages hosted by Stripe (Stripe Checkout and Stripe Customer Portal). These pages load external anti-fraud variables and system tracking profiles under Stripe’s independent privacy control frameworks.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Detailed Purposes of Data Processing</h2>
                        <p>
                            CB Studio processes personal data strictly for defined commercial reasons. Processing activities are limited to the following operations:
                        </p>
                        <ul>
                            <li><strong>SaaS Application Delivery:</strong> Provisioning account environments, activating dashboard variables, and maintaining core SaaS availability.</li>
                            <li><strong>Automated Content Generation Pipeline:</strong> Processing text inputs and media attachments through automated design templates and large language model APIs to compile books and covers.</li>
                            <li><strong>Creator Store Hosting and Commercial Infrastructure:</strong> Providing public-facing web presentation layers for creators to sell digital products to End-Buyers.</li>
                            <li><strong>Payment Gateway Interlocking:</strong> Linking vendor payouts and routing customer fees through Stripe and Stripe Connect systems.</li>
                            <li><strong>System Integrity and Fraud Prevention:</strong> Identifying unauthorized logins, tracking duplicate accounts, blocking malicious script injections, and monitoring system security.</li>
                            <li><strong>Technical Customer Support:</strong> Responding to troubleshooting inquiries, debugging structural errors, and managing platform tickets.</li>
                            <li><strong>Affiliate Compensation Management:</strong> Ensuring accurate attribution, calculations, and performance records for internal affiliate networks.</li>
                            <li><strong>Statutory Compliance Maintenance:</strong> Retaining necessary tax invoices, financial transaction logs, corporate records, and accounting audits required under UAE financial regulations and AML laws.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. System Compliance Cookie Disclosure</h2>
                        <p>
                            The platform deliberately avoids complex behavioral ad trackers, retargeting pixels, and third-party user recording programs. We utilize only essential and structural cookies, detailed below:
                        </p>

                        <div className={styles.tableWrapper}>
                            <table className={styles.cookieTable}>
                                <thead>
                                    <tr>
                                        <th>Cookie Identifier</th>
                                        <th>Origin Domain</th>
                                        <th>Function & Structural Purpose</th>
                                        <th>Classification & Lifetime</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>__Secure-NextAuth.session-token</code></td>
                                        <td>creatorsblueprint.io</td>
                                        <td>Stores an encrypted, server-side JWT session state to maintain a secure user login session.</td>
                                        <td>Essential / HTTP-Only / Session Locked</td>
                                    </tr>
                                    <tr>
                                        <td><code>Refgrow Affiliate Identifier</code></td>
                                        <td>creatorsblueprint.io</td>
                                        <td>Deploys localized parameters to match referral IDs and allocate accurate affiliate commissions.</td>
                                        <td>Functional / First-Party / Persistent</td>
                                    </tr>
                                    <tr>
                                        <td><code>Stripe Security Vectors</code> (e.g., <code>__stripe_mid</code>, <code>__stripe_sid</code>)</td>
                                        <td>.stripe.com</td>
                                        <td>Deployed on Stripe-hosted forms to process fraud evaluations and confirm device integrity during checkout.</td>
                                        <td>Essential / Third-Party / Persistent & Session</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>Cookie Management & Opt-Out Mechanisms</h4>
                        <p>
                            Because our cookies are strictly limited to technical functionality and fraud mitigation, disabling these parameters will disrupt the platform’s security features and prevent the application from loading or executing checkout steps. Users can clear or block cookies directly via their individual browser configurations (e.g., Chrome Settings &gt; Privacy and Security), but doing so will log them out of the platform and disable core application workflows.
                        </p>
                    </section>

                    <section>
                        <h2>7. AI Data Governance & Interaction Disclosures</h2>
                        
                        <h3>7.1 Data Transmission Boundaries</h3>
                        <p>
                            Our automated digital product generation capabilities are powered by integrated APIs provided by OpenAI, LLC, Nano Banana Pro, and Templated.io. When a Creator uses these tools, raw text strings and media assets are passed programmatically through a secure API interface to these AI providers.
                        </p>

                        <h3>7.2 Core Protection Safeguards & Non-Training Mandate</h3>
                        <p>
                            The Company maintains enterprise-grade terms with all integrated AI providers. We explicitly confirm that:
                        </p>
                        <ul>
                            <li><strong>No Model Training:</strong> Personal Data, raw user content, outlines, uploaded PDFs, and images passed to our AI providers are <strong>never</strong> used to train public or proprietary machine learning models.</li>
                            <li><strong>Zero-Retention Policies:</strong> AI Subprocessors ingest payload strings strictly to generate requested text outputs, cover graphics, and style sheets. They do not store or retain data payloads beyond processing windows.</li>
                            <li><strong>Backend System Prompt Isolation:</strong> All foundational instructions and core formatting rules are maintained as private system prompts on our backend cloud configuration. Users have no access to alter or inspect these prompts, and no user data is exposed via public prompting screens.</li>
                        </ul>

                        <h3>7.3 Accuracy and Hallucination Limitations</h3>
                        <p>
                            Our systems use advanced machine learning architectures, but AI-Generated Outputs can contain factual errors, structural inconsistencies, and hallucinations. Creators retain sole responsibility to review, check, edit, and verify all generated content before selling it on their hosted creator stores. The Company makes no warranties regarding the originality or legal accuracy of AI-generated content.
                        </p>
                    </section>

                    <section>
                        <h2>8. International Data Transfers & Cross-Border Safeguards</h2>
                        
                        <h3>8.1 Data Storage Geography</h3>
                        <p>
                            Creator Blueprint FZ-LLC operates primarily within the United Arab Emirates. However, our digital infrastructure is built on Google Cloud Platform (GCP) Cloud Run services, secure storage buckets, and SQL databases located in international data centers, predominantly within the United States and various European cloud zones.
                        </p>

                        <h3>8.2 Legally Compliant Transfer Mechanisms</h3>
                        <p>
                            When Personal Data is transferred from the UAE, European Economic Area (EEA), or United Kingdom to countries that lack adequacy rulings, the Company implements appropriate cross-border protection agreements:
                        </p>
                        <ul>
                            <li><strong>Standard Contractual Clauses (SCCs):</strong> We incorporate the European Commission’s Standard Contractual Clauses and the UK International Data Transfer Addendum into our contracts with core infrastructure processors (such as Google and OpenAI). This binds international entities to strict European privacy and security principles.</li>
                            <li><strong>UAE PDPL Cross-Border Frameworks:</strong> In compliance with Articles 22 and 23 of the UAE PDPL, transfers out of the Emirates are restricted to jurisdictions with robust data protection laws or are governed by strict confidentiality and data-sharing agreements that safeguard data subject rights.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>9. Data Retention, Lifecycle Map, and Purge Protocols</h2>
                        
                        <h3>9.1 The Operational Purge Principle</h3>
                        <p>
                            The Company follows strict data minimization principles. We retain operational personal data only while a Creator's account remains active.
                        </p>

                        <h3>9.2 Complete Account Deletion Execution</h3>
                        <p>
                            When a Creator initiates an account deletion via their account settings dashboard, our automated system starts a deletion script that targets the user's records. All uploaded images, reference PDFs, custom text blocks, scraped profile information, active creator store profiles, and AI-generated outputs are permanently purged from our active databases within a few minutes.
                        </p>

                        <h3>9.3 Legal and Financial Records Retention Exceptions</h3>
                        <p>
                            Notwithstanding our operational deletion protocols, certain data categories must be retained to meet statutory obligations. The Company splits and isolates historical transactional data to satisfy these rules:
                        </p>

                        <div className={styles.infoBox}>
                            <h4>Account Deletion Retention Split</h4>
                            <p>
                                <strong>Account Deletion Triggers</strong> &rarr; Operational Assets Purge (Within minutes: Uploaded PDFs, Images, Scraped Social Profiles, AI Books)<br />
                                <strong>Regulatory Archive Isolation (Stored securely)</strong> &rarr; Invoices, Tax Ledgers, Stripe Connect Tokens (5-7 Years)
                            </p>
                        </div>

                        <p>
                            Pursuant to UAE federal tax and accounting laws, corporate governance regulations, and Stripe's regulatory anti-money laundering compliance framework, official payment ledger entries, tax receipts, transactional histories, Stripe billing tokens, invoice associations, and unique Stripe Connect identity tokens are archived in a secure location separate from everyday marketing systems. These records are retained for a minimum of five (5) to seven (7) years to satisfy legal holds, corporate audits, and tax obligations, after which they are permanently deleted.
                        </p>
                    </section>

                    <section>
                        <h2>10. System Security Architecture & Safeguards</h2>
                        <p>
                            The Company implements modern technical and organizational measures to safeguard personal data. However, no internet-based software transmission or cloud database environment is completely secure. We provide the following security framework:
                        </p>
                        <ul>
                            <li><strong>Data Encryption in Transit:</strong> All web connections to our domains and API calls use modern Transport Layer Security (TLS 1.2/1.3) cryptographic protocols to prevent data interception.</li>
                            <li><strong>Data Encryption at Rest:</strong> All personal data tables, compiled ebooks, and uploaded materials are stored within Google Cloud Platform environments using AES-256 standard encryption keys.</li>
                            <li><strong>Role-Based Data Access Controls:</strong> Access to production infrastructure and live databases is strictly restricted to our Core Founders and Lead Developers. Access requires multi-factor authentication and is monitored via automated audit logs.</li>
                            <li><strong>System Integrity Monitoring:</strong> Continuous automated scanning and internal code checks are performed to detect system vulnerabilities and block injection threats.</li>
                            <li><strong>Incident Response Framework:</strong> We maintain an incident response plan to quickly identify, isolate, and address potential data security issues. If a data breach occurs that risks user rights, we will notify affected individuals and relevant regulatory authorities within statutory timelines.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>11. Global User Rights: Detailed Regulatory Matrix</h2>
                        
                        <h3>11.1 European Union and United Kingdom Data Subject Rights (GDPR / UK GDPR)</h3>
                        <p>
                            Double-check your eligibility status. Individuals within the EEA or UK possess the following statutory rights under Article 15-22 of the GDPR:
                        </p>
                        <ul>
                            <li><strong>Right of Access (Art. 15):</strong> The right to obtain confirmation as to whether your personal data is being processed and to receive an exported copy of your data file.</li>
                            <li><strong>Right to Rectification (Art. 16):</strong> The right to demand the immediate correction of inaccurate or incomplete personal data records.</li>
                            <li><strong>Right to Erasure / "Right to be Forgotten" (Art. 17):</strong> The right to request the complete deletion of your personal data when it is no longer required for the purposes for which it was collected.</li>
                            <li><strong>Right to Restriction of Processing (Art. 18):</strong> The right to temporarily freeze data processing during accuracy reviews or legal disputes.</li>
                            <li><strong>Right to Data Portability (Art. 20):</strong> The right to receive your personal data in a structured, commonly used, and machine-readable format.</li>
                            <li><strong>Right to Object (Art. 21):</strong> The right to object to data processing based on legitimate interests or direct marketing activities.</li>
                            <li><strong>Right to Withdraw Consent (Art. 7(3)):</strong> The right to withdraw consent at any time for processing activities that rely on your prior approval.</li>
                            <li><strong>Right to Lodge a Complaint (Art. 77):</strong> The right to file a formal complaint regarding our data handling with an approved European Supervisory Authority.</li>
                        </ul>

                        <h3>11.2 United Arab Emirates Personal Data Protection Rights (UAE PDPL)</h3>
                        <p>
                            In accordance with the UAE PDPL, domestic users have specific rights regarding their personal data:
                        </p>
                        <ul>
                            <li><strong>Right to Access Information:</strong> Access your data file and view the purposes, categories, and international destinations of your processed information.</li>
                            <li><strong>Right to Request Data Cessation or Deletion:</strong> Request the complete erasure of your data when processing purposes conclude or consent is revoked.</li>
                            <li><strong>Right to Data Correction:</strong> Request amendments to any out-of-date or inaccurate records held in our databases.</li>
                            <li><strong>Right to Stop Automated Processing:</strong> Object to decisions based solely on automated processing or profiling that significantly affect your legal status.</li>
                        </ul>

                        <h3>11.3 California Consumer Privacy Rights (CCPA / CPRA)</h3>
                        <p>
                            California residents are granted specific protections under the CCPA, as amended by the CPRA:
                        </p>
                        <ul>
                            <li><strong>Right to Know:</strong> Request disclosures regarding the categories of personal information collected, the business purposes for collection, the sources of ingestion, and the specific third parties with whom the information is shared.</li>
                            <li><strong>Right to Delete:</strong> Request the deletion of personal information collected from you, subject to statutory exemptions.</li>
                            <li><strong>Right to Correct:</strong> Request the correction of inaccurate personal data held by the Company.</li>
                            <li><strong>Right to Opt-Out of Sale or Sharing:</strong> The Company explicitly states that we do not sell personal data to third parties, nor do we share data for cross-context behavioral advertising. We do not engage in activities that constitute a "sale" or "sharing" under California law.</li>
                            <li><strong>Right to Non-Discrimination:</strong> The Company will not discriminate against any individual for exercising their statutory privacy rights. We will not deny services, modify pricing tiers, or degrade performance if you exercise your rights.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>12. Marketing & Promotional Disclosures</h2>
                        <p>
                            The Company may send promotional emails, system updates, market insights, or product announcements to registered Creators who opt-in to receive marketing materials. These activities strictly comply with CAN-SPAM and CASL regulations. Users can opt-out of promotional lists at any time by clicking the "Unsubscribe" link at the bottom of any marketing email or by emailing <a href="mailto:help@creatorsblueprint.io">help@creatorsblueprint.io</a>.
                        </p>
                        <p>
                            <strong>Independent Creator Store Direct Marketing Disclaimer:</strong> When an End-Buyer opts-in to receive promotional content on a hosted Creator Store, that consent is granted directly to the individual Creator. The Creator manages their own independent marketing lists. CB Studio is not responsible for marketing communications sent by Creators using data collected through the platform. End-Buyers must exercise their opt-out and deletion rights directly with the relevant Creator.
                        </p>
                    </section>

                    <section>
                        <h2>13. Data Clearance and Validation Request Protocols</h2>
                        <p>
                            To exercise any statutory privacy rights (including access, correction, or deletion requests), you must submit a formal request to our universal privacy intake endpoint: <a href="mailto:help@creatorsblueprint.io">help@creatorsblueprint.io</a>.
                        </p>
                        <p>
                            To safeguard user data and prevent fraud, we do not process unverified requests. Requesters must provide submission from the exact electronic mail address associated with the active account in question, verification of the linked public Instagram handle used during onboarding, and confirmation of recent Stripe transaction codes or subscription tier markers where applicable.
                        </p>
                        <p>
                            We will respond to verified GDPR, UK GDPR, and UAE PDPL requests within thirty (30) days of receipt. We will fulfill verified CCPA/CPRA requests within forty-five (45) days of receipt.
                        </p>
                    </section>

                    <section>
                        <h2>14. Exclusions & Integration Disclaimers</h2>
                        <p>
                            Our Services contain links to external web applications and third-party tools. If you click an external link or utilize an external plugin, you exit our platform domain. The Company does not control and is not responsible for the privacy practices, content protections, or security protocols of external third-party sites. Creators who host public creator stores via CB Studio must maintain their own independent terms of service and privacy policies to govern their interactions with End-Buyers.
                        </p>
                    </section>

                    <section>
                        <h2>15. Jurisdictional Amendments & Special Compliance</h2>
                        <p>
                            The platform is designed exclusively for commercial deployment by professional content creators, influencers, and business entities. The Services are not intended for, marketed to, or structured for use by minors under eighteen (18) years of age. We do not knowingly collect personal data from minors. If we discover that an individual under 18 has created an account, we will immediately delete their profile.
                        </p>
                        <p>
                            No corporate extraterritorial legal representative is appointed under GDPR Article 27 for the European Union or United Kingdom regions. International users accessing the application from outside the United Arab Emirates do so at their own volition and are directed to establish all technical and regulatory clearance inquiries directly through our master support intake network at <a href="mailto:help@creatorsblueprint.io">help@creatorsblueprint.io</a>.
                        </p>
                    </section>

                    <section>
                        <h2>16. Revision Monitoring & Notification Methods</h2>
                        <p>
                            The Company reserves the right to update or modify this Privacy Policy at any time to reflect operational changes, technical updates, or amendments to privacy regulations. When a material modification is made, we will update the "Last Updated" and "Effective Date" markers at the top of this policy document and notify active Creators by sending a structural notice to their registered email or by posting a prominent alert banner within the SaaS dashboard interface.
                        </p>
                    </section>

                    <section>
                        <h2>17. Privacy Contact Disclosures</h2>
                        <p>
                            For general privacy inquiries, statutory data requests, or regulatory questions regarding this Policy, please contact our support and compliance team at:
                        </p>
                        <ul>
                            <li><strong>Legal Entity Corporate Name:</strong> Creator Blueprint FZ-LLC</li>
                            <li><strong>Principal Business Registration Address:</strong> FDBC Compass Building, Al Shohada Road, Ras Al Khaimah, United Arab Emirates</li>
                            <li><strong>Primary Technical Ingestion Endpoint:</strong> <a href="mailto:help@creatorsblueprint.io">help@creatorsblueprint.io</a></li>
                        </ul>
                    </section>

                </div>

            </div>
        </div>
    );
}

export default Privacy;