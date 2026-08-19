import React, { useState } from 'react';
import g1 from '../assets/gallery-1.png';
import g2 from '../assets/gallery-2.png';
import g3 from '../assets/gallery-3.png';

const GALLERY_ITEMS = [
  { img: g1, title: 'Couture Hair Styling', category: 'Hair' },
  { img: g2, title: 'Radiant Bridal Makeup', category: 'Bridal' },
  { img: g3, title: 'Luminous Skin Refresh', category: 'Skin' },
  { img: g1, title: 'Balayage Color Magic', category: 'Hair' },
  { img: g2, title: 'Glamour Evening Makeup', category: 'Makeup' },
  { img: g3, title: 'Luxury Nail Art Spa', category: 'Nail' },
];

const CATEGORIES = ['All', 'Hair', 'Bridal', 'Makeup', 'Skin', 'Nail'];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section className="section-padding" id="gallery" style={{ background: '#0b0e11' }}>
      <div className="container">
        <div className="section-title">
          <h2>OUR <span className="accent-text">GALLERY</span></h2>
          <p style={{ color: '#888', marginTop: '10px' }}>Stunning client transformations and salon ambiance.</p>

          {/* Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  background: activeFilter === cat ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                  color: activeFilter === cat ? '#000' : '#aaa',
                  border: activeFilter === cat ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setLightboxImg(item)}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="gallery-overlay">
                <div style={{
                  width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary)', color: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px'
                }}>
                  <i className="fas fa-search-plus" style={{ fontSize: '1.2rem' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>{item.title}</h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary-light)' }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-modal" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-img-wrapper" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute', top: '-15px', right: '-15px', background: 'var(--primary)', color: '#000',
                width: '36px', height: '36px', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.2rem', zIndex: '10'
              }}
            >
              ×
            </button>
            <img src={lightboxImg.img} alt={lightboxImg.title} />
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <h3 style={{ color: '#fff', fontSize: '1.3rem' }}>{lightboxImg.title}</h3>
              <span style={{ color: 'var(--primary)' }}>{lightboxImg.category} Perfection</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
