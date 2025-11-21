import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Privacy from './Privacy/Privacy.jsx';
import Terms from './Terms/Terms.jsx';
import FAQ from './FAQ/FAQ.JSX';

import Nav from './Nav/Nav.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import PaymentSuccess from "./paymentPopups/PaymentSuccess.jsx";
import PaymentCancel from "./paymentPopups/PaymentCancel.jsx";
import ThemeToggle from './ThemeToggle/ThemeToggle.jsx';



function App() {

  const [active, setActive] = useState('Home');
  const [paymentActive, setPaymentActive] = useState('')
  const [menuActive, setMenuActive] = useState(false)
  const [navActive, setNavActive] = useState(true)
  // track theme mode 
  const [theme, setTheme] = useState('dark');


  useEffect(() => {

    const container = document.getElementById('root')

    container.scrollTo(0, 0)

  }, [active])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    if (payment === "success") setPaymentActive("PaymentSuccess");
    if (payment === "cancel") setPaymentActive("PaymentCancel");
  }, []);

  useEffect(() => {
    // Apply saved theme on mount
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);


  // Variants for open and closed states
  const menuVariants = {
    closed: { opacity: 0, y: -60, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };



  return (


    <>


      <AnimatePresence mode="wait">
        <motion.div
          key={navActive}
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className={navActive === true ? 'navActive' : 'notNavActive'}
        >
          <Nav active={active} setActive={setActive} menuActive={menuActive} setMenuActive={setMenuActive} theme={theme} />

        </motion.div>

      </AnimatePresence>






      <div className={paymentActive === 'PaymentSuccess' ? 'activeSection' : 'notActiveSection'}>
        <PaymentSuccess setPaymentActive={setPaymentActive} />
      </div>

      <div className={paymentActive === 'PaymentCancel' ? 'activeSection' : 'notActiveSection'}>
        <PaymentCancel setPaymentActive={setPaymentActive} />
      </div>




      <div className="content">

        <div className={active === 'Home' ? 'activeSection' : 'notActiveSection'}>
          <Home setNavActive={setNavActive} t />

        </div>
        <div className={active === 'Testimonials' ? 'activeSection' : 'notActiveSection'}>
          <Testimonials />
        </div>

        <div className={active === 'Privacy' ? 'activeSection' : 'notActiveSection'}>
          <Privacy />
        </div>

        <div className={active === 'Terms' ? 'activeSection' : 'notActiveSection'}>
          <Terms />
        </div>

        <div className={active === 'FAQ' ? 'activeSection' : 'notActiveSection'}>
          <FAQ />
        </div>




      </div>




      <footer>

        <Footer setActive={setActive} theme={theme} />

      </footer >

      <ThemeToggle theme={theme} setTheme={setTheme} />

    </>
  )
}



export default App
