import React, { useState } from 'react';

const SERVICES_DATA = [
  {
    id: 'hair-styling',
    category: 'Hair',
    title: 'HAIR STYLING & CUT',
    price: 'PKR 3,500',
    duration: '45 mins',
    icon: 'fa-scissors',
    desc: 'Expert cuts, blow-outs, and couture styling to match your unique personality.'
  },
  {
    id: 'party-glow',
    category: 'Makeup',
    title: 'MAKEUP ARTISTRY',
    price: 'PKR 12,000',
    duration: '90 mins',
    icon: 'fa-wand-magic-sparkles',
    desc: 'Professional glamour makeup for weddings, parties, or high-fashion occasions.'
  },
  {
    id: 'facial-skin',
    category: 'Skin',
    title: 'SKIN CARE & FACIAL',
    price: 'PKR 6,500',
    duration: '60 mins',
    icon: 'fa-spa',
    desc: 'Revitalizing deep-cleansing facials and whitening glow treatments.'
  },
  {
    id: 'nail-manicure',
    category: 'Nail',
    title: 'NAIL CARE & SPA',
    price: 'PKR 4,000',
    duration: '50 mins',
    icon: 'fa-hand-sparkles',
    desc: 'Premium manicures and pedicures with organic scrubs and nail art finish.'
  },
  {
    id: 'bridal-pkg',
    category: 'Bridal',
    title: 'BRIDAL SERVICES',
    price: 'PKR 45,000',
    duration: '180 mins',
    icon: 'fa-gem',
    desc: 'Complete high-definition bridal package to make you look unforgettable.'
  },
  {
    id: 'balayage-color',
    category: 'Hair',
    title: 'HAIR COLORING & BALAYAGE',
    price: 'PKR 18,000',
    duration: '120 mins',
    icon: 'fa-brush',
    desc: 'High-end coloring services from gloss treatments to full balayage.'
  }
];

const CATEGORIES = ['All', 'Hair', 'Makeup', 'Skin', 'Bridal', 'Nail'];

const Services = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredServices = activeTab === 'All' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <section className="section-padding" id="services" style={{ background: '#0b0e11' }}>
      <div className="container">
        <div className="section-title">
          <h2>OUR <span className="accent-text">SERVICES</span></h2>
          <p style={{ color: '#888', marginTop: '10px' }}>Luxury beauty & hair treatments tailored for your perfection.</p>

          {/* Filter Categories */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '25px' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  background: activeTab === cat ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                  color: activeTab === cat ? '#000' : '#aaa',
                  border: activeTab === cat ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="services-grid">
          {filteredServices.map((service) => (
            <div className="service-card" key={service.id}>
              <div>
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--primary)', padding: '2px 10px', borderRadius: '12px', fontWeight: '600' }}>
                    {service.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#888', padding: '2px 6px' }}>
                    <i className="far fa-clock"></i> {service.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#fff' }}>{service.title}</h3>
                <p style={{ color: '#aaa', fontSize: '0.88rem', marginBottom: '20px', lineHeight: '1.6' }}>{service.desc}</p>
              </div>

              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '15px' }}>
                  {service.price}
                </div>
                
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="btn-lavish"
                  style={{ width: '100%', padding: '10px 15px', fontSize: '0.78rem' }}
                >
                  Book Service <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
