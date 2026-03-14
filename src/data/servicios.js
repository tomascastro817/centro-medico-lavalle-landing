import { FaHeart, FaBrain, FaBone, FaAppleAlt, FaSmile, FaBriefcaseMedical, FaStethoscope } from 'react-icons/fa';

export const serviciosData = [
  { id: 1, title: 'Cardiología', description: 'Atención especializada para enfermedades del corazón.', icon: <FaHeart className="text-red-500 text-4xl" /> },
  { id: 2, title: 'Endocrinología', description: 'Tratamiento de trastornos hormonales y metabólicos.', icon: <FaBrain className="text-purple-500 text-4xl" /> },
  { id: 3, title: 'Traumatología', description: 'Tratamiento de lesiones y enfermedades del sistema musculoesquelético.', icon: <FaBone className="text-orange-500 text-4xl" /> },
  { id: 4, title: 'Nutricionista', description: 'Asesoramiento sobre alimentación y dieta equilibrada.', icon: <FaAppleAlt className="text-green-500 text-4xl" /> },
  { id: 5, title: 'Psicología', description: 'Apoyo emocional y psicológico para el bienestar mental.', icon: <FaSmile className="text-blue-500 text-4xl" /> },
  { id: 6, title: 'Medicina Laboral', description: 'Evaluación y prevención de enfermedades relacionadas con el trabajo.', icon: <FaBriefcaseMedical className="text-teal-500 text-4xl" /> },
  { id: 7, title: 'Medicina General', description: 'Atención médica general y prevención de enfermedades.', icon: <FaStethoscope className="text-yellow-500 text-4xl" /> },
];
