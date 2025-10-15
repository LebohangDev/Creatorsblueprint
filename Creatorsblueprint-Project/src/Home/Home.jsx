
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import {loadStripe} from "@stripe/stripe-js";
import {AnimatePresence, motion} from 'framer-motion';

function Home({setNavActive}){

    const [currentIndex, setCurrentIndex] = useState(0)
    const  containerRef = useRef(null);
    const videoRef = useRef(null);
    const scrollMoreRef = useRef('null')

   
    
    

    // interval just updates the index
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(c => (c + 1) % services.length);
    }, 6000);

        return () => clearInterval(interval);
    }, []);




    // scroll whenever currentIndex changes
    useEffect(() => {
        const containerItemRef = containerRef.current.children[currentIndex];
        containerRef.current.scrollTo({
            left: containerItemRef.offsetLeft - containerRef.current.offsetLeft,
            behavior: "smooth",
        });
    }, [currentIndex]);



    useEffect(() =>{
        const container =  document.getElementById('root')
        
        const video = videoRef.current
        const scrollMore = scrollMoreRef.current
        let lastScrollTop = 0;
        const handleScroll = (event) => {

        

        
            if(event.target.scrollTop < lastScrollTop) {
                console.log("scroll top detected on container:", event.target)
                setNavActive(true)


            }
            else if(event.target.scrollTop > lastScrollTop){
                console.log("scroll down detected on container:", event.target)
                scrollMore.style.display='none';
                video.style.opacity=1;
                setNavActive(false)

            }
        
             lastScrollTop = event.target.scrollTop;
            
            
        }

        
  
        
       

        container.addEventListener('scroll', handleScroll)

        return () =>{
            container.removeEventListener('scroll', handleScroll)
        }

    }, []);

    
    


    const services = [
        {
            icon: "ri-file-list-3-line",
            title: "Digital Product Creation",
            description:"We turn your knowledge into high-value digital assets like ebooks, guides, and templates that your audience will love.",
        },
        {
            icon: "ri-code-s-slash-line",
            title: "Professional Website & Funnels",
            description: "You get a stunning, high-converting website that acts as your 24/7 sales machine, complete with payment integration.",
        },
        {
            icon: "ri-money-dollar-circle-line",
            title: "Monetization Strategy",
            description: "We don't just build; we strategize. We create a clear roadmap for your launch and long-term income growth.",
        },
        {
            icon: "ri-community-line",
            title: "Brand & Audience Growth",
            description: "We help you grow an engaged audience through content strategy, storytelling, and consistent branding across platforms.",
        },
        {
            icon: "ri-bar-chart-box-line",
            title: "Analytics & Optimization",
            description: "We track performance, interpret data, and continuously optimize your systems to boost conversions and audience engagement.",
        },
    ];
  
