import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Nav from './Nav/Nav.jsx';
import Waitlist from './Waitlist/Waitlist.jsx';


function App() {

  const [navActive, setNavActive] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // If we have a hash in the URL, don't scroll to top, let the anchor work
    if (!location.hash && location.pathname !== '/proof') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);


  const isWaitlist = location.pathname.startsWith('/waitlist');

  return (
    <>
      {!isWaitlist && navActive && (
        <Nav />
      )}


      <div className="content">
        <Routes>
          {/* Main SaaS Landing Page */}
          <Route path="/" element={<Home setNavActive={setNavActive} />} />
          
          {/* Proof page route */}
          <Route path="/proof" element={<Home setNavActive={setNavActive} />} />
          
          {/* Legacy Waitlist */}
          <Route path="/waitlist" element={<Waitlist />} />
          
          {/* Redirect all other obsolete routes to Home */}
          <Route path="*" element={<Home setNavActive={setNavActive} />} />
        </Routes>
      </div>

      {!isWaitlist && (
        <Footer />
      )}
    </>
  );
}

export default App;
