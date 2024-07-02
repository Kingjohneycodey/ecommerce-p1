import React from 'react'
import './ads.css'
import ad1 from '../../assets/ads1.webp'
import ad2 from '../../assets/ads2.webp'
import ad3 from '../../assets/ad3.webp'

function Ads() {
  const img = [{ img: ad1 }, { img: ad2 }, { img: ad3 }]

  return (
    <div className="ad">
      <div className="ads">
        {img.map((item, i) => {
          return (
            <div key={i}>
              <img
                src={item.img}
                alt="ads"
                className="adsImg"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ads
