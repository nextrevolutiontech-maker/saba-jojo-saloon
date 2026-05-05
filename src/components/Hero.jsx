import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{backgroundImage: `url(${heroBg})`}}>
      <div className="hero-content">
        <h2 style={{letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '10px'}}>Welcome To</h2>
        <h1 style={{fontSize: '5rem', marginBottom: '20px'}}>SABA JOJO <span className="accent-text">SALOON</span></h1>
        <p style={{
          fontFamily: "'Bodoni Moda', serif", 
          fontStyle: 'italic',
          fontSize: '1.5rem', 
          color: 'var(--primary)', 
          marginBottom: '40px', 
          letterSpacing: '3px'
        }}>
          Premium Hair & Beauty Experience
        </p>
        <Link to="/contact" className="btn-lavish" style={{display: 'inline-block'}}>Book An Appointment</Link>
      </div>
    </section>
  );
};

export default Hero;
