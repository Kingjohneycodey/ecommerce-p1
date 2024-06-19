import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

import back from '../assets/back.png'
import earn from '../assets/earn.png'
import exclusive from '../assets/exclusive.png'
import love from '../assets/love.png'
import win from '../assets/win.png'

const data = [
  {
    id: 1,
    image: back,
  },
  {
    image: earn,
  },
  {
    id: 3,
    image: love,
  },
  {
    id: 4,
    image: exclusive,
  },
  {
    id: 5,
    image: win,
  },
]

export default function Slids() {
  return (
    <div className="">
      <Swiper
        modules={[A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {data.map((user, i) => (
          <SwiperSlide key={i}>
            <div className="w-[120%]">
              <img src={user.image} className="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
