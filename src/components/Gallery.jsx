import React from 'react';
import g1 from '../assets/gallery-1.png';
import g2 from '../assets/gallery-2.png';
import g3 from '../assets/gallery-3.png';

const Gallery = () => {
  const images = [g1, g2, g3, g1, g2, g3]; // Reusing images for demonstration

  return (
    <section className="section-padding" id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>OUR <span className="accent-text">GALLERY</span></h2>
          <p style={{color: '#888', marginTop: '10px'}}>Glimpses of our stunning transformations.</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {images.map((img, index) => (
            <div key={index} className="gallery-item" style={{
              height: '350px',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.5s ease'
            }}>
              <div className="gallery-overlay" style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'rgba(158, 73, 163, 0.4)',
                opacity: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.5s ease'
              }}>
                <i className="fas fa-plus" style={{fontSize: '2rem', color: 'white'}}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
