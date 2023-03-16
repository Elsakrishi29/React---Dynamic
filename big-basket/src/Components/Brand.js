import React from 'react'

const Brand = () => {
  return (
    <div className='brand-container'>  
        <div className='brand-detail'>
            <h4>Brand</h4>
            <span></span>
            <div className='brands'>
                <div className='search-brand'>
                    <input type='text' placeholder='Search by Brand'/><i className='fa fa-search'></i>
                </div>
            <input type='checkbox'/>
            <label>Aashirvaad</label><br/>
            <input type='checkbox'/>
            <label>Asal</label><br/>
            <input type='checkbox'/>
            <label>Ask Foods</label><br/>
            <input type='checkbox'/>
            <label>Batter Box</label><br/>
            <input type='checkbox'/>
            <label>Betty Crocker</label><br/>
            <input type='checkbox'/>
            <label>Dadddis</label><br/>
            <input type='checkbox'/>
            <label>Dabur</label><br/>
            <input type='checkbox'/>
            <label>Aashirvaad</label><br/>
            <input type='checkbox'/>
            <label>Asal</label><br/>
            <input type='checkbox'/>
            <label>Ask Foods</label><br/>
            <input type='checkbox'/>
            <label>Batter Box</label><br/>
            <input type='checkbox'/>
            <label>Betty Crocker</label><br/>
            <input type='checkbox'/>
            <label>Dadddis</label><br/>
            <input type='checkbox'/>
            <label>Dabur</label><br/>
            </div>
           

            <h4>Price</h4>
            <input type='checkbox'/>
            <label>Lessthan Rs 20 (3)</label><br/>
            <input type='checkbox'/>
            <label>Rs 21 to Rs 50 (26)</label><br/>
            <input type='checkbox'/>
            <label>Rs 51 to Rs 100 (53)</label><br/>
            <input type='checkbox'/>
            <label>Rs 101 to Rs 200 (66)</label><br/>
            <input type='checkbox'/>
            <label>Rs 201 to Rs 500 (46)</label><br/>
            <input type='checkbox'/>
            <label>More than Rs 501 (133)</label><br/>

            <h4>Discount</h4>
            <input type='checkbox'/>
            <label>Upto 5% (12)</label><br/>
            <input type='checkbox'/>
            <label>5% - 10% (59)</label><br/>
            <input type='checkbox'/>
            <label>10% - 15% (60)</label><br/>
            <input type='checkbox'/>
            <label>15% - 25% (25)</label><br/>
            <input type='checkbox'/>
            <label>More than 25% (53)</label><br/>
        </div>
        <div className='brand-show'>
            <div className='brand-head'>
                <div>
                    <h2>Morning Starter (327)</h2> 
                </div>
                <div className='brand-option2'>
                    <select name='' id=''>
                        <option value='Popularity'>Popularity</option>
                        <option value='Price - Low to High'>Price - Low to High</option>
                        <option value='Price - High to Low'>Price - High to Low</option>
                        <option value='Alphapetical'>Alphapetical</option>
                        <option value='Rupee Saving - Low to High'>Rupee Saving - Low to High</option>
                        <option value='Rupee Saving - High to Low'>Rupee Saving - High to Low</option>
                        <option value='% Off - High to Low'>% Off - High to Low</option>
                    </select> 
                </div>
            </div>
            <div className='truck-product'>
                <a href=''>
                    <i className='fa fa-truck'></i>
                    <span>ALL PRODUCTS</span>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Brand