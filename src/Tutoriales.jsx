import React from 'react';
import { FaPlay } from 'react-icons/fa';

const tutorials = [
  { id: 1, titulo: "Maquillaje de día", duracion: "5:20", thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e" },
  { id: 2, titulo: "Smoky eyes intenso", duracion: "8:45", thumbnail: "https://images.unsplash.com/photo-1519699047748-de8e457a634e" },
  { id: 3, titulo: "Contorno perfecto", duracion: "6:30", thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" },
];

export default function Tutoriales() {
  return (
    <section id="tutoriales" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-rose-800 mb-12">
          Aprende con <span className="text-pink-600">nuestros tutoriales</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div 
                className="h-64 bg-cover bg-center" 
                style={{ backgroundImage: `url(${tutorial.thumbnail})` }}
              >
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full">
                    <FaPlay size={20} />
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg text-rose-800">{tutorial.titulo}</h3>
                <p className="text-gray-600">{tutorial.duracion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}