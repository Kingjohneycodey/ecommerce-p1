import React from 'react'

const DiscountBanner = () => {
  return (
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
  )
}

export default DiscountBanner