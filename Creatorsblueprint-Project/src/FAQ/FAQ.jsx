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
    question: "What does Creators Blueprint do?",
    answer: "We help creators turn followers into paying clients. With our done-for-you system, we set up everything you need to start earning—your website, payment gateway, automated DMs, and your first digital product."
  },
  { 
    question: "How much does it cost?",
    answer: "We have a one-time package at $599. This includes everything from building your website to creating and launching your first digital product."
  },
  {
    question: "Is there a guarantee?",
    answer: "Yes. If you don’t make at least one sale after launching your system with us, we will refund 100% of your investment."
  },
  {
    question: "What is included in the $599 package?",
    answer: [
      "A professional website ",
      "DM automation system (auto-replies and lead capture), ",
      "Payment gateway setup (PayPal, Ziina, etc.), ",
      "One digital product (eBook, guide, or course) created for you, ",
      "Complete system integration and testing"
    ]
  },
  {
    question: "Do I need to be tech-savvy to use this?",
    answer: "Not at all. We handle all the technical setup for you. Once the system is ready, you only need to focus on creating content and engaging with your audience."
  },
  {
    question: "How long does it take to launch?",
    answer: "On average, 7–10 days from start to finish, depending on your niche and how quickly you provide the required information."
  },
  { 
    question: "Are there any extra costs?",
    answer: "Yes, but only once you start making money: Domain, hosting, and website tracking = $50/month. This ensures your system stays live, updated, and optimized. If you don’t profit, you don’t pay the monthly fee."
  },
  {
    question: "Who is this for?",
    answer: "Creators, influencers, coaches, and entrepreneurs who have an audience but are not monetizing it effectively."
  },
  {
    question: "How do I know which product to sell?",
    answer: "Creators Blueprint will analyze your account, including your analytics, niche, and the value you provide to your audience. Based on this, we will tailor a digital product (eBook, course, or template) that aligns with your strengths and ensures your followers find it irresistible."
  },
  {
    question: "How is this different from doing it myself?",
    answer: "Doing it alone would require learning web design, purchasing software and tools separately, and figuring out payment and automation systems. This could take weeks of work and cost hundreds of dollars more. With us, it is all done-for-you in one package."
  },
  {
    question: "What happens if I need support later?",
    answer: "We don’t just leave you after setup. Our $50/month plan covers hosting, analytics, ongoing support, and maintenance to ensure your system continues running smoothly."
  }
];


    
    return(
        <>

        <div className={styles.faqContainer}>
            <div className={styles.title}>
                
                <h1>Frequently Asked <span>Questions</span></h1>
                <p>These are the most commonly asked questions about Creatorsblueprint. Cant Find What you’re looking for? <span onClick={() => window.open("https://wa.link/creatorsblueprint", "_blank")}>Chat to our friendly team!</span></p>
            </div>
            <div className={styles.FAQS}>
                {faqItems.map((FI, index) =>(
                    <AnimatePresence mode="wait">
                        <motion.div
                        className={faqIndex === index ? styles.FAQ : styles.notFAQ}  onClick={(e) =>{ e.preventDefault(); changeActiveFAQ(index)}}
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        viewport={{ amount: 0.1, once: false }}
                        transition={{ delay: index * 0.1,}}
                        
                        
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