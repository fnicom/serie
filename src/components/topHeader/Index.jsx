import React from 'react';
import "./style.css"
import logo from "../../assets/img/logo-header.jpeg"
import miniCart from "../../assets/img/miniCart.jpeg"


const Topheader = () => {
  
return (
    <div className='container-topHeader'>
        <div>
            <input className='search-header' placeholder="Pesquisar..."/>
        </div>
        <div className='div-logo'><img src={logo}/></div>
        <div><img src={miniCart}/></div>
    </div>
  )
}

export default Topheader