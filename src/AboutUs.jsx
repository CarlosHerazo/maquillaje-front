import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaRegSmile, FaLeaf } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-6">
        {/* Encabezado con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-rose-800 mb-4">
            Descubre <span className="text-pink-600">Nuestra Esencia</span>
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que maquillaje, creamos experiencias de belleza auténtica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen con efecto parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9')] bg-cover bg-center"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Desde 2015</h3>
              <p>Inspirando confianza a través de la belleza</p>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-rose-800 mb-6">
              Nuestra Filosofía
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              En Belleza Glam, creemos que el maquillaje es una forma de arte personal. 
              Nuestra misión es proporcionar productos de alta calidad que no solo realcen 
              tu belleza exterior, sino que también te empoderen para expresar tu 
              individualidad con confianza.
            </p>

            {/* Valores destacados */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <FaPalette className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-rose-800 mb-2">Creatividad</h4>
                  <p className="text-gray-600">
                    Innovamos constantemente para ofrecerte tendencias y técnicas de vanguardia
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <FaRegSmile className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-rose-800 mb-2">Autenticidad</h4>
                  <p className="text-gray-600">
                    Promovemos la belleza real, sin estándares imposibles
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <FaLeaf className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-rose-800 mb-2">Sostenibilidad</h4>
                  <p className="text-gray-600">
                    Ingredientes limpios y empaques ecológicos
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all"
            >
              Conoce Nuestra Historia
            </motion.button>
          </motion.div>
        </div>

        {/* Equipo (opcional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-center text-rose-800 mb-12">
            Nuestro <span className="text-pink-600">Equipo</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ana López", role: "Fundadora & CEO", image: "https://randomuser.me/api/portraits/women/43.jpg" },
              { name: "Carlos Mendez", role: "Director Creativo", image: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "María García", role: "Experta en Productos", image: "https://randomuser.me/api/portraits/women/65.jpg" },
              { name: "Lucía Fernández", role: "Artista de Maquillaje", image: "https://randomuser.me/api/portraits/women/76.jpg" },
            ].map((person, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${person.image})` }}></div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-lg text-rose-800">{person.name}</h4>
                  <p className="text-pink-600">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}