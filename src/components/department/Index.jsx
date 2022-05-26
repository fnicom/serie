import React from 'react'
import "./style.css"
import News from '../news/Index'
import departmentImgOne from "../../assets/img/categoria1.png"
import departmentImgTwo from "../../assets/img/categoria2.png"
import departmentImgThree from "../../assets/img/categoria3.png"

const Department = () => {
  return (
    <div>

    <div className='container-department'>
        <div><img src={departmentImgOne}/></div>
        <div><img src={departmentImgTwo}/></div>
        <div><img src={departmentImgThree}/></div>
    </div>
    <div className='news-container'>
    <News/>
    </div>
    </div>
  )
}

export default Department