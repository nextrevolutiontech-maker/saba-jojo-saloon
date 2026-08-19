import React from 'react';
import { HashLink } from 'react-router-hash-link';

const MobileBottomNav = ({ onOpenBooking }) => {
  return (
    <nav className="mobile-bottom-nav">
      <div className="mobile-bottom-nav-inner">
        <HashLink smooth to="/#home" className="mobile-nav-btn">
          <i className="fas fa-house"></i>
          <span>Home</span>
        </HashLink>

        <HashLink smooth to="/#services" className="mobile-nav-btn">
          <i className="fas fa-sparkles"></i>
          <span>Services</span>
        </HashLink>

        <button onClick={() => onOpenBooking()} className="mobile-nav-btn primary-btn">
          <i className="fas fa-calendar-check"></i>
          <span>Book Now</span>
        </button>

        <a href="https://wa.me/923364440390" target="_blank" rel="noopener noreferrer" className="mobile-nav-btn">
          <i className="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>

        <a href="tel:+923364440390" className="mobile-nav-btn">
          <i className="fas fa-phone"></i>
          <span>Call</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
