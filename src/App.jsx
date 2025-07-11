import React from 'react';
import Navbar from './components/NavBar';
import Hero from './Hero';
import Productos from './Productos';
import Estadisticas from './Estadisticas';
import AboutUs from './AboutUs';
import Testimonios from './Testimonios';
import Tutoriales from './Tutoriales';
import Footer from './components/Footer';
import Contacto from './Contacto';
import Nosotros from './Nosotros';
import RssGenerator from './RssSubscribe';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <AboutUs />
        <Productos />
        <Estadisticas />
        <Testimonios />
        <Tutoriales />
        <Contacto />
        <RssGenerator /> 
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}