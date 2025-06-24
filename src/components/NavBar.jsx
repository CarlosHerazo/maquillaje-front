import React, { useState } from 'react';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Enlaces actualizados para coincidir con las secciones de tu página
  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Tutoriales", href: "#tutoriales" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo - enlazado a la sección de inicio */}
          <motion.a 
            href="#inicio" 
            className="text-2xl font-bold text-rose-800"
            whileHover={{ scale: 1.05 }}
          >
            Belleza<span className="text-pink-600">Glam</span>
          </motion.a>

          {/* Menú para Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-pink-600 transition"
                whileHover={{ 
                  scale: 1.05,
                  color: "#db2777" // pink-600
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Iconos - Solo búsqueda (carrito comentado) */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-pink-600"
            >
              <FaSearch size={18} />
            </motion.button>
            
            {/* Carrito comentado como solicitaste
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="relative text-gray-700 hover:text-pink-600"
            >
              <FaShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </motion.button>
            */}
          </div>

          {/* Menú Mobile (Hamburguesa) */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú móvil"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Barra de Búsqueda (Desktop) */}
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="hidden md:block mt-4"
          >
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </motion.div>
        )}

        {/* Menú Mobile (Desplegable) */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-pink-600 px-2 py-1 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <button 
                  className="flex items-center text-gray-700 hover:text-pink-600 transition-colors"
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    setIsMenuOpen(false);
                  }}
                >
                  <FaSearch size={16} className="mr-2" /> Buscar
                </button>
                
                {/* Carrito comentado en versión móvil también
                <button className="flex items-center text-gray-700 hover:text-pink-600">
                  <FaShoppingBag size={16} className="mr-2" /> Carrito (3)
                </button>
                */}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}