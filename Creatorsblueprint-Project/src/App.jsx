import { useEffect, useState } from 'react';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Privacy from './Privacy/Privacy.jsx';
import Terms from './Terms/Terms.jsx';
import FAQ from './FAQ/FAQ.JSX';
import Payment from './Payment/Payment.jsx';
import Nav from './Nav/Nav.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';



function App() {

  const [active, setActive] = useState('Home');
  const [menuActive, setMenuActive] = useState (false)

  useEffect( () =>{

    const container =  document.getElementById('root')
    container.scrollTo(0, 0)

  }, [active])

  

  return (
    <>

    <header>

      <Nav active={active} setActive={setActive} menuActive={menuActive} setMenuActive={setMenuActive}/>

    </header>

    <div className="content">

      <div className={active === 'Home' ? 'activeSection' : 'notActiveSection'}>
        <Home setActive={setActive}/>

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
      <div className={active === 'Payment' ? 'activeSection' : 'notActiveSection'}>
        <Payment/>
      </div>
      
      
    </div>




    <footer>

      <Footer setActive={setActive}/>

    </footer >
      
    </>
  )
}

export default App
