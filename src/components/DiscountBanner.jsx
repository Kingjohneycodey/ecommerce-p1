import React from 'react'
import { Link } from 'react-router-dom'

const DiscountBanner = () => {
  return (
    <div className="discount-container">
        <div className="coupon">
          <div className="coupon-content">
            <h4>Enjoy Discounts</h4>
            <h5>Save big on products - use coupons at checkout!</h5>
            <div className="coupon-button">
            <Link to="/coupons" className="btn btn-primary">View All Coupons</Link>
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