import DiscountBanner from '@/components/DiscountBanner'
import Auction from '@/components/Auction'
import Slids from '@/components/Slids'
import { Deals } from '@/components/Deals'
import FeaturedCate from '@/components/Featuredcats/FeaturedCate'
import Ads from '@/components/Ads/Ads'
import Product from '@/components/Product/Product'


const HomePage = () => {
  return (
    <div>
      <Slids />
      <Deals />
      <FeaturedCate />
      <Ads />
      <Product />
      <Auction />
      <DiscountBanner />
    </div>
  )
}

export default HomePage
