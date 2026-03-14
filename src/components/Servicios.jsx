// src/components/Servicios.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { serviciosData } from '../data/servicios';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Servicios = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
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
            Lo que ofrecemos
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-800 via-primary-600 to-primary-400">
            Nuestros Servicios
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Brindamos atención personalizada en múltiples disciplinas para cuidar de ti y tu familia.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {serviciosData.map((servicio) => (
            <motion.div
              key={servicio.id}
              variants={cardVariants}
              className="group bg-white border border-slate-100 shadow-sm rounded-2xl p-7 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-100/40 hover:border-primary-100 transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary-50 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300 mb-5">
                {servicio.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary-700 transition-colors">
                {servicio.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {servicio.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;
