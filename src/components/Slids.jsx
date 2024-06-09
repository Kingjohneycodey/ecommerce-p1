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
    id: 2,
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
    <div>
      <Swiper
        modules={[A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5100,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {data.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="w-[100%]">
              <img src={user.image} className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
