// src/components/Comentarios.jsx
import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonios = [
  {
    nombre: 'Ana Pérez',
    cargo: 'Paciente de Cardiología',
    comentario: 'El servicio en el Centro Médico Lavalle ha sido excepcional. Los doctores son muy profesionales y la atención es excelente. ¡Altamente recomendado!',
    estrellas: 5,
    avatar: 'AP',
  },
  {
    nombre: 'Juan López',
    cargo: 'Paciente de Traumatología',
    comentario: 'Tuve una consulta con el especialista en cardiología y quedé muy satisfecho con el tratamiento y el cuidado recibido. El personal es muy amable y atento.',
    estrellas: 5,
    avatar: 'JL',
  },
  {
    nombre: 'María García',
    cargo: 'Paciente de Psicología',
    comentario: 'El equipo médico es muy profesional. La experiencia en general fue muy positiva y me sentí bien cuidada durante toda mi visita. Totalmente recomendable.',
    estrellas: 5,
    avatar: 'MG',
  },
];

const avatarColors = [
  'from-primary-500 to-primary-700',
  'from-sky-500 to-sky-700',
  'from-indigo-500 to-indigo-700',
];

const Comentarios = () => {
  return (
    <section id="comentarios" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/10 text-primary-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-white/10">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            Lo que dicen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-sky-300">
              nuestros pacientes
            </span>
          </h2>
          <p className="text-primary-200/80 text-lg">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-primary-400/40 text-4xl mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonio.estrellas)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                "{testimonio.comentario}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarColors[index]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg`}>
                  {testimonio.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonio.nombre}</p>
                  <p className="text-primary-300 text-xs">{testimonio.cargo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comentarios;
