import React,{ useState } from "react"
import { BrowserRouter as Navegacion,Route as Ruta,Routes as Rutas } from "react-router-dom"
import Principal from "../components/contenedores/principal"
import Menu from "../components/menu"
import Planetas from "../components/planetas/planetas"
import Presentacion from "../components/presentacion"
import Navegar from "../navegar/navegar"
import Error404 from "../paginas/404"
import Detalles from "../paginas/detalles"
import "./css/home.css"
const Home = () => {
  let view;
  const [play,setPlay] = useState(view)
  //const [updatePlay,setUpdatePlay] = useState(view)
  function sendStyle(stilo) {
    setPlay(stilo)
  }
  function ocultar() {
    setPlay(false)
  }
  return (
    <div id="home">
      <Navegacion>
        <Menu mostrar={play}/>
        <Navegar getMenu={ play ? ocultar : sendStyle}/>
        <Presentacion/>
        <Rutas>
          <Ruta path="/" element={<Principal/>}/>
          <Ruta path="/detalles" element={<Detalles/>}/>
          <Ruta path="/planetas" element={<Planetas/>}/>
          <Ruta path="*" element={<Error404/>}/> 
        </Rutas>
      </Navegacion>
    </div>
  )
}
export default Home
