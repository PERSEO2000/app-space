import React from "react"
import { planetas } from "../../astronomia/astronomia"
import Space from "../contenedores/space"

const Planetas = () => {
  return (
    planetas.map((g) => {
      return <Space img={g.img} name={g.name} details={g.descripcion}/>
    })
  )
}
export default Planetas