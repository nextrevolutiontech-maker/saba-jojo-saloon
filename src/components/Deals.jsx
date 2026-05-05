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

const Deals = () => {
  const whatsappNumber = "92XXXXXXXXXX";

  const hotDeals = [
    { img: bridalPkg, name: "Premium Bridal Package" },
    { img: dealEx, name: "Exclusive Diamond Deal" },
    { img: partyPkg, name: "Stunning Party Glow" }
  ];

  const normalDeals = [
    { img: deal1, name: "Whitening Facial Deal" },
    { img: deal2, name: "Body Waxing Package" },
    { img: deal3, name: "Hair Coloring Offer" },
    { img: bridalPkg, name: "Silver Bridal Deal" },
    { img: partyPkg, name: "Group Party Makeup" },
    { img: deal2, name: "Skin Refresh Deal" }
  ];

  const getWhatsAppLink = (dealName) => {
    const message = encodeURIComponent(`Hi SJ Saloon, I am interested in the "${dealName}". Please provide more details and booking availability.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="section-padding" id="deals" style={{background: '#0c1011'}}>
      <div className="container">
        {/* Hot Deals Section */}
        <div className="section-title">
          <h2 style={{fontSize: '3rem'}}>SUPER <span className="accent-text">HOT DEALS</span></h2>
          <p style={{color: '#888', marginTop: '10px'}}>Our most exclusive, limited-time offers for you.</p>
        </div>
        <div className="services-grid" style={{marginBottom: '100px'}}>
          {hotDeals.map((deal, index) => (
            <div className="deal-img-card hot-deal" key={index} style={{
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
              border: '2px solid var(--primary)',
              transition: 'var(--transition)'
            }}>
              <img src={deal.img} alt={deal.name} style={{width: '100%', display: 'block'}} />
              <div style={{padding: '20px', background: 'var(--bg-card)', textAlign: 'center'}}>
                <a 
                  href={getWhatsAppLink(deal.name)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-lavish" 
                  style={{width: '100%', display: 'inline-block'}}
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Normal Deals Section with Slider */}
        <div className="section-title">
          <h2>OUR <span className="accent-text">DEALS</span></h2>
          <p style={{color: '#888', marginTop: '10px'}}>Browse our wide range of value-for-money packages.</p>
        </div>
        <div className="deals-slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {normalDeals.map((deal, index) => (
              <SwiperSlide key={index}>
                <div className="deal-img-card" style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  marginBottom: '50px'
                }}>
                  <img src={deal.img} alt={deal.name} style={{width: '100%', display: 'block'}} />
                  <div style={{padding: '20px', textAlign: 'center'}}>
                    <a 
                      href={getWhatsAppLink(deal.name)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-lavish" 
                      style={{width: '100%', display: 'inline-block', padding: '8px'}}
                    >
                      Grab Deal
                    </a>
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
