import React from 'react'
import './index.scss'
//import Grid from '@mui/material/Grid';
import capsicum from '../img/product-img/capsicum-green.webp';
import { useNavigate } from 'react-router-dom';




const Cards = () => {
    const navigate = useNavigate()
    const gotoDetailPage=()=>{
        navigate("/details");
    }

  return (
    <>
        <h1>My Smart Basket</h1>
    <div className='card-container'>
        <div className='cards'>
            <div className='off-card'>
                <span>GET 48% OFF</span>
                <i className='fa fa-asterisk'></i>
            </div>
            <div className='card-img'>
                <img src={capsicum} onClick={()=>gotoDetailPage()}/>
            </div>
            <div className='card-details'>
            <div className='card-items'>
                <h6>Fresho</h6>
                <p>Capsicum - Green (Loose)</p>
            </div>
            <div className='card-options'>
                <select name='' id=''>
                    {/* <option value=''>500g-Rs 24.50</option> */}
                    <option value='1kg-Rs 49.00'>1kg - Rs 49.00</option>
                    <option value='250g-Rs 12.50'>250g - Rs 12.50</option>
                    <option value='500g-Rs 24.50'>500g - Rs 24.50</option>
                </select> 
            </div>
            <div className='card-alldetails'>
                <div className=''>
                    <p><span>MRP:</span><strike>Rs 12.17</strike><insert> Rs 24.50</insert></p>
                </div>
                <div className='delivaery-time'>
                    <i className='fa fa-truck'></i>
                    <span>Standard Delivery: 11 Mar, 7:30AM - 10:30AM</span>
                </div>
                <div className='qty-add'>
                    <div className='qty'>
                        <span>Qty</span>
                        <input placeholder='1'/>
                    </div>
                    <div className='add'>
                        <a href='' >ADD<i className='fa fa-shopping-basket'></i></a>
                    </div>  
                </div>
            </div>
            </div>
    </div>

    <div className='cards'>
            <div className='off-card'>
                <span>GET 48% OFF</span>
                <i className='fa fa-asterisk'></i>
            </div>
            <div className='card-img'>
                <img src={capsicum}/>
            </div>
            <div className='card-details'>
            <div className='card-items'>
                <h6>Fresho</h6>
                <p>Capsicum - Green (Loose)</p>
            </div>
            <div className='card-options'>
                <select name='' id=''>
                    {/* <option value=''>500g-Rs 24.50</option> */}
                    <option value='1kg-Rs 49.00'>1kg - Rs 49.00</option>
                    <option value='250g-Rs 12.50'>250g - Rs 12.50</option>
                    <option value='500g-Rs 24.50'>500g - Rs 24.50</option>
                </select> 
            </div>
            <div className='card-alldetails'>
                <div className=''>
                    <p><span>MRP:</span><strike>Rs 12.17</strike><insert> Rs 24.50</insert></p>
                </div>
                <div className='delivaery-time'>
                    <i className='fa fa-truck'></i>
                    <span>Standard Delivery: 11 Mar, 7:30AM - 10:30AM</span>
                </div>
                <div className='qty-add'>
                    <div className='qty'>
                        <span>Qty</span>
                        <input placeholder='1'/>
                    </div>
                    <div className='add'>
                        <a href=''>ADD<i className='fa fa-shopping-basket'></i></a>
                    </div>  
                </div>
            </div>
            </div>
    </div>

    <div className='cards'>
            <div className='off-card'>
                <span>GET 48% OFF</span>
                <i className='fa fa-asterisk'></i>
            </div>
            <div className='card-img'>
                <img src={capsicum}/>
            </div>
            <div className='card-details'>
            <div className='card-items'>
                <h6>Fresho</h6>
                <p>Capsicum - Green (Loose)</p>
            </div>
            <div className='card-options'>
                <select name='' id=''>
                    {/* <option value=''>500g-Rs 24.50</option> */}
                    <option value='1kg-Rs 49.00'>1kg - Rs 49.00</option>
                    <option value='250g-Rs 12.50'>250g - Rs 12.50</option>
                    <option value='500g-Rs 24.50'>500g - Rs 24.50</option>
                </select> 
            </div>
            <div className='card-alldetails'>
                <div className=''>
                    <p><span>MRP:</span><strike>Rs 12.17</strike><insert> Rs 24.50</insert></p>
                </div>
                <div className='delivaery-time'>
                    <i className='fa fa-truck'></i>
                    <span>Standard Delivery: 11 Mar, 7:30AM - 10:30AM</span>
                </div>
                <div className='qty-add'>
                    <div className='qty'>
                        <span>Qty</span>
                        <input placeholder='1'/>
                    </div>
                    <div className='add'>
                        <a href=''>ADD<i className='fa fa-shopping-basket'></i></a>
                    </div>  
                </div>
            </div>
            </div>
    </div>

    <div className='cards'>
            <div className='off-card'>
                <span>GET 48% OFF</span>
                <i className='fa fa-asterisk'></i>
            </div>
            <div className='card-img'>
                <img src={capsicum}/>
            </div>
            <div className='card-details'>
            <div className='card-items'>
                <h6>Fresho</h6>
                <p>Capsicum - Green (Loose)</p>
            </div>
            <div className='card-options'>
                <select name='' id=''>
                    {/* <option value=''>500g-Rs 24.50</option> */}
                    <option value='1kg-Rs 49.00'>1kg - Rs 49.00</option>
                    <option value='250g-Rs 12.50'>250g - Rs 12.50</option>
                    <option value='500g-Rs 24.50'>500g - Rs 24.50</option>
                </select> 
            </div>
            <div className='card-alldetails'>
                <div className=''>
                    <p><span>MRP:</span><strike>Rs 12.17</strike><insert> Rs 24.50</insert></p>
                </div>
                <div className='delivaery-time'>
                    <i className='fa fa-truck'></i>
                    <span>Standard Delivery: 11 Mar, 7:30AM - 10:30AM</span>
                </div>
                <div className='qty-add'>
                    <div className='qty'>
                        <span>Qty</span>
                        <input placeholder='1'/>
                    </div>
                    <div className='add'>
                        <a href=''>ADD<i className='fa fa-shopping-basket'></i></a>
                    </div>  
                </div>
            </div>
            </div>
    </div>

    <div className='cards'>
            <div className='off-card'>
                <span>GET 48% OFF</span>
                <i className='fa fa-asterisk'></i>
            </div>
            <div className='card-img'>
                <img src={capsicum}/>
            </div>
            <div className='card-details'>
            <div className='card-items'>
                <h6>Fresho</h6>
                <p>Capsicum - Green (Loose)</p>
            </div>
            <div className='card-options'>
                <select name='' id=''>
                    {/* <option value=''>500g-Rs 24.50</option> */}
                    <option value='1kg-Rs 49.00'>1kg - Rs 49.00</option>
                    <option value='250g-Rs 12.50'>250g - Rs 12.50</option>
                    <option value='500g-Rs 24.50'>500g - Rs 24.50</option>
                </select> 
            </div>
            <div className='card-alldetails'>
                <div className=''>
                    <p><span>MRP:</span><strike>Rs 12.17</strike><insert> Rs 24.50</insert></p>
                </div>
                <div className='delivaery-time'>
                    <i className='fa fa-truck'></i>
                    <span>Standard Delivery: 11 Mar, 7:30AM - 10:30AM</span>
                </div>
                <div className='qty-add'>
                    <div className='qty'>
                        <span>Qty</span>
                        <input placeholder='1'/>
                    </div>
                    <div className='add'>
                        <a href=''>ADD<i className='fa fa-shopping-basket'></i></a>
                    </div>  
                </div>
            </div>
            </div>
    </div>
    </div>
    </>
  )
}

export default Cards


 {/* <Grid sx={{ flexGrow: 1 }} container>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          
        </Grid>
      </Grid>
    </Grid> */}