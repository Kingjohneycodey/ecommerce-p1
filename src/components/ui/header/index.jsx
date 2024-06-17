import { TopBar } from './TopBar'
import { AdBanner } from './AdBanner'
import { MainNavigationBar } from './MainNavigationBar'
import { ProductsNavigationBar } from './ProductNavigationBar'

export function HeaderContainer() {
  return (
    <>
      <AdBanner />
      <TopBar />
      <div className="sticky inset-x-0 top-0 z-10">
        <MainNavigationBar />
        <ProductsNavigationBar />
      </div>
    </>
  )
}
