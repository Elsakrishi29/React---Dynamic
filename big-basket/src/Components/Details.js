import React, { useState } from 'react';
import capsicum_details from '../img/product-img/capsicum-details.webp';
import Header from './Header';
import Footer from './Footer';


const Details = () => {
    const [count,setCount]=useState(0);

    
    const increamentCount = (event) =>{
        event.preventDefault();
        setCount(count + 1);
    };
    const decreamentCount = (event) =>{
        event.preventDefault();
        setCount( count - 1);
    };

  return (
    <>
    <Header></Header>
    <div className ='details-container'>
        <div className ='detail-list'>
         <div className ='detail-img'>
            <img src={capsicum_details}/>
        </div>
        <div className='detail-content'>
            <h6>Fresho</h6>
            <h4>Fresho Capsicum - Green (Loose), 500 g</h4>
            <p><span>MRP:</span><strike>Rs 47.04</strike></p>
            <span className='price'>Price:Rs 24.50 </span><span className='rs'> (Rs.0.05/g)</span>
            <h5>You Save : 48%</h5>
            <span className='taxe'>(Inclusive of all taxes)</span>
            <div className='product'>
                <div className='input-button'>
                    <a href=''><button onClick={decreamentCount}> - </button> </a>
                    <input value={count} readOnly/>
                    <a href=''><button onClick={increamentCount}> + </button></a>
                </div>
                <div className='detail-frequently'>
                    <p> 
                        <span>FREQUENTLY BOUGHT ITEMS WITH THIS PRODUCT</span>
                        <i className='fa fa-check'></i>
                    </p>
                </div>
            </div>
            <div className='delivaery-time'>
                <i className='fa fa-truck'></i>
                <span>Standard Delivery: 11 Mar, 7:30AM - 10:30AM</span>
            </div>
            <div className='packsize'>
                <h5>Pack Sizes</h5>
            </div>
            <div className='backsize-box'>
                <a href=''>
                    <p>500 g</p>
                    <p><span>MRP: Rs . 28 . 33</span><strike> Rs 47.04 </strike> <span className='off'> 24% off</span></p>
                    <i className='fa fa-check'></i>
                </a>
            </div>
            <div className='backsize-box'>
                <a href=''>
                    <p>500 g</p>
                    <p><span>MRP: Rs . 28 . 33</span><strike> Rs 47.04 </strike> <span className='off'> 24% off</span></p>
                    <i className='fa fa-check'></i>
                </a>  
            </div>
            <div className='backsize-box'>
                <a href=''>
                    <p>500 g</p>
                    <p><span>MRP: Rs . 28 . 33</span><strike> Rs 47.04 </strike> <span className='off'> 24% off</span></p>
                    <i className='fa fa-check'></i>
                </a>
            </div>
            <div className='morecombo'>
                <a href=''>+5 More Combo's</a>
            </div>
        </div>
    </div>

    <div className ='all-details'>
        <h4>Fresho Capsicum - Green (Loose)</h4>
        <hr />
        <div className='all-detail'>
            <div className='about-product'>
                <a href=''>About the Product</a>
                <i className='fa fa-plus'></i>
            </div>
             <ul>
                <li>Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.</li>
                <li>They have thick and shiny skin with a fleshy texture inside.</li>
             </ul>            
        </div>
        <hr />
        <div className='all-detail'>
            <div  className='about-product'>
                <a href=''>Benefits</a>
                <i className='fa fa-plus'></i>
            </div>
             <ul>
                <li>Green capsicums have powerful antioxidants and anti-inflammatory properties.</li>
                <li>Rich in Vitamin A, B complex, C and phytonutrients. Relieves pain of bone disorders and has the capacity to relax the repirartory passage.</li>
             </ul>            
        </div>
        <hr />
        <div className='all-detail'>
            <div  className='about-product'>
                <a href=''>Storage and Uses</a>
                <i className='fa fa-plus'></i>
            </div>
             <ul>
                <li>Store them in a cool, dry place away from direct sunlight. Keep capsicums dry as moisture makes them rot faster. Refrigerate the peppers unwashed, in a plastic bag and consume within a week. Resort to refrigeration only when they cannot be consumed immediately.</li>
                <li>Green bell peppers can be used for a wide variety of dishes due to its distinct flavour and scent. Can be grilled,roasted, baked and sauteed. Widely used in salads, pastas, pizzas, pepper sauce and even for flavouring curries.</li>
             </ul>            
        </div>
        <hr />
        <div className='all-detail1'>
            <div  className='about-product'>
                <a href=''>Other Product Info</a>
                <i className='fa fa-plus'></i>
            </div>
             <p>EAN Code: 6900001</p>  
             <p>Sourced & Marketed by: Supermarket Grocery Supplies Pvt. Ltd, No. 7, Service Road, Off 100 Feet Road Indiranagar Landmark: Above HDFC Bank Bangalore, Karnataka 560071</p>  
             <p>Country of Origin: India</p>  
             <p>Best before 3 days from delivery date</p>  
             <p>For Queries/Feedback/Complaints, Contact our Customer Care Executive at: Phone: 1860 123 1000 | Address: Innovative Retail Concepts Private Limited, No.18, 2nd & 3rd Floor, 80 Feet Main Road,</p>  
             <p>Koramangala 4th Block, Bangalore - 560034 | Email: customerservice@bigbasket.com</p>          
        </div>
        <hr />
        <div className='all-detail1'>
            <div  className='about-product'>
                <a href=''>Variable weight policy</a>
                <i className='fa fa-plus'></i>
            </div>
            <div className='clock'>
                <i className='fa fa-clock-o'></i>
                <p>Please note that the item(s) in this product may vary slightly in size and weight. Hence, the actual weight of the product delivered can have a small variance. You will be billed based on the actual weight during order processing.</p>
            </div>
        </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Details