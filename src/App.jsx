import React from 'react'
import Header from './components/header/Index';
import Products from './components/products/Index';
import Topheader from './components/topHeader/Index';
import Banner from './components/banner/Index';
import Department from './components/department/Index';
import AnimalSection from './components/animalSection/Index';
import Highlights from './components/highlights/Index';
import Footer from './components/footer/Index';
import BottomFooter from './components/bottomFooter/Index'

function App() {

  return (
    <div className="App">
      <Topheader/>
      <Header/>
      <Banner/>
      <Department/>
      <Products/>
      <AnimalSection/>
      <Highlights/>
      <Footer/>
      <BottomFooter/>
    </div>
  )
}

export default App
