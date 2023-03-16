import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Slide from './Components/Slide';
import Cards from './Components/Cards';
import Smallcard from './Components/Smallcard';
import Details from './Components/Details';
import Brand from './Components/Brand';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Navigation from './Components/Navigation';

const Routing = () => {
  return (
    <BrowserRouter>  
        <Routes>
            <Route path='/' element={<Navigation />}></Route>
            <Route path='/banner' element={<Banner />}></Route>
            <Route path='/header' element={<Header />}></Route>
            <Route path='/navbar' element={<Navbar/>}></Route>
            <Route path='/footer' element={<Footer />}></Route>
            <Route path='/slide' element={<Slide />}></Route>
            <Route path='/cards' element={<Cards />}></Route>
            <Route path='/smallcard' element={<Smallcard />}></Route>
            <Route path='/brand' element={<Brand />}></Route>
            <Route path='/details' element={<Details />}></Route>
        </Routes>
    </BrowserRouter>  
  )
}

export default Routing