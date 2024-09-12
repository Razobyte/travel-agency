import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/whButton';
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/about'));
const ContactUs = lazy(() => import('./components/Contact/contactus'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const Services = lazy(() => import('./components/Services/Services'));
const Taxi = lazy(() => import('./components/Services/Taxi/taxi'));
const Rental = lazy(() => import('./components/Services/Rental/rental'));
const Tempo = lazy(() => import('./components/Services/tempo/Tempo'));
const Airport = lazy(() => import('./components/Services/airport/Airport'));

// Loading component
const Loading = () => <div>Loading...</div>;

export default function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Suspense fallback={<Loading />}>
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
      </Suspense>
      <Footer />
    </>
  );
}