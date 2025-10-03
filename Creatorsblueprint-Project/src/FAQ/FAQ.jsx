import { useState } from "react";
import styles from "./FAQ.module.css";
import {AnimatePresence, motion} from 'framer-motion';

function FAQ(){
    const [faqIndex, setFaqIndex] = useState(0)

    

    function changeActiveFAQ(index){ 
        setFaqIndex(index)
    }




    const faqItems = [
        {
            "question": "What does Creators Blueprint do?",
            "answer": "We help creators turn followers into paying clients. With our done-for-you system, we set up everything you need to start earning—your website, payment gateway, automated DMs, and your first digital product."
        },
        { 
            "question": "How much does it cost?",
            "answer": "We have a one-time package at $599. This includes everything from building your website to creating and launching your first digital product."
       },
       {
            "question": "Is there a guarantee?",
            "answer": "Yes. If you don’t make at least one sale after launching your system with us, we’ll refund you 100% of your investment."
        },
        {
            "question": "What is included in the $599 package?",
            "answer": [
                "A professional website",
                "DM automation system (auto-replies + lead capture)",
                "Payment gateway setup (PayPal, Ziina, etc.)",
                "One digital product (eBook, guide, or course) created for you",
                "Complete system integration and testing"
            ]
        },
        {
            "question": "Do I need to be tech-savvy to use this?",
            "answer": "Not at all. We do all the heavy lifting for you. Once the system is set up, you just focus on creating content and engaging with your audience."
        },
        {
            "question": "How long does it take to launch?",
            "answer": "On average, 7–10 days from start to finish depending on your niche and how fast you provide the information we need."
        },
        { 
            "question": "Are there any extra costs?",
            "answer": "Yes, but only once you start making money:\n• Domain, hosting, and website tracking = $50/month\nThis ensures your system stays live, updated, and optimized.\n⚡️ If you don’t profit, you don’t pay the monthly fee."
        },
        {
            "question": "Who is this for?",
            "answer": "Creators, influencers, coaches, and entrepreneurs who have an audience but aren’t monetizing it properly."
        },
        {
            "question": "How do I know which product to sell?",
            "answer": "Creators Blueprint will analyze your account—your analytics, niche, and the value you already provide to your audience. Based on this, we’ll tailor a digital product (eBook, e-course, or template) that aligns with your strengths and ensures your followers see it as irresistible."
        },
        {
            "question": "How is this different from me doing it myself?",
            "answer": "Doing it alone would require:\n• Learning web design\n• Buying software & tools separately\n• Figuring out payment + automation systems\nThis could take weeks of work and hundreds of dollars more. With us, it’s all done-for-you in one package."
        },
        {
            "question": "What happens if I need support later?",
            "answer": "We don’t just leave you after setup. Our $50/month plan covers not only hosting and analytics but also ongoing support and maintenance, so your system keeps running smoothly."
        }
    ]


    
    return(
        <>

        <div className={styles.faqContainer}>
            <div className={styles.title}>
                
                <h1>Frequently Asked <span>Questions</span></h1>
                <p>These are the most commonly asked questions about Creatorsblueprint. Cant Find What you’re looking for? <span>Chat to our friendly team!</span></p>
            </div>
            <div className={styles.FAQS}>
                {faqItems.map((FI, index) =>(
                    <AnimatePresence mode="wait">
                        <motion.div
                        className={faqIndex === index ? styles.FAQ : styles.notFAQ}  onClick={(e) =>{ e.preventDefault(); changeActiveFAQ(index)}}
                        key={index}
                        
                        style={{ height: index === faqIndex ? "100px" : "40px" }}

                        
                        >
                            
                                <div className={styles.header}>
                                    <i className={faqIndex === index ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                                    <div className={styles.content}>
                                        <h1>{FI.question}</h1>
                                        <p className= {faqIndex === index ? styles.activeDesc : styles.notActiveDesc }>{FI.answer}</p>

                                    </div>
                            
                                </div>
                        
                          


                        </motion.div>
                        
                    </AnimatePresence>
                    
                ))}


            </div>
        </div>
        </>
    )
}

export default FAQ;