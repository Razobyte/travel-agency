import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/about';
import ContactUs from './components/Contact/contactus';
import Gallery from './components/Gallery/Gallery';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Taxi from './components/Services/Taxi/taxi';
import Rental from './components/Services/Rental/rental';
import Tempo from './components/Services/tempo/Tempo';
import Airport from './components/Services/airport/Airport';
import Services from './components/Services/Services';
import WhatsAppButton from './components/whButton';
export default function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)

  }, [location])
  return (
    <>
      <Navbar /> {/* Navbar should be outside Routes */}
      <WhatsAppButton />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ourservices" element={<Services />} />
        <Route path="/ourservices/taxi" element={<Taxi />} />
        <Route path="/ourservices/rental" element={<Rental />} />
        <Route path="/ourservices/tempo" element={<Tempo />} />
        <Route path="/ourservices/airport" element={<Airport />} />

      </Routes>
      <Footer />
    </>
  );
}
