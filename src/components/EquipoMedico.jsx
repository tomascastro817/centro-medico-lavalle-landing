// src/components/EquipoMedico.jsx
import React from 'react';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { equipoData } from '../data/equipo';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const EquipoMedico = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Nuestros profesionales
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-800 via-primary-600 to-primary-400">
            Nuestro Equipo Médico
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Profesionales altamente capacitados, listos para brindarte la mejor atención.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {equipoData.map((miembro) => (
            <motion.div
              key={miembro.id}
              variants={cardVariants}
              className="group bg-white border border-slate-100 shadow-lg rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-100/40 transition-all duration-400 flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img
                  src={miembro.imagen}
                  loading="lazy"
                  alt={`Dr/a. ${miembro.nombre}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-grow relative">
                {/* Specialty pill */}
                <div className="absolute -top-4 left-7">
                  <span className="inline-block bg-gradient-to-r from-primary-600 to-primary-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
                    {miembro.especialidad}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold mt-4 mb-2 text-slate-800 leading-snug">
                  {miembro.nombre}
                </h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                  {miembro.descripcion}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <a
                    href={miembro.turnoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Agendar turno con ${miembro.nombre}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3 px-4 rounded-2xl hover:bg-primary-600 transition-colors duration-300 text-sm shadow-sm group/btn"
                  >
                    <FaCalendarAlt className="group-hover/btn:scale-110 transition-transform" />
                    Agendar turno
                  </a>
                  <a
                    href={`https://wa.me/${miembro.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contactar a ${miembro.nombre} por WhatsApp`}
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-50 border border-green-200 text-green-600 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 rounded-2xl shadow-sm"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EquipoMedico;