import { TopBar } from './top-bar'
import { AdBanner } from './ad-banner'
import { MainNavigationBar } from './main-navigation-bar'
import { ProductsNavigationBar } from './products-navigation-bar'

export function HeaderContainer() {
  return (
    <>
      <AdBanner />
      <TopBar />
      <div className="sticky inset-x-0 top-0">
        <MainNavigationBar />
        <ProductsNavigationBar />
      </div>
    </>
  )
}
