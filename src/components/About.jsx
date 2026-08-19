import React from 'react';
import about1 from '../assets/about-1.png';
import about2 from '../assets/about-2.png';

const About = ({ onOpenBooking }) => {
  return (
    <section className="section-padding" id="about" style={{ background: '#090c0e' }}>
      <div className="container">
        <div className="services-grid" style={{ alignItems: 'center', gap: '50px' }}>
          
          {/* Responsive Image Display */}
          <div className="about-images" style={{ position: 'relative', minHeight: '380px' }}>
            <div style={{
              width: '88%', 
              height: '380px', 
              backgroundImage: `url(${about1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '16px',
              border: '4px solid var(--bg-card)',
              boxShadow: 'var(--shadow)'
            }}></div>

            <div style={{
              width: '65%', 
              height: '240px', 
              backgroundImage: `url(${about2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              bottom: '-20px',
              right: '0',
              borderRadius: '16px',
              border: '4px solid var(--primary)',
              boxShadow: 'var(--shadow-gold)'
            }}></div>
          </div>

          {/* Text Content */}
          <div className="about-content">
            <h4 style={{ color: 'var(--primary)', letterSpacing: '3px', marginBottom: '12px', fontWeight: '600', fontSize: '0.85rem' }}>
              DISCOVER OUR STORY
            </h4>
            <h2 style={{ fontSize: '2.8rem', lineHeight: '1.25', marginBottom: '25px' }}>
              UPSCALE <span className="accent-text">BEAUTY</span> & LUXURY ELEGANCE
            </h2>
            <p style={{ color: '#ccc', fontSize: '1rem', marginBottom: '25px', lineHeight: '1.8' }}>
              Welcome to Saba Jojo Hair & Beauty Saloon, Defence Phase 5 Karachi's premier sanctuary for luxury beauty. For over a decade, we have been crafting bespoke bridal makeovers, balayage transformations, and serene skincare sessions.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '35px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '10px', borderLeft: '3px solid var(--primary)' }}>
                <h5 style={{ color: 'var(--primary)', marginBottom: '6px', fontSize: '0.9rem' }}>
                  <i className="fas fa-check-circle"></i> EXPERT STYLISTS
                </h5>
                <p style={{ fontSize: '0.82rem', color: '#888', margin: 0 }}>Certified senior masters with 10+ years experience.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '10px', borderLeft: '3px solid var(--primary)' }}>
                <h5 style={{ color: 'var(--primary)', marginBottom: '6px', fontSize: '0.9rem' }}>
                  <i className="fas fa-check-circle"></i> PREMIUM PRODUCTS
                </h5>
                <p style={{ fontSize: '0.82rem', color: '#888', margin: 0 }}>Only top-tier international organic & luxury brands.</p>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="btn-lavish"
            >
              <i className="fas fa-sparkles"></i> Experience Luxury Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
