import React from 'react'
import dell from '../assets/dell.webp'
import apple from '../assets/apple.png'
import dove from '../assets/dove.png'
import google from '../assets/google.webp'
import hp from '../assets/hp.webp'
import nokia from '../assets/nokia.png'
import nestle from '../assets/nestle.png'
import puma from '../assets/puma.png'
import samsung from '../assets/samsung.png'
import toyota from '../assets/toyota.png'
import pampers from '../assets/pampers.png'
import benz from '../assets/mercedes-benz.png'
import '../styles/brands.css'

const TopBrands = () => {
  return (
    <div className='brands-container'>
        <h3>Top Brands</h3>
    <div className='grid-container'>
        <div className='grid-item'>
            <a href="">
                <img src={dell} alt="" />
                <p>Dell</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={hp} alt="" />
                <p>Hp</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={google} alt="" />
                <p>Google</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={pampers} alt="" />
                <p>Pampers</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={benz} alt="" />
                <p>Mercedes-Benz</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={dove} alt="" />
                <p>Dove</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={nestle} alt="" />
                <p>Nestle</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={samsung} alt="" />
                <p>Samsung</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={toyota} alt="" />
                <p>Toyota</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={nokia} alt="" />
                <p>Nokia</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={apple} alt="" />
                <p>Apple</p>
            </a>
        </div>
        <div  className='grid-item'>
            <a href="">
                <img src={puma} alt="" />
                <p>Puma</p>
            </a>
        </div>
    </div>

</div>
  )
}

  


export default TopBrands