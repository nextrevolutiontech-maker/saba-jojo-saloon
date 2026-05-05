import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>
            <h1 className="logo-text" style={{fontSize: '1.4rem', color: '#fff', margin: 0, letterSpacing: '2px'}}>
              SJ <span className="accent-text">SALOON</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><HashLink smooth to="/#services" onClick={closeMobileMenu}>Services</HashLink></li>
          <li><HashLink smooth to="/#deals" onClick={closeMobileMenu}>Deals</HashLink></li>
          <li><HashLink smooth to="/#blogs" onClick={closeMobileMenu}>Blogs</HashLink></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>

        <div className="nav-actions" style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
          <div className="nav-cta hide-mobile">
            <Link to="/contact" className="btn-lavish" style={{padding: '8px 15px', fontSize: '0.7rem'}}>Book Now</Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="mobile-toggle" onClick={toggleMobileMenu} style={{cursor: 'pointer', fontSize: '1.5rem', color: '#fff', display: 'none'}}>
            <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
