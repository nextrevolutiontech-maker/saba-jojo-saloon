import React, { useState, useEffect } from 'react';

const SERVICES_LIST = [
  { id: 'hair-styling', name: 'Hair Styling & Cut', category: 'Hair', price: 'PKR 3,500', duration: '45 mins', icon: 'fa-scissors' },
  { id: 'bridal-pkg', name: 'Premium Bridal Experience', category: 'Bridal', price: 'PKR 45,000', duration: '180 mins', icon: 'fa-gem' },
  { id: 'party-glow', name: 'Party Glow Makeup', category: 'Makeup', price: 'PKR 12,000', duration: '90 mins', icon: 'fa-wand-magic-sparkles' },
  { id: 'facial-skin', name: 'Whitening Skin Facial', category: 'Skin Care', price: 'PKR 6,500', duration: '60 mins', icon: 'fa-spa' },
  { id: 'nail-manicure', name: 'Luxury Manicure & Pedicure', category: 'Nail Care', price: 'PKR 4,000', duration: '50 mins', icon: 'fa-hand-sparkles' },
  { id: 'balayage-color', name: 'Balayage & Hair Coloring', category: 'Hair', price: 'PKR 18,000', duration: '120 mins', icon: 'fa-brush' },
  { id: 'exclusive-deal', name: 'Exclusive Diamond Hot Deal', category: 'Hot Deals', price: 'PKR 22,000', duration: '150 mins', icon: 'fa-fire' },
];

const STYLISTS_LIST = [
  { id: 'any', name: 'Any Available Senior Specialist', role: 'Fastest Booking' },
  { id: 'saba', name: 'Saba (Master Hair & Bridal Lead)', role: '12+ Yrs Exp' },
  { id: 'jojo', name: 'Jojo (Makeup & Glamour Expert)', role: '10+ Yrs Exp' },
  { id: 'maria', name: 'Maria (Skin & Facial Specialist)', role: '8+ Yrs Exp' },
];

const TIME_SLOTS = [
  '11:00 AM', '12:30 PM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM', '08:00 PM'
];

