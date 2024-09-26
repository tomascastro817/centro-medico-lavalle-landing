import Header from "./components/Header"
import Hero from "./components/Hero"
import EquipoMedico from "./components/EquipoMedico"
import Ubicacion from "./components/Ubicacion"
import Footer from "./components/Footer"
import Direccion from "./components/Direccion"
export default function App() {
  
  return (
    <div>
      <Header/>
      <Direccion/>
      <Hero/>
      <EquipoMedico/>
      <Ubicacion/>
      <Footer/>
    </div>
  )
}