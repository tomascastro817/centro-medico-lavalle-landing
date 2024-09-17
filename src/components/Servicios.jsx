// src/components/Servicios.jsx
import React from 'react';
import { FaHeart, FaBrain, FaBone, FaAppleAlt, FaSmile, FaBriefcaseMedical, FaStethoscope } from 'react-icons/fa';

const servicios = [
  { id: 1, title: 'Cardiología', description: 'Atención especializada para enfermedades del corazón.', icon: <FaHeart className="text-red-500 text-4xl" /> },
  { id: 2, title: 'Endocrinología', description: 'Tratamiento de trastornos hormonales y metabólicos.', icon: <FaBrain className="text-purple-500 text-4xl" /> },
  { id: 3, title: 'Traumatología', description: 'Tratamiento de lesiones y enfermedades del sistema musculoesquelético.', icon: <FaBone className="text-orange-500 text-4xl" /> },
  { id: 4, title: 'Nutricionista', description: 'Asesoramiento sobre alimentación y dieta equilibrada.', icon: <FaAppleAlt className="text-green-500 text-4xl" /> },
  { id: 5, title: 'Psicología', description: 'Apoyo emocional y psicológico para el bienestar mental.', icon: <FaSmile className="text-blue-500 text-4xl" /> },
  { id: 6, title: 'Medicina Laboral', description: 'Evaluación y prevención de enfermedades relacionadas con el trabajo.', icon: <FaBriefcaseMedical className="text-teal-500 text-4xl" /> },
  { id: 7, title: 'Medicina General', description: 'Atención médica general y prevención de enfermedades.', icon: <FaStethoscope className="text-yellow-500 text-4xl" /> },
];

const Servicios = () => {
  return (
    <section id="services" className="py-16 bg-sky-50">
      <div className="container mx-auto px-6">
        {/* Title with Gradient and Shadow */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-500 to-sky-300">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mr-4">
                  {servicio.icon}
                </div>
                <h3 className="text-xl font-semibold">{servicio.title}</h3>
              </div>
              <p className="text-gray-600">{servicio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
