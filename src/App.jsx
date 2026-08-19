import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';
import './index.css';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleOpenBooking = (serviceId = null) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceId(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar onOpenBooking={handleOpenBooking} />
        
        <Routes>
          <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
          <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
        </Routes>

        <Footer onOpenBooking={handleOpenBooking} />
        
        {/* Floating WhatsApp Button */}
        <WhatsApp />

        {/* Global Automated Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialService={selectedServiceId}
        />
      </div>
    </Router>
  );
}

export default App;
