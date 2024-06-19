import DiscountBanner from '../components/DiscountBanner'
import Auction from '../components/Auction'
import Slids from '@/components/Slids'
import { Deals } from '@/components/Deals'

const HomePage = () => {
  return (
    <div>
      <Slids />
      <Deals />
      <Auction />
      <DiscountBanner />
    </div>
  )
}

export default HomePage
