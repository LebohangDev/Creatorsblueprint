import { useEffect, useState } from 'react';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Privacy from './Privacy/Privacy.jsx';
import Terms from './Terms/Terms.jsx';
import Nav from './Nav/Nav.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';



function App() {

  const [active, setActive] = useState('Home');

  useEffect( () =>{

    const container =  document.getElementById('root')
    container.scrollTo(0, 0)

  }, [active])

  

  return (
    <>

    <header>

      <Nav active={active} setActive={setActive}/>

    </header>

    <div className="content">

      <div className={active === 'Home' ? 'activeSection' : 'notActiveSection'}>
        <Home/>

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
      
      
    </div>




    <footer>

      <Footer setActive={setActive}/>

    </footer >
      
    </>
  )
}

export default App
