import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import deal1 from '../assets/deal-1.png';
import deal2 from '../assets/deal-2.png';
import deal3 from '../assets/deal-3.png';
import dealEx from '../assets/deal-exclusive.png';
import bridalPkg from '../assets/bridal-pkg.png';
import partyPkg from '../assets/party-pkg.png';

const Deals = ({ onOpenBooking }) => {
  const whatsappNumber = "923364440390";

  const hotDeals = [
    { id: 'bridal-pkg', img: bridalPkg, name: "Premium Bridal Package", price: "PKR 45,000", tag: "SAVE 20%" },
    { id: 'exclusive-deal', img: dealEx, name: "Exclusive Diamond Deal", price: "PKR 22,000", tag: "HOT SELLER" },
    { id: 'party-pkg', img: partyPkg, name: "Stunning Party Glow", price: "PKR 12,000", tag: "POPULAR" }
  ];

  const normalDeals = [
    { id: 'facial-skin', img: deal1, name: "Whitening Facial Deal", price: "PKR 6,500" },
    { id: 'body-wax', img: deal2, name: "Body Waxing Package", price: "PKR 5,000" },
    { id: 'hair-color', img: deal3, name: "Hair Coloring Offer", price: "PKR 15,000" },
    { id: 'silver-bridal', img: bridalPkg, name: "Silver Bridal Deal", price: "PKR 35,000" },
    { id: 'group-party', img: partyPkg, name: "Group Party Makeup", price: "PKR 28,000" },
    { id: 'skin-refresh', img: deal2, name: "Skin Refresh Deal", price: "PKR 7,500" }
  ];

  const getWhatsAppLink = (dealName) => {
    const message = encodeURIComponent(`Hi Saba Jojo Saloon, I am interested in booking the "${dealName}". Please let me know available slots.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="section-padding" id="deals" style={{ background: '#090c0e' }}>
      <div className="container">
        {/* Hot Deals Section */}
        <div className="section-title">
          <h2 style={{ fontSize: '2.5rem' }}>SUPER <span className="accent-text">HOT DEALS</span></h2>
          <p style={{ color: '#888', marginTop: '10px' }}>Exclusive limited-time pampering packages at special discount rates.</p>
        </div>

        <div className="services-grid" style={{ marginBottom: '80px' }}>
          {hotDeals.map((deal, index) => (
            <div className="deal-img-card hot-deal" key={index} style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 0 25px rgba(212, 175, 55, 0.2)',
              border: '1.5px solid var(--primary)',
              background: 'var(--bg-card)',
              position: 'relative',
              transition: 'var(--transition)'
            }}>
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'linear-gradient(135deg, #e67e22, #d4af37)',
                color: '#000',
                padding: '4px 12px',
                borderRadius: '20px',
                fontWeight: '800',
                fontSize: '0.75rem',
                zIndex: '3'
              }}>
                {deal.tag}
              </div>

              <div style={{ overflow: 'hidden', maxHeight: '380px' }}>
                <img src={deal.img} alt={deal.name} style={{ width: '100%', display: 'block', transition: '0.5s ease' }} />
              </div>
              
              <div style={{ padding: '22px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#fff' }}>{deal.name}</h3>
                <div style={{ fontSize: '1.3rem', color: 'var(--primary)', fontWeight: '800', marginBottom: '15px' }}>{deal.price}</div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    onClick={() => onOpenBooking(deal.id)}
                    className="btn-lavish"
                    style={{ flex: 1, padding: '10px', fontSize: '0.75rem' }}
                  >
                    Claim Deal Online
                  </button>

                  <a 
                    href={getWhatsAppLink(deal.name)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline" 
                    style={{ padding: '10px', fontSize: '0.9rem' }}
                    title="Book on WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Deals Slider */}
        <div className="section-title">
          <h2>MORE <span className="accent-text">VALUE PACKAGES</span></h2>
          <p style={{ color: '#888', marginTop: '10px' }}>Explore all our curated hair and skincare bundles.</p>
        </div>

        <div className="deals-slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={25}
            slidesPerView={1}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: '50px' }}
          >
            {normalDeals.map((deal, index) => (
              <SwiperSlide key={index}>
                <div className="deal-img-card" style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <img src={deal.img} alt={deal.name} style={{ width: '100%', display: 'block', height: '320px', objectFit: 'cover' }} />
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '6px' }}>{deal.name}</h4>
                    <p style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '15px' }}>{deal.price}</p>
                    <button 
                      onClick={() => onOpenBooking(deal.id)} 
                      className="btn-lavish" 
                      style={{ width: '100%', padding: '9px 15px', fontSize: '0.75rem' }}
                    >
                      Book Deal Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Deals;
