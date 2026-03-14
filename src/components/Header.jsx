// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../image/logo-removebg-preview.png';

const navLinks = [
  { label: 'Servicios', href: '#services' },
  { label: 'Equipo Médico', href: '#team' },
  { label: 'Contacto', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBar(window.scrollY < 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <AnimatePresence>
        {showBar && (
          <motion.div
            className="bg-gradient-to-r from-primary-700 to-primary-600 text-white text-sm"
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-2 flex flex-col sm:flex-row items-center justify-between gap-1">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="flex-shrink-0 text-primary-200" />
                <span className="text-primary-50">Lavalle 1351, San Miguel de Tucumán</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-primary-100">
                  <FaClock className="text-primary-300" />
                  Lun–Sáb: 9:00 – 21:00
                </span>
                <a href="tel:3814389069" className="flex items-center gap-1.5 text-primary-100 hover:text-white transition-colors">
                  <FaPhone className="text-primary-300" />
                  381 438-9069
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <motion.header
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-8 py-3">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Centro Médico Lavalle"
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-600 hover:text-primary-600 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
            <a
              href="#team"
              className="ml-2 bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-primary-300/40 hover:-translate-y-0.5"
            >
              Agendar Turno
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden text-slate-700 hover:text-primary-600 transition-colors p-1"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden border-t border-slate-100 bg-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center py-6 space-y-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#team"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all"
                >
                  Agendar Turno
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Header;
