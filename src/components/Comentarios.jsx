// src/components/Comentarios.jsx
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Comentarios = () => {
  const testimonios = [
    {
      nombre: "Ana Pérez",
      comentario: "El servicio en el Centro Médico Lavalle ha sido excepcional. Los doctores son muy profesionales y la atención es excelente. ¡Altamente recomendado!",
      foto: "https://cdn-3.expansion.mx/dims4/default/86055f8/2147483647/strip/true/crop/1254x836+0+0/resize/1800x1200!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fce%2F00%2F8661848841f29e5f1aa6daa204fd%2Fmujer-empresaria.jpg" // Reemplaza con la URL de la foto real
    },
    {
      nombre: "Juan López",
      comentario: "Tuve una consulta con el especialista en cardiología y quedé muy satisfecho con el tratamiento y el cuidado recibido. El personal es muy amable.",
      foto: "https://t2.uc.ltmcdn.com/es/posts/6/5/8/por_que_los_hombres_tienen_barba_31856_600_square.jpg" // Reemplaza con la URL de la foto real
    },
    {
      nombre: "María García",
      comentario: "El equipo médico es muy profesional y atento. La experiencia en general fue muy positiva y me sentí bien cuidado durante toda mi visita.",
      foto: "https://www.sindicatodeactoresdearagon.es//images/catalogo/galerias/ana-garcia/_MG_2481.jpg" // Reemplaza con la URL de la foto real
    }
  ];

  return (
    <section id="comentarios" className="py-16 bg-sky-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-500 to-sky-300">
          Lo que dicen nuestros pacientes
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="max-w-md mx-4 mb-8 p-8 bg-white rounded-lg shadow-xl relative">
              <FaQuoteLeft className="absolute top-4 left-4 text-gray-300 text-4xl" />
              <div className="flex items-center mb-4">
                <img
                  src={testimonio.foto}
                  alt={testimonio.nombre}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonio.nombre}</h3>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonio.comentario}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comentarios;
