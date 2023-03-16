import React from 'react'
//import Header from './Header';
import Slide from './Slide';
import Cards from './Cards';
import Smallcard from './Smallcard';
import Footer from './Footer';
import Changenav from './Navigation';

const Banner = () => {
  return (
    <div>
        {/* <Header></Header> */}
        <Changenav></Changenav>
        <Slide></Slide>
        <Cards></Cards>
        <Smallcard></Smallcard>
        <Footer></Footer> 
    </div>
  )
}

export default Banner