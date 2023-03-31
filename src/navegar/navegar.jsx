import React from "react"
import { Link } from "react-router-dom"
import "./css/navegar.css"

const Navegar = ({getMenu}) => {
  return (
    <div className="navegar">
      <div className="navegar_home">
        <a href="#">WHATSAPP</a>
      </div>
      <div className="navegar_lista">
        <Link to="/">HOME</Link>
        <a href="#">EMAIL</a>
        <button onClick={() => getMenu(true)}>☰</button>
      </div>
    </div>
  )
}
export default Navegar