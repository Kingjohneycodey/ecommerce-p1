import React from 'react'

const Auction = () => {
  return (
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
  )
}

export default Auction