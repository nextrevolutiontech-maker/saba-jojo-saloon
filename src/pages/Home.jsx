import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Deals from '../components/Deals';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Blogs from '../components/Blogs';

const Home = ({ onOpenBooking }) => (
  <>
    <Hero onOpenBooking={onOpenBooking} />
    <About onOpenBooking={onOpenBooking} />
    <Services onOpenBooking={onOpenBooking} />
    <Deals onOpenBooking={onOpenBooking} />
    <Testimonials />
    <Gallery />
    <Blogs />
  </>
);

export default Home;
