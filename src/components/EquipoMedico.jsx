// src/components/EquipoMedico.jsx
import React from 'react';
import { FaHeartbeat, FaUserMd, FaBone, FaWhatsapp, FaAppleAlt, FaSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Jorge from '../image/jorge-dalguerre.jpg'
import Jhon from '../image/Jhon-dalguerre.jpg'
import Andrea from '../image/andrea-raimondo.jpg'
import Rodolfo from '../image/rodolfo-canelo.jpg'
import Rocio from '../image/rocio-lara-payeras.jpg'
import Alejandra from '../image/alejandra-diaz.jpg'

// Datos del equipo médico
const equipo = [
  {
    id: 1,
    nombre: 'Dr. Dalguerre, Jorge W.',
    especialidad: 'Endocrinologia y medicina general',
    imagen: Jorge,
    descripcion: 'Experto en trastornos hormonales y metabólicos, comprometida con el bienestar de sus pacientes.',
    icon: <FaUserMd className="text-purple-500 text-3xl" />,
    turnoLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2gsKak1qXIFnxPBcRj_5UzshnS_ZbX1Lz0ehA6oYmWlAJCNHC0QngC1ZhTWhIPmOJGgcvnT46w',
    whatsapp: '3814389069'
  },
  {
    id: 2,
    nombre: 'Dr. Dalguerre, Jhon Rosch.',
    especialidad: 'Traumatología',
    imagen: Jhon,
    //descripcion: 'Experta en trastornos hormonales y metabólicos, comprometida con el bienestar de sus pacientes.',
    descripcion: 'Especialista en lesiones y enfermedades del sistema musculoesquelético, con un enfoque en la recuperación rápida.',
    icon: <FaBone className="text-orange-500 text-3xl" />,
    turnoLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0y9ssyGbQxvZ_Y3u7tJjShmISzbtirdKhCcAUL-0j06EiP2-ZQ9K-V84tQUwK-WCq2C_EfzwNN',
    whatsapp: '5493814786813'
  },
  {
    id: 3,
    nombre: 'Lic. Raimondo, Andrea.',
    especialidad: 'Psicología',
    imagen: Andrea,
    descripcion: 'Experta en salud mental, ofreciendo apoyo y terapias personalizadas.',
    icon: <FaSmile className="text-blue-500 text-3xl" />,
    turnoLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0y9ssyGbQxvZ_Y3u7tJjShmISzbtirdKhCcAUL-0j06EiP2-ZQ9K-V84tQUwK-WCq2C_EfzwNN',
    whatsapp: '3816342842'
  },
  {
    id: 4,
    nombre: 'Dr. Canelo, Rodolfo.',
    especialidad: 'Cardiologia y medicina laboral',
    imagen: Rodolfo,
    descripcion: 'Especialista en enfermedades del corazón, en salud ocupacional y prevención de riesgos laborales.',
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    turnoLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0y9ssyGbQxvZ_Y3u7tJjShmISzbtirdKhCcAUL-0j06EiP2-ZQ9K-V84tQUwK-WCq2C_EfzwNN',
    whatsapp: '3814465042'
  },
  {
    id: 5,
    nombre: 'Lic. Payeras, Rocio.',
    especialidad: 'Nutricionista',
    imagen: Rocio,
    descripcion: 'Especialista en nutrición y dietética, enfocada en promover hábitos saludables.',
    icon: <FaAppleAlt className="text-green-500 text-3xl" />,
    turnoLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0y9ssyGbQxvZ_Y3u7tJjShmISzbtirdKhCcAUL-0j06EiP2-ZQ9K-V84tQUwK-WCq2C_EfzwNN',
    whatsapp: '3816670751'
  },
  {
    id: 6,
    nombre: 'Lic. Diaz, Alejandra.',
    especialidad: 'Nutricionista',
    imagen: Alejandra,
    descripcion: 'Especialista en nutrición y dietética, dedicada a promover una alimentación saludable y personalizada para mejorar el bienestar de sus pacientes.',
    icon: <FaAppleAlt className="text-green-500 text-3xl" />,
    turnoLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0y9ssyGbQxvZ_Y3u7tJjShmISzbtirdKhCcAUL-0j06EiP2-ZQ9K-V84tQUwK-WCq2C_EfzwNN',
    whatsapp: '3814766977'
  },

  // Agrega más miembros del equipo según sea necesario
];

const EquipoMedico = () => {
  return (
    <section id="team" className="py-16 bg-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-500 to-sky-300">
          Conoce a nuestro equipo médico
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipo.map((miembro) => (
            <motion.div
              key={miembro.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <img src={miembro.imagen} alt={miembro.nombre} className="w-full h-48 sm:h-56 md:h-64 object-contain object-center mx-auto" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-center">
                  {miembro.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{miembro.nombre}</h3>
                <p className="text-sm sm:text-md text-gray-600 mb-2">{miembro.especialidad}</p>
                <p className="text-sm sm:text-md text-gray-700 mb-4">{miembro.descripcion}</p>
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <a href={miembro.turnoLink} target='blanck' className="flex items-center justify-center bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-600 transition duration-300 w-full sm:w-auto">
                    Agendar turno
                    <span className="ml-2">
                      <FaUserMd />
                    </span>
                  </a>
                  <a href={`https://wa.me/${miembro.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 w-full sm:w-auto">
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipoMedico;