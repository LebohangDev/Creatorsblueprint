import { useState } from 'react';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Nav from './Nav/Nav.jsx';



function App() {

  const [active, setActive] = useState('Home');
  

  return (
    <>

    <header>

      <Nav active={active} setActive={setActive}/>

    </header>

    <div className="content">

      <div className={setActive === 'Home' ? 'activeSection' : 'notActiveSection'}>
        <Home/>

      </div>
      
    </div>




    <footer>

      <Footer/>

    </footer>
      
    </>
  )
}

export default App
