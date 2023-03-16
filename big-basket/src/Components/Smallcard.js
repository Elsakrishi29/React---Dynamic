import React from 'react';
import './index.scss';
import tomato from '../img/product-img/tomato.webp';

const Smallcard = () => {
  return (
    <>
    <h1>Fruits & Vegetables</h1>
    <div className='smallcard-container'>
        <div className='smcard-img'>
            <a href=''>
                <img src={tomato}/>
            </a>      
        </div>
        <div className='smcard-img'>
            <a href=''>
                <img src={tomato}/>
            </a>  
        </div>
        <div className='smcard-img'>
            <a href=''>
                <img src={tomato}/>
            </a>  
        </div>
        <div className='smcard-img'>
            <a href=''>
                <img src={tomato}/>
            </a>  
        </div>
        <div className='smcard-img'>
            <a href=''>
                <img src={tomato}/>
            </a>  
        </div>
        <div className='smcard-img'>
            <a href=''>
                <img src={tomato}/>
            </a>  
        </div>
    </div>
    </>
  )
}

export default Smallcard