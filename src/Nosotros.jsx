import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaEye, FaHandsHelping, FaStar } from 'react-icons/fa';

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pink-100/20 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-rose-100/20 blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-rose-800 mb-4">
            <span className="text-pink-600">Belleza Glam</span> - Nuestra Esencia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-6"></div>
          <p className="text-xl text-rose-900 max-w-3xl mx-auto">
            Transformando rostros, realzando belleza y empoderando a través del arte del maquillaje
          </p>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen o ilustración */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center">
              <FaPalette className="text-white text-8xl opacity-30" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white text-center px-8 drop-shadow-lg">
                El arte de resaltar tu belleza natural
              </h3>
            </div>
          </motion.div>

          {/* Texto descriptivo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-rose-800 mb-6">Quiénes Somos</h3>
            <p className="text-rose-900 mb-6 text-lg">
              En <span className="font-semibold text-pink-600">Belleza Glam</span>, somos apasionados artistas del maquillaje dedicados a resaltar la belleza única de cada persona. Con más de 10 años de experiencia en la industria, hemos perfeccionado el arte de transformar rostros mientras celebramos la individualidad.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-shrink-0 bg-pink-100 p-3 rounded-full">
                <FaStar className="text-pink-600 text-xl" />
              </div>
              <p className="text-rose-800">
                <span className="font-semibold">+5,000 clientes</span> satisfechos en toda Colombia
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-rose-100 p-3 rounded-full">
                <FaHandsHelping className="text-rose-600 text-xl" />
              </div>
              <p className="text-rose-800">
                <span className="font-semibold">Equipo certificado</span> en las últimas técnicas de maquillaje profesional
              </p>
            </div>
          </motion.div>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-pink-500 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-4 rounded-full mr-4">
                <FaHandsHelping className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-rose-800">Nuestra Misión</h3>
            </div>
            <p className="text-rose-900">
              Empoderar a cada persona a través del maquillaje, brindando productos de alta calidad y servicios profesionales que resalten su belleza única. Nos comprometemos a educar, inspirar y transformar, creando experiencias que aumenten la autoestima y la confianza de nuestros clientes.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-rose-500 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-rose-100 p-4 rounded-full mr-4">
                <FaEye className="text-rose-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-rose-800">Nuestra Visión</h3>
            </div>
            <p className="text-rose-900">
              Ser reconocidos como el estudio de maquillaje líder en innovación y calidad en Latinoamérica, expandiendo nuestra presencia a las principales ciudades mientras mantenemos nuestro compromiso con la excelencia artística y la satisfacción del cliente. Aspiramos a crear una comunidad donde el maquillaje sea una herramienta de autoexpresión y empoderamiento.
            </p>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 shadow-inner border border-rose-100"
        >
          <h3 className="text-2xl font-semibold text-center text-rose-800 mb-8">Nuestros Valores</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaStar className="text-pink-600 text-2xl" />, title: "Excelencia", text: "Calidad impecable en cada servicio" },
              { icon: <FaHandsHelping className="text-rose-600 text-2xl" />, title: "Empoderamiento", text: "Belleza que aumenta tu confianza" },
              { icon: <FaPalette className="text-pink-600 text-2xl" />, title: "Creatividad", text: "Soluciones únicas para cada rostro" },
              { icon: <FaEye className="text-rose-600 text-2xl" />, title: "Innovación", text: "Siempre a la vanguardia en técnicas" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-pink-100/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-lg text-rose-800 mb-2">{item.title}</h4>
                <p className="text-rose-700">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}