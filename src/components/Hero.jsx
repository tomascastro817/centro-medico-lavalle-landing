// src/components/Hero.jsx
import React from 'react';
import { FaHeartbeat } from 'react-icons/fa'; // Icono de corazón
import lavalle from '../image/LAVALLE.jpg';

const Hero = () => {
  return (
    <section className="relative text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={lavalle} // Reemplaza con la ruta a tu imagen de fondo
          alt="Fondo"
          className="w-full h-full object-cover"
        />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24">
        {/* Icono */}
        <div className="mb-6 flex justify-center">
          <FaHeartbeat className="text-sky-500 text-6xl md:text-7xl lg:text-8xl animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Bienvenido al <br /> Centro médico Lavalle
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Ofrecemos atención médica de calidad en diversas especialidades.
        </p>
        <a
          href="#contact"
          className="bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-700 transition-transform transform hover:scale-105"
        >
          Agendar un turno
        </a>
      </div>
    </section>
  );
};

export default Hero;
