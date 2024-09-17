import Header from "./components/Header"
import Hero from "./components/Hero"
import Servicios from "./components/Servicios"
import EquipoMedico from "./components/EquipoMedico"
import Ubicacion from "./components/Ubicacion"
import Footer from "./components/Footer"
import Comentarios from "./components/Comentarios"

export default function App() {
  
  return (
    <div>
      <Header/>
      <Hero/>
      <EquipoMedico/>
      <Servicios/>
      <Ubicacion/>
      <Comentarios/>
      <Footer/>
    </div>
  )
}