const BookingModal = ({ isOpen, onClose, initialService }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0]);
  const [selectedStylist, setSelectedStylist] = useState(STYLISTS_LIST[0]);
  const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);
  const [bookingTime, setBookingTime] = useState('03:30 PM');
  const [clientInfo, setClientInfo] = useState({ name: '', phone: '', notes: '' });
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      const found = SERVICES_LIST.find(s => s.name.toLowerCase().includes(initialService.toLowerCase()) || s.id === initialService);
      if (found) setSelectedService(found);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 3 && (!bookingDate || !bookingTime)) {
      alert('Please select date and time slot.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    const refCode = 'SJ-' + Math.floor(10000 + Math.random() * 90000);
    setBookingRef(refCode);

    // Save to local storage for persistent demo state
    const newBooking = {
      refCode,
      service: selectedService.name,
      price: selectedService.price,
      stylist: selectedStylist.name,
      date: bookingDate,
      time: bookingTime,
      clientName: clientInfo.name,
      clientPhone: clientInfo.phone,
      notes: clientInfo.notes,
      createdAt: new Date().toISOString()
    };

    const existing = JSON.parse(localStorage.getItem('sj_saloon_bookings') || '[]');
    localStorage.setItem('sj_saloon_bookings', JSON.stringify([newBooking, ...existing]));

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(5);
    }, 600);
  };

  const getWhatsAppMessageUrl = () => {
    const msg = `✨ *NEW APPOINTMENT BOOKING* ✨\n\n` +
      `*Ref Code:* ${bookingRef}\n` +
      `*Client:* ${clientInfo.name}\n` +
      `*Phone:* ${clientInfo.phone}\n` +
      `*Service:* ${selectedService.name} (${selectedService.price})\n` +
      `*Stylist:* ${selectedStylist.name}\n` +
      `*Date:* ${bookingDate}\n` +
      `*Time Slot:* ${bookingTime}\n` +
      `${clientInfo.notes ? `*Notes:* ${clientInfo.notes}\n` : ''}` +
      `\nPlease confirm my appointment slot. Thank you!`;

    return `https://wa.me/923364440390?text=${encodeURIComponent(msg)}`;
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={resetAndClose}>
          <i className="fas fa-times"></i>
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--primary)' }}>
            AUTOMATED <span className="accent-text">BOOKING WIZARD</span>
          </h3>
          <p style={{ color: '#aaa', fontSize: '0.85rem', marginTop: '5px' }}>
            Book your luxury beauty session in 4 easy steps
          </p>

          {/* Wizard Step Progress */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                style={{
                  width: '35px',
                  height: '6px',
                  borderRadius: '3px',
                  background: step >= num ? 'var(--primary)' : '#2a333d',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div>
            <h4 style={{ marginBottom: '15px', color: '#fff' }}>1. Select Your Desired Service</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', maxHeight: '340px', overflowY: 'auto', paddingRight: '5px' }}>
              {SERVICES_LIST.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  style={{
                    padding: '14px 18px',
                    borderRadius: '10px',
                    background: selectedService.id === srv.id ? 'rgba(212, 175, 55, 0.15)' : '#1a2228',
                    border: selectedService.id === srv.id ? '1.5px solid var(--primary)' : '1px solid #2a343d',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'var(--transition)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: '#000',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem'
                    }}>
                      <i className={`fas ${srv.icon}`}></i>
                    </div>
                    <div>
                      <h5 style={{ color: '#fff', margin: 0, fontSize: '0.95rem' }}>{srv.name}</h5>
                      <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{srv.duration} • {srv.category}</span>
                    </div>
                  </div>
                  <span style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '0.95rem' }}>{srv.price}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '25px' }}>
              <button className="btn-lavish" onClick={handleNextStep}>
                Next: Select Stylist <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Stylist Selection */}
        {step === 2 && (
          <div>
            <h4 style={{ marginBottom: '15px', color: '#fff' }}>2. Choose Your Specialist</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {STYLISTS_LIST.map((stylist) => (
                <div
                  key={stylist.id}
                  onClick={() => setSelectedStylist(stylist)}
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    background: selectedStylist.id === stylist.id ? 'rgba(212, 175, 55, 0.15)' : '#1a2228',
                    border: selectedStylist.id === stylist.id ? '1.5px solid var(--primary)' : '1px solid #2a343d',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'var(--transition)'
                  }}
                >
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-dark)', border: '2px solid var(--primary)',
                    margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)'
                  }}>
                    <i className="fas fa-user-sparkles" style={{ fontSize: '1.2rem' }}></i>
                  </div>
                  <h5 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '4px' }}>{stylist.name}</h5>
                  <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{stylist.role}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
              <button className="btn-outline" onClick={handlePrevStep}>Back</button>
              <button className="btn-lavish" onClick={handleNextStep}>
                Next: Choose Date & Time <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Date & Time Picker */}
        {step === 3 && (
          <div>
            <h4 style={{ marginBottom: '15px', color: '#fff' }}>3. Pick Date & Preferred Time</h4>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#aaa', marginBottom: '8px' }}>Select Date</label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                style={{
                  width: '100%', padding: '14px', borderRadius: '8px', background: '#1a2228',
                  border: '1px solid #2a343d', color: '#fff', fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#aaa', marginBottom: '10px' }}>Available Time Slots</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setBookingTime(slot)}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      background: bookingTime === slot ? 'var(--primary)' : '#1a2228',
                      color: bookingTime === slot ? '#000' : '#fff',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      border: '1px solid #2a343d'
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
              <button className="btn-outline" onClick={handlePrevStep}>Back</button>
              <button className="btn-lavish" onClick={handleNextStep}>
                Next: Client Details <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Client Info */}
        {step === 4 && (
          <form onSubmit={handleConfirmBooking}>
            <h4 style={{ marginBottom: '15px', color: '#fff' }}>4. Enter Your Contact Details</h4>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#aaa', marginBottom: '6px' }}>Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Khan"
                value={clientInfo.name}
                onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', background: '#1a2228', border: '1px solid #2a343d', color: '#fff' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#aaa', marginBottom: '6px' }}>Phone / WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. +92 336 1234567"
                value={clientInfo.phone}
                onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', background: '#1a2228', border: '1px solid #2a343d', color: '#fff' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#aaa', marginBottom: '6px' }}>Special Instructions (Optional)</label>
              <textarea
                rows="3"
                placeholder="Any skin allergies, special styling requests, etc."
                value={clientInfo.notes}
                onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', background: '#1a2228', border: '1px solid #2a343d', color: '#fff' }}
              />
            </div>

            {/* Booking Summary Box */}
            <div style={{ padding: '15px', background: '#161c22', borderRadius: '10px', borderLeft: '4px solid var(--primary)', marginBottom: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#ddd', marginBottom: '4px' }}>
                <span>Service:</span> <strong>{selectedService.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#ddd', marginBottom: '4px' }}>
                <span>Specialist:</span> <strong>{selectedStylist.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#ddd' }}>
                <span>Slot:</span> <strong>{bookingDate} at {bookingTime}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" className="btn-outline" onClick={handlePrevStep}>Back</button>
              <button type="submit" className="btn-lavish" disabled={isSubmitting}>
                {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
              </button>
            </div>
          </form>
        )}

        {/* Step 5: Automated Confirmation & Direct WhatsApp Sync */}
        {step === 5 && (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div style={{
              width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.15)', border: '2px solid #25d366',
              color: '#25d366', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem'
            }}>
              <i className="fas fa-check"></i>
            </div>
            
            <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '5px' }}>Booking Reserved!</h3>
            <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '20px' }}>
              Your reference code: <strong style={{ color: 'var(--primary)', letterSpacing: '1px' }}>{bookingRef}</strong>
            </p>

            <div style={{ background: '#182026', padding: '20px', borderRadius: '12px', textAlign: 'left', marginBottom: '25px', border: '1px solid #2a343d' }}>
              <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>👤 <strong>Client Name:</strong> {clientInfo.name}</p>
              <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>💅 <strong>Service:</strong> {selectedService.name} ({selectedService.price})</p>
              <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>📅 <strong>Date & Time:</strong> {bookingDate} @ {bookingTime}</p>
              <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>⭐ <strong>Specialist:</strong> {selectedStylist.name}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={getWhatsAppMessageUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lavish"
                style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)', color: '#fff', borderColor: '#25d366' }}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: '1.3rem' }}></i> Confirm Instantly via WhatsApp
              </a>

              <button className="btn-outline" onClick={resetAndClose}>
                Done & Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
