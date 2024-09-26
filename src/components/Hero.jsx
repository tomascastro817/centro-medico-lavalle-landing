// src/components/Hero.jsx
import React from 'react';
import { FaStethoscope } from 'react-icons/fa'; // Icono de estetoscopio
import { motion } from 'framer-motion';
import lavalle from '../image/LAVALLE.jpg';

const Hero = () => {
  return (
    <section className="relative text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }} // Escala inicial para el zoom
        animate={{ scale: 1 }} // Escala final
        transition={{ duration: 1.5, ease: 'easeInOut', loop: Infinity, repeatDelay: 1 }} // Animación continua
      >
        <img
          src={lavalle} // Reemplaza con la ruta a tu imagen de fondo
          alt="Fondo"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24">
        {/* Icono */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ scale: 3.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.0 }}
        >
          <FaStethoscope className="text-sky-500 text-6xl md:text-7xl lg:text-8xl animate-pulse" />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight shadow-md"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Bienvenido al <br /> Centro Médico Lavalle
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-8 px-4 md:px-0"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ofrecemos atención médica de calidad en diversas especialidades.
        </motion.p>
        <motion.a
          href="#team"
          className="bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-900 transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          initial={{ scale: 3.0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        >
          Agendar un turno
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
