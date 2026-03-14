// src/components/Footer.jsx
import React from 'react';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa';
import logo from '../image/logo-removebg-preview.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Centro Médico Lavalle" className="h-16 w-auto mb-5 brightness-0 invert opacity-90" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Ofreciendo atención médica integral y de excelencia para el cuidado de tu salud y la de tu familia desde hace más de 10 años.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/centromedico_lavalle/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/3812319699"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: 'Servicios', href: '#services' },
                { label: 'Equipo Médico', href: '#team' },
                { label: 'Testimonios', href: '#comentarios' },
                { label: 'Ubicación', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-500 mt-0.5 flex-shrink-0" size={14} />
                <span className="text-slate-400 text-sm">Lavalle 1351, S.M. de Tucumán</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary-500 flex-shrink-0" size={14} />
                <a href="tel:3814389069" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                  +54 9 381 438-9069
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary-500 flex-shrink-0" size={14} />
                <a href="mailto:centromedicolavalle@gmail.com" className="text-slate-400 hover:text-primary-400 transition-colors text-sm break-all">
                  centromedicolavalle@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Horarios</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaClock className="text-primary-500 mt-0.5 flex-shrink-0" size={14} />
                <div>
                  <p className="text-slate-300 text-sm font-medium">Lunes a Viernes</p>
                  <p className="text-slate-500 text-xs">9:00 AM – 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-primary-500 mt-0.5 flex-shrink-0" size={14} />
                <div>
                  <p className="text-slate-300 text-sm font-medium">Sábados</p>
                  <p className="text-slate-500 text-xs">9:00 AM – 1:00 PM</p>
                </div>
              </li>
              <li className="mt-2">
                <a
                  href="#team"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-primary-900/30"
                >
                  Agendar Turno
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © {currentYear} Centro Médico Lavalle · San Miguel de Tucumán, Argentina
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            Diseñado con <FaHeart className="text-red-500 text-[10px]" /> por{' '}
            <a
              href="https://tomascastro.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-400 transition-colors font-medium"
            >
              Tomás Castro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
