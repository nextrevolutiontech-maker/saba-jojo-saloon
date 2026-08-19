import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    e?.stopPropagation();
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <Link to="/" onClick={closeMobileMenu}>
              <h1 className="logo-text" style={{ fontSize: '1.35rem', color: '#fff', margin: 0, letterSpacing: '2px' }}>
                SABA JOJO <span className="accent-text">SALOON</span>
              </h1>
            </Link>
          </div>

          {/* Navigation Links / Mobile Slide Drawer */}
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {/* Drawer Header for Mobile */}
            <li className="mobile-drawer-header">
              <span className="accent-text" style={{ fontWeight: '800', letterSpacing: '2px', fontSize: '1.1rem' }}>
                SJ SALOON MENU
              </span>
              <button className="drawer-close-btn" onClick={closeMobileMenu} aria-label="Close menu">
                <i className="fas fa-times"></i>
              </button>
            </li>

            <li><Link to="/" onClick={closeMobileMenu}><i className="fas fa-house mobile-link-icon"></i> Home</Link></li>
            <li><HashLink smooth to="/#about" onClick={closeMobileMenu}><i className="fas fa-sparkles mobile-link-icon"></i> About Us</HashLink></li>
            <li><HashLink smooth to="/#services" onClick={closeMobileMenu}><i className="fas fa-scissors mobile-link-icon"></i> Services & Prices</HashLink></li>
            <li><HashLink smooth to="/#deals" onClick={closeMobileMenu}><i className="fas fa-fire mobile-link-icon"></i> Hot Deals</HashLink></li>
            <li><HashLink smooth to="/#gallery" onClick={closeMobileMenu}><i className="fas fa-images mobile-link-icon"></i> Gallery</HashLink></li>
            <li><HashLink smooth to="/#blogs" onClick={closeMobileMenu}><i className="fas fa-newspaper mobile-link-icon"></i> Blogs</HashLink></li>
            <li><Link to="/contact" onClick={closeMobileMenu}><i className="fas fa-phone mobile-link-icon"></i> Contact Us</Link></li>

            {/* Mobile Drawer CTA Button */}
            <li className="mobile-cta-item" style={{ marginTop: '20px', width: '100%' }}>
              <button
                className="btn-lavish"
                onClick={() => { closeMobileMenu(); onOpenBooking(); }}
                style={{ width: '100%', padding: '14px', fontSize: '0.85rem' }}
              >
                <i className="fas fa-calendar-check" style={{ marginRight: '8px' }}></i> Book Appointment
              </button>
            </li>
          </ul>

          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div className="nav-cta hide-mobile">
              <button
                onClick={() => onOpenBooking()}
                className="btn-lavish"
                style={{ padding: '9px 20px', fontSize: '0.75rem' }}
              >
                <i className="fas fa-calendar-check" style={{ marginRight: '6px' }}></i> Book Now
              </button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
