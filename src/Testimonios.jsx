import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const testimonios = [
  { 
    id: 1, 
    nombre: "Ana López", 
    comentario: "¡Los labiales son increíbles! No se secan y duran todo el día. Nunca había encontrado un producto tan resistente.", 
    rating: 5,
    foto: "https://randomuser.me/api/portraits/women/43.jpg"
  },
  { 
    id: 2, 
    nombre: "María García", 
    comentario: "La mejor base que he usado en mi vida. Cubre perfectamente sin verse pesada y mi piel luce radiante todo el día.", 
    rating: 5,
    foto: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  { 
    id: 3, 
    nombre: "Lucía Martínez", 
    comentario: "Me enamoré de la paleta de sombras. Los colores son pigmentados y se mezclan como un sueño. ¡Mi nueva favorita!", 
    rating: 4,
    foto: "https://randomuser.me/api/portraits/women/76.jpg"
  },
];

const StarRating = ({ rating }) => {
  return (
    <div id="testimonios" className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-400 blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-rose-300 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
            Voces de <span className="text-pink-600">Confianza</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre lo que nuestras clientas dicen sobre la experiencia Belleza Glam
          </p>
        </motion.div>
        
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper max-w-4xl mx-auto"
          breakpoints={{
            768: {
              slidesPerView: 1.2,
              centeredSlides: true
            }
          }}
        >
          {testimonios.map((testimonio) => (
            <SwiperSlide key={testimonio.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-rose-100"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <img 
                      src={testimonio.foto} 
                      alt={testimonio.nombre} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {testimonio.rating}
                    </div>
                  </div>
                  
                  <StarRating rating={testimonio.rating} />
                  
                  <blockquote className="text-gray-700 italic mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                    "{testimonio.comentario}"
                  </blockquote>
                  
                  <div className="text-center">
                    <p className="font-semibold text-rose-800 text-xl">{testimonio.nombre}</p>
                    <p className="text-pink-600 text-sm">Cliente Satisfecha</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          {/* <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
            Ver Más Testimonios
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}