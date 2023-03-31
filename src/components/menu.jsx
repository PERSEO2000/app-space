import React,{ useState } from "react"
import { Link } from "react-router-dom"
import "./css/menu.css"
const Menu = ({mostrar}) => {
  return (
    <div id="menu"  style={mostrar ? {display: "flex"} : {display: "none"}}>
      <div id="menu_lista">
        <p id="categorias">CATEGORIAS</p>
        <Link to="/">GALAXIAS</Link>
        <hr/>
        <Link to="/planetas">PLANETAS</Link>
        <hr/>
        <Link to="/">ESTRELLAA</Link>
        <hr/>
        <Link to="/">METEORITOS</Link>
        <hr/>
        <Link to="/">COMETAS</Link>
        <hr/>
        <p id="categorias">REDES SOCIALES</p>
        <Link to="/">FACEBOOK</Link>
        <hr/>
        <Link to="/">TELEFONO</Link>
        <hr/>
        <Link to="/">DESARROLLADOR</Link>
      </div>
    </div>
  )
}
export default Menu