import React from 'react';

const services = [
  {
    title: 'HAIR STYLING',
    icon: 'fa-scissors',
    desc: 'Expert cuts and styling to match your unique personality and hair type.'
  },
  {
    title: 'MAKEUP ARTISTRY',
    icon: 'fa-wand-magic-sparkles',
    desc: 'Professional makeup for weddings, parties, or any special occasion.'
  },
  {
    title: 'SKIN CARE',
    icon: 'fa-spa',
    desc: 'Revitalizing facials and treatments to keep your skin glowing.'
  },
  {
    title: 'NAIL CARE',
    icon: 'fa-hand-sparkles',
    desc: 'Premium manicures and pedicures with high-quality products.'
  },
  {
    title: 'BRIDAL SERVICES',
    icon: 'fa-gem',
    desc: 'Complete bridal packages to make you look stunning on your big day.'
  },
  {
    title: 'HAIR COLORING',
    icon: 'fa-brush',
    desc: 'High-end coloring services from root touch-ups to full balayage.'
  }
];

const Services = () => {
  return (
    <section className="section-padding" id="services">
      <div className="container">
        <div className="section-title">
          <h2>OUR <span className="accent-text">SERVICES</span></h2>
          <p style={{color: '#888', marginTop: '10px'}}>Luxury treatments for your hair, skin, and beauty needs.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p style={{color: '#ccc', fontSize: '0.9rem', marginTop: '15px'}}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
