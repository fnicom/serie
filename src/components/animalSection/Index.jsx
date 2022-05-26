import React from 'react'
import "./style.css"
import dogImg from "../../assets/img/img5.png"
import catImg from "../../assets/img/img6.png"



const AnimalSection = () => {
  return (
    <div className='container-animalSection'>
      <div><img src={catImg}/></div>
      <div><img src={dogImg}/></div>
    </div>
  )
}

export default AnimalSection