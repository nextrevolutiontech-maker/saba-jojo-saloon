import React, { useState } from 'react';

const Contact = ({ onOpenBooking }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="hero" style={{ height: '45vh', minHeight: '320px', padding: '100px 20px 40px' }}>
        <div className="hero-content">
          <h1>GET IN <span className="accent-text">TOUCH</span></h1>
          <p style={{ color: '#ccc', fontStyle: 'italic', fontFamily: "'Bodoni Moda', serif" }}>
            We'd Love To Hear From You & Plan Your Beauty Journey
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {/* Contact Details Card */}
            <div className="contact-info-card" style={{
              background: 'var(--bg-card)', padding: '40px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <h2 style={{ marginBottom: '25px', fontSize: '1.8rem' }}>SALON <span className="accent-text">LOCATION</span></h2>
              
              <div style={{ marginBottom: '22px', display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-location-dot accent-text" style={{ fontSize: '1.4rem', width: '35px' }}></i>
                <div>
                  <h5 style={{ color: '#fff', fontSize: '0.9rem', margin: 0 }}>Address</h5>
                  <span style={{ color: '#aaa', fontSize: '0.88rem' }}>Defence Phase 5, Main Commercial, Karachi, Pakistan</span>
                </div>
              </div>

              <div style={{ marginBottom: '22px', display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-phone accent-text" style={{ fontSize: '1.4rem', width: '35px' }}></i>
                <div>
                  <h5 style={{ color: '#fff', fontSize: '0.9rem', margin: 0 }}>Phone & WhatsApp</h5>
                  <a href="tel:+923364440390" style={{ color: 'var(--primary)', fontSize: '0.88rem', fontWeight: '600' }}>+92 336 4440390</a>
                </div>
              </div>

              <div style={{ marginBottom: '22px', display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-envelope accent-text" style={{ fontSize: '1.4rem', width: '35px' }}></i>
                <div>
                  <h5 style={{ color: '#fff', fontSize: '0.9rem', margin: 0 }}>Email Support</h5>
                  <span style={{ color: '#aaa', fontSize: '0.88rem' }}>info@sabajojosaloon.com.pk</span>
                </div>
              </div>

              <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-clock accent-text" style={{ fontSize: '1.4rem', width: '35px' }}></i>
                <div>
                  <h5 style={{ color: '#fff', fontSize: '0.9rem', margin: 0 }}>Opening Hours</h5>
                  <span style={{ color: '#aaa', fontSize: '0.88rem' }}>Tue - Sun: 11:00 AM - 09:00 PM (Monday Closed)</span>
                </div>
              </div>

              <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  onClick={() => onOpenBooking && onOpenBooking()}
                  className="btn-lavish"
                  style={{ width: '100%', padding: '12px' }}
                >
                  <i className="fas fa-calendar-check"></i> Book Online Appointment
                </button>
              </div>
            </div>

            {/* Message Form */}
            <div className="contact-form-container">
              {submitted ? (
                <div style={{ background: 'var(--bg-card)', padding: '50px 30px', borderRadius: '16px', textAlign: 'center', border: '1px solid var(--primary)' }}>
                  <i className="fas fa-circle-check accent-text" style={{ fontSize: '3.5rem', marginBottom: '15px' }}></i>
                  <h3 style={{ color: '#fff' }}>Message Received!</h3>
                  <p style={{ color: '#ccc', marginTop: '10px', fontSize: '0.92rem' }}>
                    Thank you {formData.name}, our front desk team will contact you shortly on WhatsApp/Phone.
                  </p>
                  <button className="btn-outline" style={{ marginTop: '20px' }} onClick={() => setSubmitted(false)}>
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} style={{
                  background: 'var(--bg-card)', padding: '35px 30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <h3 style={{ marginBottom: '20px', color: '#fff', fontSize: '1.3rem' }}>SEND US A DIRECT MESSAGE</h3>

                  <div style={{ marginBottom: '16px' }}>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '14px', background: '#12171b', border: '1px solid #2a343d', color: 'white', borderRadius: '8px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '14px', background: '#12171b', border: '1px solid #2a343d', color: 'white', borderRadius: '8px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <input
                      type="text"
                      placeholder="Subject / Service Inquiry"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ width: '100%', padding: '14px', background: '#12171b', border: '1px solid #2a343d', color: 'white', borderRadius: '8px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <textarea
                      placeholder="How can we assist you?"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: '100%', padding: '14px', background: '#12171b', border: '1px solid #2a343d', color: 'white', borderRadius: '8px' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-lavish" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Maps Karachi Defence Phase 5 */}
      <section className="map-section" style={{ height: '420px', width: '100%', borderTop: '1px solid var(--glass-border)' }}>
        <iframe
          title="Saba Jojo Saloon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14485.498305018617!2d67.0601362!3d24.8164057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c57f9ed30cb%3A0x63346e63eb07f0f!2sDefence%20Phase%205%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(80%) invert(90%) contrast(120%)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
