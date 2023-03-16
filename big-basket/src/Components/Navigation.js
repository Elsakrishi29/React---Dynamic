import React, { useState } from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Slide from './Slide';
import Cards from './Cards';
import Smallcard from './Smallcard';
import Footer from './Footer';

const Changenav = () => {
    const [showNavbar,setShowNavbar] = useState(true);

    const handleScroll = () =>{
        setShowNavbar(false);
    }
  return (
    <div onScroll={handleScroll}>
        {showNavbar && (
            <>
            <Header></Header>
            <Slide></Slide>
            <Cards></Cards>
            <Smallcard></Smallcard>
            <Footer></Footer> 
            </>
            
        )
        }
         {!showNavbar && (
            <>
            <Navbar></Navbar>
            <Slide></Slide>
            <Cards></Cards>
            <Smallcard></Smallcard>
            <Footer></Footer> 
            </>
           
        )
        }
        
    </div>
  )
}

export default Changenav