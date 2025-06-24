import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const productos = [
  { id: 1, nombre: "Paleta de Sombras", precio: "$45.99", imagen: "https://images.unsplash.com/photo-1596462502278-27bfdc403348" },
  { id: 2, nombre: "Base Líquida", precio: "$32.50", imagen: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137" },
  { id: 3, nombre: "Labial Matte", precio: "$18.99", imagen: "https://images.unsplash.com/photo-1586495777744-4413f21062fa" },
  { id: 4, nombre: "Rubor en Crema", precio: "$24.99", imagen: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b" },
];

export default function Productos() {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-rose-800 mb-12">
          Nuestros <span className="text-pink-600">Productos</span>
        </h2>
        
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {productos.map((producto) => (
            <SwiperSlide key={producto.id}>
              <div className="bg-rose-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${producto.imagen})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rose-800">{producto.nombre}</h3>
                  <p className="text-pink-600 font-medium mt-2">{producto.precio}</p>
                  {/* <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm transition">
                    Añadir al carrito
                  </button> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}