const plans = [
        {
            image: "Images/Course_Images/side-view-woman-with-photo-camera.jpg",
            title: "The Full System Setup",
            description: "Complete done-for-you system to grow and earn effortlessly.",
            highlight: "best Choice",
            included: [
                "Custom Multi-Page Website designed to convert followers into clients.",
                "Tailored Digital Product Creation based on your audience and engagement.",
                "Payment Gateway Integration via PayPal, Stripe, or Ziina.",
                "Auto-Messaging System to handle DMs and sales 24/7.",
                "Full System Setup & Optimization for seamless automation.",
                "15-Day Guarantee — full refund if no sale in first 15 days.",
            ],
            perfectFor: "Creators ready to monetize their audience with a fully automated system.",
            amount: 599.0,
            billingCycle: "paid once",
            billed: "One-Time Payment",
        },
        {
            image: "Images/Course_Images/side-view-woman-with-photo-camera.jpg",
            title: "The Partnership Model",
            description:"We build and launch your system at no upfront cost; revenue is shared.",
            highlight: "Revenue Share — 50/50",
            included: [
                "Multi-Page Website optimized for conversions.",
                "Custom Digital Product or Course tailored to your audience.",
                "Payment Gateway Setup (PayPal / Stripe / Ziina) included.",
                "Full Automation of DMs, sales replies, and follow-ups.",
                "Ongoing Performance Monitoring and Optimization.",
               "Shared Success — we only profit when you do.",
            ],
            perfectFor:"Influencers with engagement but limited startup capital seeking a shared-profit model.",
            amount: 0,
            billingCycle: "revenue share",
            billed: "50/50 Partnership",
        },
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


    /*const stripePromise = loadStripe("pk_test_51SCIvpHkCRMiEDly8nqofxKALnRj4xv6xpyYYiCkuhRcKRsGeHMpwWDaGsZmBLTHePhnTtZjMxNm8QIRsf08W79i00K9J6hY89")

    async function handleCheckout(planChoice){
        const res = await fetch("http://localhost:3000/api/create-checkout-session", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(planChoice),
        });

        const data = await res.json();
        console.log("Session response:", data);

        // redirect to stripe checkout
        const stripe = await stripePromise;
        stripe.redirectToCheckout({ sessionId: data.id})
    }*/


        
        // pass the selected plan from user
    async function handleZinnaPayment(planChoice){
        try{

            const res = await fetch('https://creatorsblueprintbackend.onrender.com/api/create-payment-intent', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(planChoice),
                
            });
            console.log(planChoice);

            const data = await res.json()
            window.location.href = data.redirect_url;
            
            console.log("redirect url:", data.redirect_url)
                       
            

        }catch(e){
            console.error("failed to send request to create payment session for user:", e)
            
                    

        }

                
            
        
    
      
    }

   const isMobile = window.innerWidth < 768;

   

   
    

   



    

    return(
        <>

        <div className={styles.homeContainer}>

            <div className={styles.row1}>
                <div className={styles.title}>
                    <h1>Your Followers <span>≠</span> Income</h1>
                    <p>Lets Fix That.</p>
                </div>
                <div className={styles.titleMobile}>
                    <h1>Creators Blueprint.</h1>
                    <p>TURN FOLLOWERS INTO <span>INCOME</span></p>

                </div>

                <div className={styles.desc}>
                    <p>We build <span>done-for-you</span> systems that turn your followers into a reliable income stream through <span>digital Products.</span></p>
                    <div className={styles.buttons}>
                        <button onClick={(e) => {e.preventDefault(); document.getElementById('payments').scrollIntoView({behavior: "smooth"})}}>Get Started <i className="ri-arrow-right-double-line"></i></button>
                        <button onClick={() => window.open("https://wa.link/creatorsblueprint", "_blank")}>Book Free Consultation <i class="ri-phone-line"></i></button>

                    </div>
                    
                </div>
                
                

               
            </div>
            <motion.div
            initial={{ opacity: 0 }}               // visible on load
            whileInView={{ opacity: 1 }}           // fade out when scrolled past
            viewport={{ once: true, amount: 0.1 }} // only trigger once, as soon as it leaves
            transition={{ duration: 0.8, delay: 1 }}
            ref={scrollMoreRef}
            className={styles.scrollForMore}
            >
                 <p>Scroll</p>
                <i className="ri-arrow-down-circle-fill"></i>


            </motion.div>
           
               
        

            
            <div className={styles.videoContainer} ref={videoRef}>
                
                <video src="Video/Beats.mp4" autoPlay muted loop playsInline controlsList="noDownload noFullscreen noRemoteplayback" disablePictureInPicture ></video>

            </div>
            
               
                
                
                    
            

            

            <div className={styles.row2}>
                 <div className={styles.servicesContainer} id='what' ref={containerRef}>
                    {services.map((s, index)=>(
                        { /*reintilaize currentItemRef based on currentindex and set the others as null because ref will only point to last item in the loop*/},
                        <motion.div
                        key={index}
                        initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: isMobile ? 0 : 0.8 , once: true }}
                        transition={{ delay: index * 0.2,}}
                        className={styles.service}
                        >
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



                        </motion.div>
                      
                    ))}
                </div>
                <div className={styles.paginationContainer}>
                    <div className={styles.backgroundContainer}>
                        {services.map((_, index) => (
                            <span key={index} className={index === currentIndex ? styles.dotActive : styles.dot}></span>
                        
                        ))}

                    </div>
                    
                </div>

                

                

            </div>
            {/*
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
                                    <button onClick={(e) =>{e.preventDefault(); handleCheckout();}}>Purchase</button>
                                </div>

                            </div>
                        ))}

                    
                    </div>

                </div>
                

            </div>
            */}

            <div className={styles.row4}>

                <div className={styles.row4Content} id='payments'>
                    <div className={styles.title}>
                         <motion.div
            
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.4, once: true }}
                        transition={{ delay: 0.3,}}
                       
                        >
                            <h1>Your Plan, Done-for-You</h1>


                        </motion.div>
                         <motion.div
            
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.4, once: true }}
                        transition={{ delay: 0.3,}}
                       
                        >
                            <p>Manage, track, and optimize your digital assets with a plan built for your needs.</p>


                        </motion.div>
                       
                        
                    </div>

                   
                        <div className={styles.paymentPlans}>
                            {plans.map((plan, index) => (
                                
                                    <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ amount: 0.9, once: true }}
                                    transition={{ delay: index * 0.2,}}
                                    className={styles.paymentPlanContainer}
                                    >
                                        <div className={styles.header}>
                                            <div className={styles.title2}>
                                                <h1>{plan.title}</h1>
                                                <p>{plan.description}</p>
                                            </div>
                                        
                                            <div className={styles.highlight}>
                                                <p>{plan.highlight}</p>
                                            </div>
                                        </div>
                                        <div className={styles.desc}>
                                            <div className={styles.title3}>
                                                <h1>What's Included:</h1>
                                            </div>
                                            <div className={styles.content}>
                                                {plan.included.map((item, i) => (
                                                    <div key={i} className={styles.item}>
                                                        <i className="ri-check-line"></i>
                                                        <p>{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    
                                        <div className={styles.perfect}>
                                            <p>Perfect for: {plan.perfectFor}</p>
                                        </div>
                                    
                                        <div className={styles.priceContainer}>
                                        
                                            <div className={styles.cost}>
                                                <h1>${plan.amount}</h1>
                                                <p>/{plan.billingCycle}</p>
                                            </div>
                                        
                                            <div className={styles.billed}>
                                                <p>{plan.billed}</p>
                                            </div>
                                        </div>
                                        <div className={styles.paymentButton}>
                                            <button onClick={(e) => { e.preventDefault(); handleZinnaPayment(plan)}}>Purchase</button>
                                        </div>


                                        
                                    </motion.div>
                                    
                                
                                
                            ))}
                        </div>
                   
                  

                    
                    
                </div>

                

                

            </div>

            
            <div className={styles.row5}>

                <div className={styles.row5Content}>
                    <div className={styles.title}>
                        <h1>Which One’s Right For <span>You?</span></h1>
                    </div>

                    <div className={styles.compareTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>The Full System Setup</th>
                                    <th>The Partnership Model</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Goal</td>
                                    <td>Complete done-for-you system for fast monetization</td>
                                    <td>Launch your system with no upfront cost; revenue is shared</td>
                                </tr>
                                <tr>
                                    <td>Products</td>
                                    <td>Tailored digital product(s) created for your audience</td>
                                    <td>Custom digital product or course based on audience insights</td>
                                </tr>
                                <tr>
                                    <td>Website</td>
                                    <td>Custom multi-page website built & optimized for conversions</td>
                                    <td>Multi-page website designed for conversions</td>
                                </tr>
                                <tr>
                                    <td>Payments</td>
                                    <td>Integrated via PayPal, Stripe, or Ziina</td>
                                    <td>Learn & set up payment gateways (PayPal / Stripe / Ziina)</td>
                                </tr>
                                <tr>
                                    <td>Automation</td>
                                    <td>Auto-messaging system & automated sales follow-ups</td>
                                    <td>Full automation support (DMs, replies, follow-ups)</td>
                                </tr>
                                <tr>
                                    <td>Support</td>
                                    <td>15-Day Guarantee + launch setup support</td>
                                    <td>Ongoing monitoring & optimization; partnership support</td>
                                </tr>
                                <tr>
                                    <td>Cost</td>
                                    <td>$599 One-Time</td>
                                    <td>$0 upfront — 50/50 revenue share</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                
            </div>
            <div className={styles.row6}>
                <div className={styles.row6Content}>
                     <div id='Why_us' className={styles.title}>
                        <h1>This is for <span>you</span> If...</h1>
                    </div>

                    <div className={styles.infoCardContainers}>
                        {forYou.map((FY, index) =>(

                            <motion.div
                            key={index}
                            initial={{ opacity: 0, translateY: -10 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ amount: 0.6, once: true }}
                            transition={{ delay: index * 0.2,}}
                            className={styles.card}
                            
                            >
                                <div className={styles.icon}>
                                    <i className={FY.icon}></i>
                                </div>
                                <div className={styles.text}>
                                    <p>{FY.description}</p>
                                </div>


                            </motion.div>
                           
                                
                            
                        ))}
                    </div>

                </div>
                
            </div>
            <div className={styles.row7}>
                <div className={styles.row7Content}>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardContent}>
                            <h1>Ready to <span>monetize?</span></h1>
                            <p>Let's talk. Schedule a free, no-obligation consultation to discuss how we can build your income streams.</p>
                        </div>
                        <div className={styles.cardButton}>
                            <button onClick={() => window.open("https://wa.link/creatorsblueprint", "_blank")}>Book Free Consultation <i class="ri-phone-line"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        </>
    )
}

export default Home