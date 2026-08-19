import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const REVIEWS = [
  {
    id: 1,
    name: 'Ayesha Rahman',
    service: 'Bridal Package',
    rating: 5,
    comment: 'Saba Jojo Saloon transformed my wedding day! Saba and her team gave me the exact radiant, classic bridal look I had dreamed of. The booking process was so effortless!'
  },
  {
    id: 2,
    name: 'Zainab Fatima',
    service: 'Balayage & Hair Coloring',
    rating: 5,
    comment: 'Best salon experience in Defence Phase 5! My balayage turned out so smooth and glossy without any hair damage. Highly recommended!'
  },
  {
    id: 3,
    name: 'Mahnoor Tariq',
    service: 'Whitening Skin Facial',
    rating: 5,
    comment: 'The skin facial treatment left my face glowing for weeks. Extremely clean, luxurious ambiance and warm hospitable staff.'
  },
  {
    id: 4,
    name: 'Sadaf Shah',
    service: 'Party Glow Makeup',
    rating: 5,
    comment: 'Jojo is an absolute magician with makeup! Got endless compliments at my sister’s engagement party. Will definitely be coming back!'
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding" id="reviews" style={{ background: '#0e1216', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="section-title">
          <h2>CLIENT <span className="accent-text">TESTIMONIALS</span></h2>
          <p style={{ color: '#888', marginTop: '10px' }}>What our valued clients say about their luxury salon experience.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '50px' }}
        >
          {REVIEWS.map((rev) => (
            <SwiperSlide key={rev.id}>
              <div style={{
                background: 'var(--bg-card)',
                padding: '30px 25px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                minHeight: '240px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', color: 'var(--primary)', marginBottom: '15px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star" style={{ fontSize: '0.9rem' }}></i>
                    ))}
                  </div>
                  <p style={{ color: '#d1d5db', fontSize: '0.92rem', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '20px' }}>
                    "{rev.comment}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h5 style={{ color: '#fff', fontSize: '0.95rem', margin: 0 }}>{rev.name}</h5>
                    <span style={{ fontSize: '0.78rem', color: 'var(--primary)' }}>{rev.service}</span>
                  </div>
                  <i className="fas fa-quote-right" style={{ color: 'rgba(212, 175, 55, 0.2)', fontSize: '1.6rem' }}></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
