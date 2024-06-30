import { sellers } from '@/lib/placeholder'
import { Fragment, useEffect, useRef } from 'react'
import { SellerCard } from './SellerCard'
import { Link } from 'react-router-dom'

export function TopSellersSection() {
  const topSellersSectionSwiperRef = useRef(null)

  useEffect(() => {
    const swiperContainer =
      topSellersSectionSwiperRef.current
    const params = {
      navigation: true,
      breakpoints: {
        375: {
          slidesPerView: 1.5,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: -1,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: -1,
        },
      },
      injectStyles: [
        `    
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            background-position: center;
            background-size: 20px;
            background-repeat: no-repeat;
            padding: 0px 8px;
            border-radius: 50%;
            filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
          }

          .swiper-button-next svg ,
          .swiper-button-prev svg {
             display: none;
          }

          .swiper-button-prev {
            transform: translateX(-8px) scale(90%);
            background-image: url("/icons/left.svg");
          }

          .swiper-button-next {
            transform: translateX(8px) scale(90%);
            background-image: url("/icons/right.svg");
          }

          .swiper-button-next.swiper-button-disabled, 
          .swiper-button-prev.swiper-button-disabled {
            opacity: 0;
          } 
      `,
      ],
    }

    Object.assign(swiperContainer, params)
    swiperContainer.initialize()
  }, [])
  return (
    <section className="page-bounds overflow-hidden bg-background py-4">
      <div className="my-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          Top Sellers
        </h2>
        <Link
          to={'/sellers'}
          className="text-sm font-medium text-blue-500 hover:underline"
        >
          View All Sellers
        </Link>
      </div>
      <swiper-container
        ref={topSellersSectionSwiperRef}
        init="false"
      >
        {sellers.map((s) => (
          <Fragment key={s.id}>
            <swiper-slide>
              <SellerCard
                data={s}
                verificationBadgeType={'BOOKMARK'}
                className="border border-border/5 bg-background transition-colors hover:relative hover:border-brand-primary"
              />
            </swiper-slide>
          </Fragment>
        ))}
      </swiper-container>
    </section>
  )
}
