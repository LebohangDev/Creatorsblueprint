
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
    const courses = [
        {
            image: "Images/Course_Images/side-view-woman-with-photo-camera.jpg",
            title: "Learn to Do What We Do",
            description:
                "Instead of hiring us to manage everything for you, this course gives you the insider knowledge and tools to take full control. We’ll walk you through the exact methods, strategies, and systems we use for our done-for-you clients.",
            whatsIncluded: [
                "Website Building – Build a multi-page, professional site with ease.",
                "Payment Setup – Add PayPal, Stripe, and more to accept payments.",
                "Digital Products – Sell ebooks, templates, and courses.",
                "Monetization – Use proven methods to grow recurring revenue.",
                "Strategy Systems – Plan, track, and optimize like a pro.",
                "Launch Guide – Follow a step-by-step roadmap to launch.",
                "Domain Setup – Register and connect your domain hassle-free."
            ],
            price: 599
        }
    ];
    const forYou = [

        {
            icon: "ri-money-dollar-circle-line",
            description: "You’ve built a following but aren't seeing consistent income."
        },
        {
            icon: "ri-briefcase-2-line",
            description: "You’re tired of chasing collaborations that don't pay enough."
        },
        {
            icon: "ri-rocket-2-line",
            description: "You want to turn your expertise into eBooks, templates, or courses and create passive income."
        },
        {
            icon: "ri-flashlight-line",
            description: "You need a simple system, not more complicated strategies."
        },
        {
            icon: "ri-global-line",
            description: "You want a clean, professional brand presence with your own website, products, and payments, fully done for you."
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

                <div className={styles.row2Content}>
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
            <div className={styles.row3}>
                <div className={styles.row3Content}>
                    <div className={styles.title}>
                        <h1>Your Plan, Your Way</h1>
                        <p>Learn to manage, track, and optimize your digital assets yourself, at your own pace.</p>
                    </div>
                    <div className={styles.courseContainer}>

                        {courses.map((c, index) =>(
                            <div className={styles.course} key={index}>
                                <div className={styles.courseIMG}>
                                    <img src={c.image} alt="" />
                                </div>
                                <div className={styles.courseHeader}>
                                    <h1>{c.title}</h1>
                                    <p>{c.description}</p>
                                </div>
                                <div className={styles.included}>
                                    <h1>What's Included:</h1>
                                    {c.whatsIncluded.map((WI, index) =>(
                                        <div className={styles.item} key={index}>
                                            <i class="ri-check-line"></i>
                                            <p>{WI}</p>
                                        </div>
                                    ))}
                                
                                </div>
                                <div className={styles.priceContainer}>
                                
                                    <h1>${c.price}</h1>
                                    <p>One Time Payment</p>
                                

                                </div>

                                <div className={styles.courseButton}>
                                    <button>Purchase</button>
                                </div>

                            </div>
                        ))}

                    
                    </div>

                </div>
                

            </div>

            <div className={styles.row4}>

                <div className={styles.row4Content}>
                    <div className={styles.title}>
                        <h1>Which One’s Right For <span>You?</span></h1>
                    </div>

                    <div className={styles.compareTable}>
                        <table>
                            <tr>
                                <th>Feature</th>
                                <th>Done-For-You</th>
                                <th>Learn to Do What We Do</th>
                            </tr>
                            <tr>
                                <td>Goal</td>
                                <td>Simple start</td>
                                <td>Scale & Grow</td>
                            </tr>
                            <tr>
                                <td>Products</td>
                                <td>1 Product</td>
                                <td>Unlimited Products</td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td>1 Website Built</td>
                                <td>Full Website, Edits Included</td>
                            </tr>
                            <tr>
                                <td>Payments</td>
                                <td>Integrated for You</td>
                                <td>Learn to Set Up PayPal, Stripe, etc.</td>
                            </tr>
                            <tr>
                                <td>Payments</td>
                                <td>Integrated for You</td>
                                <td>Learn to Set Up PayPal, Stripe, etc.</td>
                            </tr>
                            <tr>
                                <td>Monetization</td>
                                <td>We implement the strategy</td>
                                <td>You learn the exact strategies we use</td>
                            </tr>
                            <tr>
                                <td>Support</td>
                                <td>Launch Support</td>
                                <td>Ongoing Monthly Support (with systems & templates)</td>
                            </tr>

                        </table>
                        

                    </div>
                    
                </div>

                

            </div>


            <div className={styles.row5}>
                <div className={styles.row5Content}>
                     <div className={styles.title}>
                        <h1>This is for <span>you</span> If...</h1>
                    </div>

                    <div className={styles.infoCardContainers}>
                        {forYou.map((FY, index) =>(
                            <div className={styles.card} key={index}>
                                <div className={styles.icon}>
                                    <i className={FY.icon}></i>
                                </div>
                                <div className={styles.text}>
                                    <p>{FY.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className={styles.row6}>
                <div className={styles.row6Content}>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardContent}>
                            <h1>Ready to <span>monetize?</span></h1>
                            <p>Let's talk. Schedule a free, no-obligation consultation to discuss how we can build your income streams.</p>
                        </div>
                        <div className={styles.cardButton}>
                            <button>Book Free Consultation <i class="ri-phone-line"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        </>
    )
}

export default Home