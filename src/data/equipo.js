import { FaHeartbeat, FaUserMd, FaBone, FaAppleAlt, FaSmile } from 'react-icons/fa';
import Jorge from '../image/jorge-dalguerre.jpg';
import Jhon from '../image/Jhon-dalguerre.jpg';
import Andrea from '../image/andrea-raimondo.jpg';
import Rodolfo from '../image/rodolfo-canelo.jpg';
import Rocio from '../image/rocio-lara-payeras.jpg';
import Alejandra from '../image/alejandra-diaz.jpg';

export const equipoData = [
    {
        id: 1,
        nombre: 'Dr. Dalguerre, Jorge W.',
        especialidad: 'Endocrinología y medicina general',
        imagen: Jorge,
        descripcion: 'Experto en trastornos hormonales y metabólicos, comprometido con el bienestar de sus pacientes.',
        icon: <FaUserMd className="text-purple-500 text-3xl" />,
        turnoLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2gsKak1qXIFnxPBcRj_5UzshnS_ZbX1Lz0ehA6oYmWlAJCNHC0QngC1ZhTWhIPmOJGgcvnT46w',
        whatsapp: '3814389069'
    },
    {
        id: 2,
        nombre: 'Dr. Dalguerre, Jhon Rosch.',
        especialidad: 'Traumatología',
        imagen: Jhon,
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
        especialidad: 'Cardiología y medicina laboral',
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
];
