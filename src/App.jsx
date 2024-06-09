import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className='auction'>
        <h1>Auction Products</h1>
        <div className='auction-card'>
          <div className='main'>
          <img src='/images/main-card.webp'/>
          </div>
          <div className='products'>
            <div className='rice-card'>
              <div className='content'>
                <div className='image'>
            <img src='images/rice.jpg'/>
            </div>
            <div className='description'>
              <h3 className='name'>Mama's Pride Parboiled Rice <br/> 50kg</h3>
              <h2 className='bid'>Starting Bid</h2>
              <span>N350.00</span> <br/>
              <button>Place Bid</button>
            </div>
            </div>
            </div>
            <div className='blender-card'>
              <div className='content'>
                <div className='image'>
            <img src='images/blender.jpg'/>
            </div>
            <div className='description'>
              <h3 className='name'>Rechargable Smoothie Blender</h3>
              <h2 className='bid'>Starting Bid</h2>
              <span>N150.00</span> <br/>
              <button>Place Bid</button>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="coupon">
          <div className="coupon-content">
            <h4>Enjoy Discounts</h4>
            <h5>Save big on products - use coupons at checkout!</h5>
            <div className="coupon-button">
              <a href="https://svamarketplace.com/coupons">
                View All Coupons
              </a>
            </div>
            <div className="coupon-image">
              <img src="images/coupon-bag.webp" alt="" />
            </div>
          </div>
        </div>

       
      </div>
    </>
  )
}

export default App
