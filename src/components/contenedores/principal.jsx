import React from "react"
import { galaxias } from "../../astronomia/astronomia"
import Space from "./space"

const Principal = () => {
  return (
    galaxias.map((g) => {
      return <Space img={g.img} name={g.name} details={g.descripcion}/>
    })
  )
}
export default Principal