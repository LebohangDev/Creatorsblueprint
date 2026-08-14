import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Nav from './Nav/Nav.jsx';
import Waitlist from './Waitlist/Waitlist.jsx';
import Privacy from './Privacy/Privacy.jsx';
import Terms from './Terms/Terms.jsx';


import Event from './Event/Event.jsx';
import AdminLogin from './Event/admin/loginForm/login.jsx';
import Checkin from './Event/admin/Checkin/Checkin.jsx';

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
  const isEvent = location.pathname.startsWith('/event');
  const isAdmin = location.pathname.includes('/admin');

  return (
    <>
      {!isWaitlist && !isAdmin && navActive && (
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

          {/* Flow & Fortune Event Route */}
          <Route path="/event" element={<Event />} />

          {/* Admin Login Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/event/admin" element={<AdminLogin />} />
          <Route path="/event/admin/login" element={<AdminLogin />} />

          {/* Admin Checkin / Scanner Routes */}
          <Route path="/admin/checkin" element={<Checkin />} />
          <Route path="/admin/Checkin" element={<Checkin />} />
          <Route path="/event/admin/checkin" element={<Checkin />} />
          <Route path="/event/admin/Checkin" element={<Checkin />} />


          {/* Legal routes */}
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />

          {/* Redirect all other obsolete routes to Home */}
          <Route path="*" element={<Home setNavActive={setNavActive} />} />
        </Routes>
      </div>

      {!isWaitlist && !isAdmin && (
        <Footer />
      )}
    </>
  );
}

export default App;
