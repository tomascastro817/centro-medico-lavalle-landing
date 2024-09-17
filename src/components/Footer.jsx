// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información de contacto */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">Centro Médico Lavalle</h3>
            <p className="text-gray-400 mb-2">
              Calle Ejemplo 123, Ciudad, País
            </p>
            <p className="text-gray-400 mb-2">
              Teléfono: (123) 456-7890
            </p>
            <p className="text-gray-400">
              Email: contacto@centromedicolavalle.com
            </p>
          </div>

          {/* Enlaces de navegación */}
          <div className="flex flex-col md:flex-row md:space-x-6 mb-6 md:mb-0">
            <a href="#services" className="text-gray-400 hover:text-sky-500 mb-2 md:mb-0">Servicios</a>
            <a href="#team" className="text-gray-400 hover:text-sky-500 mb-2 md:mb-0">Equipo Médico</a>
            <a href="#location" className="text-gray-400 hover:text-sky-500 mb-2 md:mb-0">Ubicación</a>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target='blank' className="text-gray-400 hover:text-sky-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://x.com/" target='blank' className="text-gray-400 hover:text-sky-500">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/" target='blank' className="text-gray-400 hover:text-sky-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/" target='blank' className="text-gray-400 hover:text-sky-500">
              <FaLinkedinIn size={20} />
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
