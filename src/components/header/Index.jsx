import React from 'react';
import "./style.css";
import hamburguerIcon from "../../assets/img/Hamburger_icon.svg"

const Header = () => {
  return (
    <div className='container-list'>
      <ul>
       <li>Categoria lorem</li>
       <li>Categoria</li>
       <li>Categoria lorem ipsum</li>
       <li>Categoria lorem</li>
       <li>Categoria</li>
       <li>Categoria lorem ipsum</li>
       <li>Categoria ipsum</li>
       <li><img src={hamburguerIcon}/></li>
      </ul>
    </div>
  )
}

export default Header