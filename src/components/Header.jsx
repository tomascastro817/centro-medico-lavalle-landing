// src/components/Header.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../image/logo-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="static bg-sky-100 opacity-85 text-black py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-8">
        {/* Logo */}
        <img
          src={logo} // Reemplaza con la ruta a tu logo
          alt="Centro Médico Lavalle"
          className="h-20 w-auto"
        />

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#team" className="text-lg font-semibold hover:text-sky-500 transition">Equipo médico</a>
          <a href="#contact" className="text-lg font-semibold hover:text-sky-500 transition">Contacto</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-sky-100 opacity-85 text-black py-4`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 3.3, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <nav className="flex flex-col items-center space-y-4">
          <a href="#team" className="text-lg font-semibold hover:text-gray-300 transition">Equipo Médico</a>
          <a href="#contact" className="text-lg font-semibold hover:text-gray-300 transition">Contacto</a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
