import { Outlet } from 'react-router-dom'
import { HeaderContainer } from '../ui/header'
import { Footer } from '../ui/footer'
import SideNavButtons from '../ui/side-nav-buttons'

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <HeaderContainer />
      <SideNavButtons />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
