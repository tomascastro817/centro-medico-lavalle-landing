// src/components/Ubiacion.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Ubicacion = () => {
  return (
    <section id="contact" className="py-16 bg-sky-50">
      <div className="container mx-auto px-6">
        {/* Title with Gradient */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-500 to-sky-300">
          Contacto
        </h2>
        <div className="flex flex-col lg:flex-row">
          {/* Information Section */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <div className="bg-white p-8 shadow-lg rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Centro Médico Lavalle</h3>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-500 text-3xl mr-3" />
                <p className="text-gray-700">Dirección: Lavalle 1351, San Miguel de Tucuman, Argentina.</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-green-500 text-3xl mr-3" />
                <p className="text-gray-700">Teléfono: (381) 2319699</p>
              </div>
              <div className="flex items-center mb-4">
                <FaClock className="text-orange-500 text-3xl mr-3" />
                <p className="text-gray-700">Horario de Atención: Lunes a Viernes - 9:00 AM a 6:00 PM</p>
              </div>
            </div>
          </div>
          {/* Google Maps Section */}
          <div className="lg:w-1/2 lg:pl-8">
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <iframe
                title="Ubicación en Google Maps"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.113216636891!2d-65.22226492368983!3d-26.836351090019225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c721a6d05ff%3A0xd655cec7865af105!2sAYA%2C%20Lavalle%201351%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Provincia%20de%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1727101103138!5m2!1ses-419!2sar"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
