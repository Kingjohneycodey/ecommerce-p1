import deals from '../assets/deals.png'
import '../index.css'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

//images
import ba from '../assets/ba.png'

import camera from '../assets/camera.png'
import sneakers from '../assets/sneakers.png'
import pad from '../assets/pad.png'
import toaster from '../assets/toaster.png'
import tv from '../assets/tv.png'
import shoes from '../assets/shoes.png'
import phone from '../assets/phone.png'
import drive from '../assets/drive.png'
import bear from '../assets/bear.png'
import blender from '../assets/blender.png'
import bag from '../assets/bag.png'

//adding commas to the numbers

function numbr(num) {
  //return num.toLocaleString().toFixed(2)
  return new Intl.NumberFormat('en-us').format(num)
}

const data = [
  {
    img: ba,
    discount: numbr(25000.47),
    Promo: true,
    price: numbr(20000.56),
  },
  {
    img: camera,
    discount: numbr(30000),
    Promo: true,
    price: numbr(20000),
  },
  {
    img: sneakers,
    discount: numbr(15000.41),
    Promo: false,
    price: numbr(20000.32),
  },
  {
    img: pad,
    discount: numbr(15000.45),
    Promo: true,
    price: numbr(20000.2),
  },
  {
    img: toaster,
    discount: numbr(15000.59),
    Promo: true,
    price: numbr(20000.77),
  },
  {
    img: tv,
    discount: numbr(15000),
    Promo: true,
    price: numbr(20000),
  },
  {
    img: shoes,
    discount: numbr(15000.35),
    Promo: true,
    price: numbr(20000.24),
  },
  {
    img: phone,
    discount: numbr(32000.48),
    Promo: false,
    price: numbr(20000.42),
  },
  {
    img: drive,
    discount: numbr(32000),
    Promo: true,
    price: numbr(20000),
  },
  {
    img: bear,
    discount: numbr(32000),
    Promo: true,
    price: numbr(20000),
  },
  {
    img: blender,
    discount: numbr(32000),
    Promo: false,
    price: numbr(20000),
  },
  {
    img: bag,
    discount: numbr(32000.11),
    Promo: true,
    price: numbr(20000.73),
  },
]

const Deals = () => {
  return (
    <section className="text-white">
      <div className="mx-auto flex h-full max-w-[1900px] flex-col overflow-hidden px-6 py-4 font-sans font-bold md:px-10 md:py-8">
        <img
          src={deals}
          className="aspect-[28/10] object-cover md:aspect-auto"
        />
        <div className="relative border-t-2 bg-[#0f551f] px-5 pb-6 pt-20 md:px-10 md:pb-14">
          <p className="absolute right-[65px] top-[30px] text-[14px] hover:text-neutral-400 md:text-[16.8px]">
            <Link to="/deal">View All</Link>
          </p>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            {data.map((user, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
                  <div className="w-[33%] overflow-hidden rounded-full md:w-[46%]">
                    <img
                      src={user.img}
                      className="duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-center">
                    <p className="text-[16px] md:text-[20.8px]">
                      <span>&#8358;</span>
                      {user.price}
                    </p>
                    <p className="text-[14px] text-neutral-300 line-through md:text-[18.5px]">
                      {user.Promo && <span>&#8358;</span>}
                      {user.Promo && user.discount}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Deals
