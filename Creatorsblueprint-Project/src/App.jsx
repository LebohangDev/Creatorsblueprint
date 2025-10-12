import { useEffect, useState } from 'react';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Privacy from './Privacy/Privacy.jsx';
import Terms from './Terms/Terms.jsx';
import FAQ from './FAQ/FAQ.JSX';

import Nav from './Nav/Nav.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import PaymentSuccess from "./Pages/PaymentSuccess.jsx";
import PaymentCancel from "./Pages/PaymentCancel.jsx";



function App() {

  const [active, setActive] = useState('Home');
  const [paymentActive, setPaymentActive] = useState('')
  const [menuActive, setMenuActive] = useState (false)
  const [root, setRoot] = useState(null);

  useEffect( () =>{

    const container =  document.getElementById('root')
    setRoot(container)
    container.scrollTo(0, 0)

  }, [active])

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const payment = params.get("payment");
  if (payment === "success") setPaymentActive("PaymentSuccess");
  if (payment === "cancel") setPaymentActive("PaymentCancel");
}, []);

  

  return (

    
    <>
    <div className={paymentActive === 'PaymentSuccess' ? 'activeSection' : 'notActiveSection'}>
        <PaymentSuccess setPaymentActive= {setPaymentActive}/>
      </div>

      <div className={paymentActive === 'PaymentCancel' ? 'activeSection' : 'notActiveSection'}>
        <PaymentCancel setPaymentActive = {setPaymentActive} />
      </div>
   

    <header>

      <Nav active={active} setActive={setActive} menuActive={menuActive} setMenuActive={setMenuActive}/>

    </header>

    <div className="content">

      <div className={active === 'Home' ? 'activeSection' : 'notActiveSection'}>
        <Home setActive={setActive} root={root}/>

      </div>
      <div className={active === 'Testimonials' ? 'activeSection' : 'notActiveSection'}>
        <Testimonials/>
      </div>

      <div className={active === 'Privacy' ? 'activeSection' : 'notActiveSection'}>
        <Privacy/>
      </div>

       <div className={active === 'Terms' ? 'activeSection' : 'notActiveSection'}>
        <Terms/>
      </div>

       <div className={active === 'FAQ' ? 'activeSection' : 'notActiveSection'}>
        <FAQ/>
      </div>

      
      
      
    </div>




    <footer>

      <Footer setActive={setActive}/>

    </footer >
      
    </>
  )
}

export default App
