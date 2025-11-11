import React from 'react'
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import AboutSection from './component/AboutSection';
import VisiMisiSection from './component/VisiMisiSection';
import GallerySection from './component/Gallery';
import NewsSection from './component/NewsSection';
import ContactSection from './component/Contact';
import CTASection from './component/CTASection';
import Footer from './component/Footer';

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisiMisiSection />
      <GallerySection />
      <NewsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
