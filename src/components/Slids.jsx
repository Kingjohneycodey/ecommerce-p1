import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay } from 'swiper/modules'

//lazy loading images
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import 'swiper/css'
import 'swiper/css/autoplay'

import back from '@/assets/back.png'
import earn from '@/assets/earn.png'
import exclusive from '@/assets/exclusive.png'
import love from '@/assets/love.png'
import win from '@/assets/win.png'

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
            <div className="">
              <LazyLoadImage
                src={user.image}
                className="aspect-[8/3] object-cover md:aspect-auto"
                effect="blur"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
