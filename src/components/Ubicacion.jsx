// src/components/Ubiacion.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

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
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Centro Médico Lavalle</h3>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-500 text-2xl mr-3" />
                <p className="text-gray-700">Dirección: Lavalle 1351, San Miguel de Tucuman, Argentina.</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-green-500 text-2xl mr-3" />
                <p className="text-gray-700">Teléfono: (381) 2319699</p>
              </div>
              <div className="flex items-center mb-4">
                <FaClock className="text-orange-500 text-2xl mr-3" />
                <p className="text-gray-700">Horario de Atención: Lunes a Viernes - 9:00 AM a 6:00 PM</p>
              </div>
              <div className="flex justify-center mt-6">
                <a 
                  href="https://wa.me/3812319699" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="text-xl mr-2" />
                  Enviar WhatsApp
                </a>
              </div>
            </div>
          </div>
          {/* Google Maps Section */}
          <div className="lg:w-1/2 lg:pl-8">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <iframe
                title="Ubicación en Google Maps"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.6829112912635!2d-104.89514148499088!3d39.73204297945223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c647a54043505%3A0x7c8a9f84a6d2e9!2s1600+Parker+St%2C+Boulder%2C+CO+80302%2C+EE.%2UUU!5e0!3m2!1ses!2ses!4v1656882395673!5m2!1ses!2ses"
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
