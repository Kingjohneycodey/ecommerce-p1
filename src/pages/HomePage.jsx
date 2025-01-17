import DiscountBanner from '@/components/DiscountBanner'
import Auction from '@/components/Auction'
import Slids from '@/components/Slids'
import Deals from '@/components/Deals'
import FeaturedCate from '@/components/Featuredcats/FeaturedCate'
import Ads from '@/components/Ads/Ads'
import Product from '@/components/Product/Product'
import TopBrands from '@/components/TopBrands'
import { TopSellersSection } from '@/components/sellers/TopSellersSection'


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
      <TopSellersSection />
      <TopBrands />
    </div>
  )
}

export default HomePage
