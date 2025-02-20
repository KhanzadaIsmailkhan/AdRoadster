// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./contact";
import OurServices from './product';
import ImageSlider from './ImageSlider';
import Services from './Servicespage';
import pksImg from './Stats.png';
import { Link } from "react-router-dom";
import Signup from './components/SignupTemp';
import Login from './components/login';
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin"; 





// Header Component
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2><a href="/">ADROADSTER</a></h2>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close">×</span>
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/services">Services</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/signup">Signup</Link></li>
  <li><Link to="/login">Login</Link></li>
  {/* <li><Link to="/admin">admin</Link></li> */}
</ul>
    </nav>
  );
};

// Main Home Page Sections
const Main = () => (
  <div className='get-pkr'>
    <div className='get-pkr-text'>
      <h2>WE GET YOU LAHORE</h2>
      <p>Our media reaches 7 out of 10 Pakistanis weekly.* That’s one big audience— and a lot of little ones too...</p>
    </div>
    <div className="get-pks-img">
      <img src={pksImg} alt="A beautiful scene" className="image" />
    </div>
  </div>
);

const ContactSection = () => (
  <div className="contact-section">
  <div className="contact-item">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
    <h3>ADROADSTER</h3>
    <p>DHA Phase 6, Lahore, Punjab Pakistan, 54000</p>
  </div>

  <div className="contact-item">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
    <h3>Email</h3>
    <p>
      <a href="mailto:info@billboardspakistan.com">
        info@adroadster.com
      </a>
    </p>
  </div>

  <div className="contact-item">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
    <h3>Contact</h3>
    <p>
      Call for display: <a href="tel:03004677962">03480090755</a> -{' '}
      <a href="tel:03225317244">03124639429</a>
    </p>
  </div>
</div>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2024 ADROADSTER. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><ImageSlider /><Main /><OurServices /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      <ContactSection />
      <Footer />
    </Router>
  );
};

export default App;
