import React from 'react';
import { Link } from 'react-router-dom';
import about1 from '../assets/about-1.png';
import about2 from '../assets/about-2.png';

const About = () => {
  return (
    <section className="section-padding" id="about" style={{background: 'var(--bg-dark)'}}>
      <div className="container">
        <div className="services-grid" style={{alignItems: 'center', gap: '60px'}}>
          <div className="about-images" style={{position: 'relative', height: '550px'}}>
            <div className="about-img-1" style={{
              width: '85%', 
              height: '450px', 
              backgroundImage: `url(${about1})`,
              backgroundSize: 'cover',
              position: 'absolute',
              top: '0',
              left: '0',
              borderRadius: '20px',
              border: '8px solid var(--bg-card)',
              zIndex: '2',
              boxShadow: 'var(--shadow)'
            }}></div>
            <div className="about-img-2" style={{
              width: '75%', 
              height: '350px', 
              backgroundImage: `url(${about2})`,
              backgroundSize: 'cover',
              position: 'absolute',
              bottom: '0',
              right: '0',
              borderRadius: '20px',
              border: '8px solid var(--bg-card)',
              zIndex: '1',
              boxShadow: 'var(--shadow)'
            }}></div>
          </div>
          <div className="about-content">
            <h4 style={{color: 'var(--primary)', letterSpacing: '4px', marginBottom: '15px', fontWeight: '600'}}>DISCOVER OUR STORY</h4>
            <h2 style={{fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '30px'}}>UPSCALE <span className="accent-text">BEAUTY</span> & ELEGANCE</h2>
            <p style={{color: '#ccc', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.8'}}>
              Welcome to Saba Jojo Hair & Beauty Saloon, where luxury meets expertise. For over a decade, we have been the sanctuary for those who seek perfection in every detail of their beauty journey.
            </p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px'}}>
              <div>
                <h5 style={{color: 'var(--primary)', marginBottom: '10px'}}><i className="fas fa-check-circle"></i> EXPERT STYLISTS</h5>
                <p style={{fontSize: '0.9rem', color: '#888'}}>Certified professionals with years of experience.</p>
              </div>
              <div>
                <h5 style={{color: 'var(--primary)', marginBottom: '10px'}}><i className="fas fa-check-circle"></i> PREMIUM PRODUCTS</h5>
                <p style={{fontSize: '0.9rem', color: '#888'}}>We use only the world's finest beauty brands.</p>
              </div>
            </div>
            <Link to="/contact" className="btn-lavish" style={{display: 'inline-block'}}>Experience Luxury Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
