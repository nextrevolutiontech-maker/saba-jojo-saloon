import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = ({ onOpenBooking }) => {
  return (
    <footer style={{ background: '#07090b', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '70px 0 30px' }}>
      <div className="container">
        <div className="services-grid" style={{ textAlign: 'left', gap: '40px' }}>
          {/* Column 1: Brand */}
          <div>
            <h3 style={{ marginBottom: '18px', fontSize: '1.4rem' }}>
              SABA JOJO <span className="accent-text">SALOON</span>
            </h3>
            <p style={{ color: '#888', fontSize: '0.88rem', lineHeight: '1.7', marginBottom: '20px' }}>
              Providing premium luxury beauty, bridal, and hair services with an exquisite touch of elegance in Defence Phase 5, Karachi.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-tiktok"></i></a>
              <a href="https://wa.me/923364440390" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ marginBottom: '18px', color: '#fff', fontSize: '1.05rem' }}>Quick Navigation</h4>
            <ul style={{ color: '#aaa', fontSize: '0.88rem' }}>
              <li style={{ marginBottom: '10px' }}><HashLink smooth to="/#home">Home</HashLink></li>
              <li style={{ marginBottom: '10px' }}><HashLink smooth to="/#about">About Us</HashLink></li>
              <li style={{ marginBottom: '10px' }}><HashLink smooth to="/#services">Services & Pricing</HashLink></li>
              <li style={{ marginBottom: '10px' }}><HashLink smooth to="/#deals">Hot Deals</HashLink></li>
              <li style={{ marginBottom: '10px' }}><HashLink smooth to="/#gallery">Gallery</HashLink></li>
              <li style={{ marginBottom: '10px' }}><Link to="/contact">Contact Page</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Booking */}
          <div>
            <h4 style={{ marginBottom: '18px', color: '#fff', fontSize: '1.05rem' }}>Contact & Hours</h4>
            <ul style={{ color: '#aaa', fontSize: '0.88rem' }}>
              <li style={{ marginBottom: '10px' }}>
                <i className="fas fa-location-dot accent-text" style={{ marginRight: '8px' }}></i> Defence Phase 5, Karachi
              </li>
              <li style={{ marginBottom: '10px' }}>
                <i className="fas fa-phone accent-text" style={{ marginRight: '8px' }}></i> +92 336 4440390
              </li>
              <li style={{ marginBottom: '10px' }}>
                <i className="fas fa-envelope accent-text" style={{ marginRight: '8px' }}></i> info@sabajojosaloon.com.pk
              </li>
              <li style={{ marginBottom: '15px' }}>
                <i className="fas fa-clock accent-text" style={{ marginRight: '8px' }}></i> 11:00 AM - 09:00 PM (Tue - Sun)
              </li>
            </ul>

            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="btn-lavish"
              style={{ padding: '8px 18px', fontSize: '0.72rem', width: '100%' }}
            >
              <i className="fas fa-calendar-check"></i> Book Online Now
            </button>
          </div>
        </div>

        <div style={{ marginTop: '50px', paddingTop: '25px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: '#666', fontSize: '0.82rem' }}>
          <p>&copy; {new Date().getFullYear()} Saba Jojo Hair & Beauty Saloon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
