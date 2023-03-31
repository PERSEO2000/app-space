import React from "react"
import "./css/galaxias.css"

const Galaxia = ({img,name,details}) => {
  return (
    <div id="galaxia_img">
      <div>
        <img src={img}/>
      </div>
      <div id="galaxia_details">
        <p id="galaxia_details_name">{name}</p>
        <p id="galaxia_details_description">{details}</p>
      </div>
    </div>
  )
}
export default Galaxia