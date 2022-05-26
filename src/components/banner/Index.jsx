import React from 'react';
import "./style.css"
import bannerImg from "../../assets/img/banner.png"


const Banner = () => {

    return (
        <div className='banner-container'>
          <img src={bannerImg}/>
        </div>
      );
}

export default Banner