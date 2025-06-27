import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaPinterest } from 'react-icons/fa';
import Licencia from '../Licencia';

export default function Footer() {
  return (
    <footer className="bg-rose-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Belleza Glam</h3>
            <p className="text-rose-200">Productos de maquillaje premium para realzar tu belleza.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-rose-200 hover:text-white">Inicio</a></li>
              <li><a href="#" className="text-rose-200 hover:text-white">Productos</a></li>
              <li><a href="#" className="text-rose-200 hover:text-white">Tutoriales</a></li>
              <li><a href="#" className="text-rose-200 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <p className="text-rose-200">info@bellezaglam.com</p>
            <p className="text-rose-200">+1 (123) 456-7890</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-rose-200 hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-rose-200 hover:text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-rose-200 hover:text-white"><FaTiktok size={20} /></a>
              <a href="#" className="text-rose-200 hover:text-white"><FaPinterest size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-rose-700 mt-8 pt-8 text-center text-rose-300">
          <Licencia />
        </div>
      </div>
    </footer>
  );
}