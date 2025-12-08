import { useState } from "react";
import styles from "./FAQ.module.css";
import { AnimatePresence, motion } from 'framer-motion';

function FAQ() {
  const [faqIndex, setFaqIndex] = useState(0)



  function changeActiveFAQ(index) {
    setFaqIndex(index)
  }




  const faqItems = [
    {
      question: "What does Creators Blueprint do?",
      answer: "We help creators turn followers into paying clients. With our done-for-you system, we set up everything you need to start earning—your website, payment gateway, automated DMs, and your first digital product."
    },
    {
      question: "How much does it cost?",
      answer: "We offer a one-time package for $799. No monthly fees, no subscriptions—just a complete system built for you from start to finish."
    },
    {
      question: "Is there a guarantee?",
      answer: "Yes. If you don’t make at least one sale after launching your system with us, we will refund 100% of your investment."
    },
    {
      question: "What is included in the $799 package?",
      answer: [
        "A fully custom, professional website",
        "DM automation system (auto-replies and lead capture)",
        "Payment gateway setup (PayPal, Ziina, Stripe, etc.)",
        "One digital product created for you (eBook, guide, or course)",
        "Complete system integration, testing, and launch support"
      ]
    },
    {
      question: "Do I need to be tech-savvy to use this?",
      answer: "Not at all. We handle the full setup for you. Once your system is ready, you only need to focus on creating content and engaging with your audience."
    },
    {
      question: "How long does it take to launch?",
      answer: "On average, 7–10 days, depending on your niche and how quickly you provide the required information."
    },
    {
      question: "Are there any extra costs?",
      answer: "No. Your system runs without any additional required monthly fees. The only optional cost is purchasing a domain name, which is typically around $10–$15 per year."
    },
    {
      question: "Who is this for?",
      answer: "Creators, influencers, coaches, and entrepreneurs who have an audience but are not monetizing it effectively."
    },
    {
      question: "How do I know which product to sell?",
      answer: "Creators Blueprint analyzes your niche, audience, and strengths. Based on this, we tailor a digital product—such as an eBook, course, or template—that aligns with your expertise and resonates with your followers."
    },
    {
      question: "How is this different from doing it myself?",
      answer: "Doing it alone requires learning web design, automation tools, and payment systems, which can take weeks and cost more than the package itself. With Creators Blueprint, everything is built for you—from product to website to automation."
    },
    {
      question: "What happens if I need support later?",
      answer: "We provide ongoing support even after your system is launched. If you ever need updates or help, we're always here—at no additional monthly cost."
    }
  ];



  return (
    <>

      <div className={styles.faqContainer}>
        <div className={styles.title}>

          <h1>Frequently Asked <span>Questions</span></h1>
          <p>These are the most commonly asked questions about Creatorsblueprint. Cant Find What you’re looking for? <span onClick={() => window.open("https://wa.link/creatorsblueprint", "_blank")}>Chat to our friendly team!</span></p>
        </div>
        <div className={styles.FAQS}>
          {faqItems.map((FI, index) => (
            <AnimatePresence mode="wait">
              <motion.div
                className={faqIndex === index ? styles.FAQ : styles.notFAQ} onClick={(e) => { e.preventDefault(); changeActiveFAQ(index) }}
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.1, once: false }}
                transition={{ delay: index * 0.1, }}


                style={{ height: index === faqIndex ? "100px" : "40px" }}


              >

                <div className={styles.header}>
                  <i className={faqIndex === index ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                  <div className={styles.content}>
                    <h1>{FI.question}</h1>
                    <p className={faqIndex === index ? styles.activeDesc : styles.notActiveDesc}>{FI.answer}</p>

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