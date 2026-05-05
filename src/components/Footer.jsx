import React from 'react';

const Footer = () => {
  return (
    <footer className="section-padding" style={{background: '#0a0d0e', borderTop: '1px solid #222'}}>
      <div className="container">
        <div className="services-grid" style={{textAlign: 'left'}}>
          <div>
            <h3 style={{marginBottom: '20px'}}>SG <span className="accent-text">SALOON</span></h3>
            <p style={{color: '#888', fontSize: '0.9rem'}}>Providing premium beauty services with a touch of elegance. Your beauty is our passion.</p>
            <div style={{marginTop: '20px', display: 'flex', gap: '15px'}}>
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div>
            <h4 style={{marginBottom: '20px'}}>Quick Links</h4>
            <ul style={{color: '#888', fontSize: '0.9rem'}}>
              <li style={{marginBottom: '10px'}}><a href="#home">Home</a></li>
              <li style={{marginBottom: '10px'}}><a href="#services">Services</a></li>
              <li style={{marginBottom: '10px'}}><a href="#deals">Deals</a></li>
              <li style={{marginBottom: '10px'}}><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{marginBottom: '20px'}}>Contact Info</h4>
            <ul style={{color: '#888', fontSize: '0.9rem'}}>
              <li style={{marginBottom: '10px'}}><i className="fas fa-location-dot accent-text" style={{marginRight: '10px'}}></i> Defence Phase 5, Karachi</li>
              <li style={{marginBottom: '10px'}}><i className="fas fa-phone accent-text" style={{marginRight: '10px'}}></i> +92 XXX XXXXXXX</li>
              <li style={{marginBottom: '10px'}}><i className="fas fa-envelope accent-text" style={{marginRight: '10px'}}></i> info@sjsaloon.com.pk</li>
            </ul>
          </div>
        </div>
        <div style={{marginTop: '60px', textAlign: 'center', color: '#555', fontSize: '0.8rem'}}>
          <p>&copy; {new Date().getFullYear()} SG Hair & Beauty Saloon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
