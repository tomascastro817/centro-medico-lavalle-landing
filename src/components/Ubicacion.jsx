// src/components/Ubicacion.jsx
import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-primary-500 text-xl" />,
    bg: 'bg-primary-50 group-hover:bg-primary-100',
    title: 'Dirección',
    content: 'Lavalle 1351, San Miguel de Tucumán, Argentina.',
    link: 'https://maps.google.com?q=Lavalle+1351+San+Miguel+de+Tucumán',
    linkLabel: 'Ver en Maps',
  },
  {
    icon: <FaClock className="text-amber-500 text-xl" />,
    bg: 'bg-amber-50 group-hover:bg-amber-100',
    title: 'Horario de Atención',
    content: 'Lunes a Sábado · 9:00 AM – 9:00 PM',
    link: null,
  },
  {
    icon: <FaPhone className="text-green-500 text-xl" />,
    bg: 'bg-green-50 group-hover:bg-green-100',
    title: 'Teléfono',
    content: '+54 9 381 438-9069',
    link: 'tel:3814389069',
    linkLabel: 'Llamar ahora',
  },
  {
    icon: <FaEnvelope className="text-sky-500 text-xl" />,
    bg: 'bg-sky-50 group-hover:bg-sky-100',
    title: 'Email',
    content: 'centromedicolavalle@gmail.com',
    link: 'mailto:centromedicolavalle@gmail.com',
    linkLabel: 'Enviar email',
  },
];

const Ubicacion = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Cómo encontrarnos
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-800 via-primary-600 to-primary-400">
            Encuéntranos
          </h2>
          <p className="text-slate-500 text-lg">
            Estamos ubicados en el corazón de San Miguel de Tucumán para tu mayor comodidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Info Panel */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300"
              >
                <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl ${item.bg} transition-colors`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">{item.title}</h4>
                  <p className="text-slate-800 font-medium">{item.content}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-block text-primary-600 text-sm font-semibold mt-1 hover:text-primary-800 transition-colors"
                    >
                      {item.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/3812319699"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-green-200 hover:shadow-green-300 transition-all duration-300 hover:-translate-y-0.5"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <FaWhatsapp className="text-2xl" />
              Escribir por WhatsApp
            </motion.a>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 min-h-[420px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Ubicación en Google Maps"
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.113216636891!2d-65.22226492368983!3d-26.836351090019225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c721a6d05ff%3A0xd655cec7865af105!2sAYA%2C%20Lavalle%201351%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Provincia%20de%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1727101103138!5m2!1ses-419!2sar"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
