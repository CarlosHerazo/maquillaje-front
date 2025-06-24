import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id="contacto" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
      {/* Elementos decorativos abstractos */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-pink-100/30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-100/30 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado con diseño circular */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <div className="relative w-64 h-64 rounded-full border-4 border-pink-200 p-2 mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-rose-200 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-center text-rose-800 px-6">
                <span className="text-pink-600 block">Contáctanos</span> 
                para Asesoría
              </h2>
            </div>
          </div>
          <p className="text-xl text-rose-900 max-w-2xl text-center">
            Resolvemos todas tus dudas sobre nuestros productos y servicios de belleza
          </p>
        </motion.div>

        {/* Diseño en forma de flor */}
        <div className="relative">
          {/* Pétalos (tarjetas de contacto) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pétalo 1 - Ubicación */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border-2 border-pink-100 transform rotate-3 hover:rotate-0 transition-transform duration-300"
            >
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaMapMarkerAlt className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center text-rose-800 mb-4">Visítanos</h3>
              <p className="text-rose-800 text-center mb-2">Centro Comercial El Tesoro</p>
              <p className="text-rose-800 text-center">Local 234, Medellín</p>
              <div className="mt-6 h-40 rounded-xl overflow-hidden border border-rose-100">
                <iframe
                  title="Ubicación"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-75.5619011856863!3d6.201505595493862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468280b4f3643d%3A0x1a6d3f9cba9f4c0e!2sPlaza%20Botero!5e0!3m2!1sen!2sco!4v1620000000000!5m2!1sen!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Pétalo 2 - Formulario (centro de la flor) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl border-2 border-rose-200 md:order-first lg:order-none z-10"
            >
              <h3 className="text-2xl font-semibold text-center text-rose-800 mb-6">Escríbenos</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre completo *"
                  className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition bg-rose-50/50"
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Correo electrónico *"
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition bg-rose-50/50"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono / WhatsApp"
                    className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition bg-rose-50/50"
                  />
                </div>
                <select className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition bg-rose-50/50">
                  <option value="">Servicio de interés</option>
                  <option value="maquillaje">Maquillaje Profesional</option>
                  <option value="cursos">Cursos de Automaquillaje</option>
                  <option value="productos">Asesoría de Productos</option>
                </select>
                <textarea
                  rows="4"
                  placeholder="Mensaje *"
                  className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition bg-rose-50/50"
                  required
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Enviar Mensaje
                </motion.button>
              </form>
            </motion.div>

            {/* Pétalo 3 - Contacto */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border-2 border-pink-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300"
            >
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaPhone className="text-rose-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center text-rose-800 mb-4">Contáctanos</h3>
              
              <div className="space-y-4">
                <div className="flex items-center bg-pink-50 rounded-xl p-4">
                  <FaPhone className="text-pink-600 mr-3" />
                  <div>
                    <p className="text-sm text-rose-700">Línea de atención</p>
                    <p className="text-rose-900 font-medium">+57 4 444 5555</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-rose-50 rounded-xl p-4">
                  <FaPhone className="text-rose-600 mr-3" />
                  <div>
                    <p className="text-sm text-rose-700">WhatsApp</p>
                    <p className="text-rose-900 font-medium">+57 310 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-pink-50 rounded-xl p-4">
                  <FaEnvelope className="text-pink-600 mr-3" />
                  <div>
                    <p className="text-sm text-rose-700">Correo electrónico</p>
                    <p className="text-rose-900 font-medium">asesoria@bellezaglam.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-center font-semibold mb-4 text-rose-800">Síguenos</h4>
                <div className="flex justify-center space-x-4">
                  <motion.a 
                    href="#" 
                    className="bg-pink-100 p-3 rounded-full text-pink-600 hover:text-white hover:bg-pink-600 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <FaInstagram size={18} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-rose-100 p-3 rounded-full text-rose-600 hover:text-white hover:bg-rose-600 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <FaTiktok size={18} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="bg-red-100 p-3 rounded-full text-red-600 hover:text-white hover:bg-red-600 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <FaPinterest size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}