import React from 'react'

import './featuredCat.css'
import { FeaturedCat } from '@/assets/assets'

function FeaturedCate() {


  return (
    <div className='featured'>
      <h1 className=' featuredTitle'>Featured Categories</h1>
      <div className=' feature'>
        {FeaturedCat.map((item) => {
          return (
            <div className='featuredDetails'>
              <img src={item.img} alt="" className=' featuredImg' />
              <div className='featuredName'>
                <p >{item.title} </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedCate
