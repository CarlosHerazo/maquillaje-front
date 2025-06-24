import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSmile, FaUsers, FaStore } from 'react-icons/fa';

const Counter = ({ target, duration, icon, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + increment;
      });
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-xl shadow-md text-center"
    >
      <div className="text-pink-500 text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <motion.p className="text-5xl font-bold text-rose-800">
        {Math.floor(count)}+
      </motion.p>
      <p className="text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
};

export default function Estadisticas() {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-100 to-pink-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Counter target={10000} duration={2} icon={<FaSmile />} label="Clientes Felices" />
          <Counter target={500} duration={3} icon={<FaStore />} label="Productos Vendidos" />
          <Counter target={150} duration={1.5} icon={<FaUsers />} label="Reseñas 5 Estrellas" />
        </div>
      </div>
    </section>
  );
}