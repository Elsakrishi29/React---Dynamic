import React from 'react'
import bb_logo from '../img/logo/bb_logo.png';
import './index.scss'



const Header = () => {
  // console.log("props",props.araloosu);
  return (
    <section>
      <div className='header-contact'>
              <div className='header-icon'>
                <i className='fa fa-phone'></i>
                <span> 1860 123 1000</span>
              </div>
              <div className='header-icon'>
                <i className='fa fa-map-marker'></i>
                <a href=''>560004 Bangalore</a>
              </div>
              <div className='header-icon'>
                <i className='fa fa-user'></i>
                <a href=''>Login/Sign Up</a>
              </div>
        </div>
      <div className='header-container'>
        <div className='header-img'>
            <img src={bb_logo}/>
        </div>
        <div className='header-contactitems'> 
            <div className='search-additems'>
              <div className='header-search'>
                    <input placeholder='Search for Products..'/>
                    <a href=''><i className='fa fa-search'></i></a>
              </div>
              <div className='add-items'>
                <div>
                  <a href=''><i className='fa fa-shopping-basket'></i></a>
                </div>
                <div>
                   <a href=''>
                    <p>My Basket</p>
                    <p> 0 items</p>
                    </a>
                </div>  
              </div>
            </div>
        </div>
      </div>
      <div className='header-category'>
            <div className='category'>
                <h4>SHOP BY CATEGORY</h4>
            </div>
            <div className='tag-icon'>
                <a href=''><i className='fa fa-tag'></i><span>OFFERS</span></a>  
            </div>
            <div className='header-empty'>

            </div>
            
        </div>
    </section>
    
  )
}

export default Header