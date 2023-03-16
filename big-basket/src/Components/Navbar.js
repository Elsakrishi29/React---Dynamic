import React from 'react'
import bb_logo_1 from '../img/logo/bb_logo_1.jpg';
import './index.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
          <nav className='navbar-container'>
            <div className='nav-img-detail'>
              <div className='navbar-img'>
                 <img src={bb_logo_1}/>
              </div>
              <div className='shop'>
                <a href=''>SHOP
                  <i className='fa fa-check'></i>
                </a>
              </div>
            </div>
          <div className='header-search'>
              <input placeholder='Search for Products..'/>
              <a href=''><i className='fa fa-search'></i></a>
          </div>
          <div className='add-items'>
                <div>
                  <a href=''><i className='fa fa-shopping-basket'></i></a>
                </div>
                <div className='basket'>
                   <a href=''>
                    <p>My Basket</p>
                    <p> 0 items</p>
                    </a>
                </div>  
              </div>
          </nav>
        </div>
    </div>
  )
}

export default Navbar

