// src/components/Footer.jsx
import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información de contacto */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-3 text-sky-500">Centro Médico Lavalle</h3>
            <p className="text-gray-300 mb-2">Calle Lavalle 1351, San Miguel de Tucuman, Argentina</p>
            <p className="text-gray-300">Email: centromedicolavalle@gmail.com</p>
          </div>

          {/* Enlaces de navegación */}
          <div className="flex flex-col md:flex-row md:space-x-6 mb-6 md:mb-0">
            <a href="#team" className="text-gray-300 hover:text-sky-400 hover:underline mb-2 md:mb-0 transition duration-300">Equipo Médico</a>
            <a href="#location" className="text-gray-300 hover:text-sky-400 hover:underline mb-2 md:mb-0 transition duration-300">Contacto</a>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/centromedico_lavalle/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me/3812319699" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition duration-300">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Centro Médico Lavalle. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
