import DiscountBanner from "../components/DiscountBanner"
import Auction from "../components/Auction"
import Slids from '@/components/Slids'

const Home = () => {
  return (
    <div>
      <Slids />
         <Auction/>
     <DiscountBanner/>
    </div>
  )
}

export default Home
