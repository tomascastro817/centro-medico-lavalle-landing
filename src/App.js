import './styles/index.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Servicios from "./components/Servicios"
import EquipoMedico from "./components/EquipoMedico"
import Comentarios from "./components/Comentarios"
import Ubicacion from "./components/Ubicacion"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Servicios />
      <EquipoMedico />
      <Comentarios />
      <Ubicacion />
      <Footer />
    </div>
  )
}