
import styles from './Home.module.css';

function Home(){

    const services = [
        {
            icon: "ri-file-list-3-line",
            title: "Digital Product Creation",
            description: "We turn your knowledge into high-value digital assets like ebooks, guides, and templates that your audience will love."
        },
        {
            icon: "ri-code-s-slash-line",
            title: "Professional Website & Funnels",
            description: "You get a stunning, high-converting website that acts as your 24/7 sales machine, complete with payment integration."
        },
        {
            icon: "ri-money-dollar-circle-line",
            title: "Monetization Strategy",
            description: "We don't just build; we strategize. We create a clear roadmap for your launch and long-term income growth."
        }
    ];


    

    return(
        <>

        <div className={styles.homeContainer}>

            <div className={styles.row1}>
                <div className={styles.title}>
                    <h1>Your Follwers ≠ Income</h1>
                    <p>Lets Fix That.</p>
                </div>

                <div className={styles.desc}>
                    <p>We build <span>done-for-you</span> systems that turn your followers into a reliable income stream through <span>digital Products.</span></p>
                    <div className={styles.buttons}>
                        <button>Get Started <i className="ri-arrow-right-double-line"></i></button>
                        <button>Book Free Consultation <i class="ri-phone-line"></i></button>

                    </div>
                    
                </div>

                <div className={styles.servicesContainer}>
                    {services.map((s, index)=>(
                        <div className={styles.service} key={index}>
                            <div className={styles.content}>
                                <div className={styles.icon}>
                                    <i className={s.icon}></i>
                                </div>
                                <div className={styles.title}>
                                    <h1>{s.title}</h1>
                                </div>

                                <div className={styles.desc}>
                                    <p>{s.description}</p>
                                </div>

                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.row2}>

                <div className={styles.title}>
                    <h1>Your Plan, Done-for-You</h1>
                    <p>Manage, track, and optimize your digital assets with a plan built for your needs.</p>
                </div>

                <div className={styles.paymentPlanContainer}>
                    <div className={styles.header}>
                        <div className={styles.title2}>
                            <h1>Done-For-You</h1>
                            <p>Your full system to grow, scale, and earn more — faster.</p>

                        </div>

                        <div className={styles.highlight}>
                            <p>Best Choice</p>

                        </div>
                        
                        
                    </div>

                    <div className={styles.desc}>
                        <div className={styles.title3}>
                            <h1>What's Included:</h1>
                        </div>

                        <div className={styles.content}>
                            <div className={styles.item}>
                                <i className="ri-check-line"></i>
                                <p>Premium, Detailed Website (Multiple Tabs, Unlimited Edits)</p>
                            </div>
                            
                            <div className={styles.item}>
                                <i className="ri-check-line"></i>
                                <p>Payment Gateway Setup (PayPal / Stripe)</p>
                            </div>
                            <div className={styles.item}>
                                <i className="ri-check-line"></i>
                                <p>Unlimited Digital Products (Ebooks, Templates, Courses)</p>
                            </div>
                            <div className={styles.item}>
                                <i className="ri-check-line"></i>
                                <p>Complete Monetization Strategy</p>
                            </div>
                            <div className={styles.item}>
                                <i className="ri-check-line"></i>
                                <p>Monthly 1-on-1 Strategy Calls</p>
                            </div>
                            <div className={styles.item}>
                                <i className="ri-check-line"></i>
                                <p>Ongoing Launch Support</p>
                            </div>
                            <div className={styles.item}>
                                <i className="ri-check-line"></i>
                                <p>Domain Included (Setup + Connection)</p>
                            </div>
                            
                        </div>

                        
                    </div>
                    <div className={styles.perfect}>
                        <p>Perfect for: Creators who want to scale their income with a complete, professional system.</p>
                    </div>
                    <div className={styles.priceContainer}>
                        <div className={styles.cost}>
                            <h1>$5.99</h1>
                            <p>/per month</p>

                        </div>

                        <div className={styles.billed}>
                            <p>billeld yearly</p>
                        </div>
                    </div>

                    <div className={styles.paymentButton}>
                        <button>Upgrade</button>
                    </div>


                </div>

            </div>

        </div>
        
        </>
    )
}

export default Home