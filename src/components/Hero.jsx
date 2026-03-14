// src/components/Hero.jsx
import React from 'react';
import { FaStethoscope, FaCalendarCheck, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import lavalle from '../image/LAVALLE.jpg';

const stats = [
  { value: '6+', label: 'Especialistas' },
  { value: '7', label: 'Especialidades' },
  { value: '10+', label: 'Años de experiencia' },
  { value: '24/7', label: 'Atención urgencias' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <section className="relative text-white min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28">
      {/* Background Image with subtle parallax feel */}
      <div className="absolute inset-0">
        <img
          src={lavalle}
          alt="Centro Médico Lavalle"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/92 via-slate-900/75 to-primary-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      </div>

      {/* Decorative circle accents */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-12 lg:px-24 max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 text-sm font-semibold px-5 py-2 rounded-full backdrop-blur-sm">
            <FaStethoscope className="text-primary-400" />
            Atención médica integral
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-balance"
        >
          Bienvenido al{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-200 to-sky-200">
            Centro Médico Lavalle
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Ofrecemos atención médica integral y de excelencia en diversas especialidades.
          Tu salud y bienestar son nuestra prioridad.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#team"
            className="inline-flex items-center justify-center gap-2.5 bg-primary-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-500 transition-all duration-300 shadow-xl shadow-primary-900/40 hover:shadow-primary-500/40 hover:-translate-y-0.5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaCalendarCheck className="text-lg" />
            Agendar un turno
          </motion.a>
          <motion.a
            href="#services"
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver servicios
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-sky-200 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        aria-label="Ir a servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors z-10 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaChevronDown size={22} />
      </motion.a>
    </section>
  );
};

export default Hero;
