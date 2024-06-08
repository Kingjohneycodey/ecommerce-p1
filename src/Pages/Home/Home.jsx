import React from 'react'
import './home.css'
import FeaturedCate from '../../components/Featuredcats/FeaturedCate'
import Ads from '../../components/Ads/Ads'
import ProductCard from '../../components/Product/Product'
import Product from '../../components/Product/Product'

function Home() {
  return (

    <div>
      <div className='home'>
        <FeaturedCate />
        <Ads />
      </div>
      <div className='product'>
        <Product />
      </div>
    </div>
  )
}

export default Home
