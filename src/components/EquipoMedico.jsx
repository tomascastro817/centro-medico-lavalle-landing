// src/components/EquipoMedico.jsx
import React from 'react';
import { FaHeartbeat, FaUserMd, FaBone } from 'react-icons/fa';

// Datos del equipo médico
const equipo = [
  {
    id: 1,
    nombre: 'Dr. Juan Pérez',
    especialidad: 'Cardiología',
    imagen: 'https://cdn.euroinnova.edu.es/img/subidasEditor/doctor-5871743_640-1610073541.webp',
    descripcion: 'Especialista en enfermedades del corazón con más de 10 años de experiencia.',
    icon: <FaHeartbeat className="text-red-500 text-3xl" />
  },
  {
    id: 2,
    nombre: 'Dra. Ana García',
    especialidad: 'Endocrinología',
    imagen: 'https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg',
    descripcion: 'Experta en trastornos hormonales y metabólicos, comprometida con el bienestar de sus pacientes.',
    icon: <FaUserMd className="text-purple-500 text-3xl" />
  },
  {
    id: 3,
    nombre: 'Dr. Luis Fernández',
    especialidad: 'Traumatología',
    imagen: 'https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/6-cosas-que-ningun-doctor-puede-hacerte-3.jpg',
    descripcion: 'Especialista en lesiones y enfermedades del sistema musculoesquelético, con un enfoque en la recuperación rápida.',
    icon: <FaBone className="text-orange-500 text-3xl" />
  },
  // Agrega más miembros del equipo según sea necesario
];

const EquipoMedico = () => {
  return (
    <section id="team" className="py-16 bg-sky-50">
      <div className="container mx-auto px-6">
        {/* Title with Gradient and Shadow */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-500 to-sky-300">
          Conoce a nuestro equipo médico
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {equipo.map((miembro) => (
            <div key={miembro.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative">
                <img src={miembro.imagen} alt={miembro.nombre} className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-center">
                  {miembro.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{miembro.nombre}</h3>
                <p className="text-md text-gray-600 mb-2">{miembro.especialidad}</p>
                <p className="text-gray-700">{miembro.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipoMedico;
