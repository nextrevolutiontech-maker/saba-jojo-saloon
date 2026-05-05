import React, { useState } from 'react';
import Deals from './Deals';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <section className="hero" style={{height: '40vh', minHeight: '300px'}}>
        <div className="hero-content">
          <h1>CONTACT <span className="accent-text">US</span></h1>
          <p>We'd Love To Hear From You</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="services-grid">
            <div className="contact-info-card" style={{textAlign: 'left'}}>
              <h2 style={{marginBottom: '30px'}}>GET IN <span className="accent-text">TOUCH</span></h2>
              <div style={{marginBottom: '20px'}}>
                <i className="fas fa-location-dot accent-text" style={{fontSize: '1.5rem', marginRight: '15px'}}></i>
                <span>Defence Phase 5, Karachi, Pakistan</span>
              </div>
              <div style={{marginBottom: '20px'}}>
                <i className="fas fa-phone accent-text" style={{fontSize: '1.5rem', marginRight: '15px'}}></i>
                <span>+92 336 4440390</span>
              </div>
              <div style={{marginBottom: '20px'}}>
                <i className="fas fa-envelope accent-text" style={{fontSize: '1.5rem', marginRight: '15px'}}></i>
                <span>info@lavishsaloon.com.pk</span>
              </div>
              <div style={{marginTop: '40px'}}>
                <h3>Follow Us</h3>
                <div style={{display: 'flex', gap: '15px', marginTop: '15px'}}>
                  <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              {submitted ? (
                <div style={{background: 'var(--bg-card)', padding: '40px', borderRadius: '10px', textAlign: 'center'}}>
                  <i className="fas fa-circle-check accent-text" style={{fontSize: '4rem', marginBottom: '20px'}}></i>
                  <h3>Message Sent!</h3>
                  <p style={{color: '#ccc', marginTop: '10px'}}>We will get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} style={{background: 'var(--bg-card)', padding: '40px', borderRadius: '10px'}}>
                  <div style={{marginBottom: '20px'}}>
                    <input type="text" placeholder="Your Name" required style={{width: '100%', padding: '15px', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '5px'}} />
                  </div>
                  <div style={{marginBottom: '20px'}}>
                    <input type="email" placeholder="Your Email" required style={{width: '100%', padding: '15px', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '5px'}} />
                  </div>
                  <div style={{marginBottom: '20px'}}>
                    <input type="text" placeholder="Subject" required style={{width: '100%', padding: '15px', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '5px'}} />
                  </div>
                  <div style={{marginBottom: '30px'}}>
                    <textarea placeholder="Your Message" rows="5" required style={{width: '100%', padding: '15px', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '5px'}}></textarea>
                  </div>
                  <button type="submit" className="btn-lavish" style={{width: '100%'}}>Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="map-section" style={{height: '400px', width: '100%', background: '#111'}}>
        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555'}}>
          <p>Google Map Integration</p>
        </div>
      </section>

      <Deals />
    </div>
  );
};

export default Contact;
