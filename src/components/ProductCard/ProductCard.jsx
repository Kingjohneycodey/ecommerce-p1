import React from 'react'
import './productCard.css'

function ProductCard({ product }) {

  return (
    <div className='productCard'>
      <div className=' pcImg'>
        <center>       <img src={product.img} alt="product Image" />
          <p className='pcAdd'>Add to Cart</p></center>
      </div>
      <div className=' PCdetails'>
        <div>
          <p>{product.title.substring(0, 14)}</p>
        </div>
        <div className='pc'>
          <div className='PCprice'>
            <p className='PCprice1'>${product.oldPrice}</p>
            <p className='PCprice2'>${product.newPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
