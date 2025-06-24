import React from 'react';
import { motion } from 'framer-motion';
import qrImage from './assets/qr-code.png'; // Asegúrate de tener tu imagen QR en la carpeta assets

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-rose-100 to-pink-100 overflow-hidden">
      {/* Fondo con opacidad */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9')] bg-cover bg-center opacity-20"></div>
      
      {/* Contenido principal */}
      <div className="container mx-auto h-full flex items-center relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-rose-800 mb-4">
            Belleza que <span className="text-pink-600">Inspira</span>
          </h1>
          <p className="text-xl text-rose-900 mb-8">
            Descubre los productos de maquillaje premium que realzan tu belleza natural.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
          >
            Ver Colección
          </motion.button>
        </motion.div>
      </div>

      {/* QR en esquina inferior derecha */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 z-20 bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur-sm flex flex-col items-center"
      >
        <img 
          src={qrImage} 
          alt="Código QR para más información" 
          className="w-32 h-32 md:w-40 md:h-40" // Tamaño mediano (responsive)
        />
        <p className="text-sm text-rose-800 mt-2 font-medium">Escanea para descubrir más</p>
      </motion.div>

      {/* Efecto decorativo opcional */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pink-100 to-transparent z-10"></div>
    </section>
  );
}