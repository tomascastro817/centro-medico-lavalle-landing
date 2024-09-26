// src/components/HorarioAtencion.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Direccion = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white py-4 shadow-lg sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      initial={{ y: -180, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex items-center mb-2 md:mb-0">
          <FaMapMarkerAlt className="text-4xl mr-4 text-white animate-pulse" />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold transition-all duration-300 hover:text-sky-200">
              Centro Médico Lavalle
            </h1>
            <h4 className="text-md transition-all duration-300 hover:text-sky-100">
              Lavalle 1351, San Miguel de Tucumán
            </h4>
          </div>
        </div>
        



      </div>
    </motion.div>
  );
};

export default Direccion;
