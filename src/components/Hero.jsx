import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = ({ onOpenBooking }) => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 18px',
          borderRadius: '30px',
          background: 'rgba(212, 175, 55, 0.15)',
          border: '1px solid var(--primary)',
          color: 'var(--primary)',
          fontSize: '0.8rem',
          fontWeight: '700',
          letterSpacing: '3px',
          marginBottom: '20px',
          textTransform: 'uppercase'
        }}>
          <i className="fas fa-crown"></i> Defence Phase 5 • Karachi
        </div>

        <h2 style={{ letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '10px', fontSize: '1rem', color: '#e5e7eb' }}>
          WELCOME TO
        </h2>
        
        <h1 style={{ marginBottom: '20px', letterSpacing: '3px' }}>
          SABA JOJO <span className="accent-text">SALOON</span>
        </h1>

        <p style={{
          fontFamily: "'Bodoni Moda', serif",
          fontStyle: 'italic',
          fontSize: '1.4rem',
          color: 'var(--primary)',
          marginBottom: '35px',
          letterSpacing: '2px',
          fontWeight: '400'
        }}>
          Premium Hair, Beauty & Bridal Experience
        </p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onOpenBooking()} className="btn-lavish">
            <i className="fas fa-calendar-check"></i> Book An Appointment
          </button>
          
          <a href="#services" className="btn-outline">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
