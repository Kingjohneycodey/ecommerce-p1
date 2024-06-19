import { Outlet } from 'react-router-dom'
import { HeaderContainer } from '../ui/header'
import { Footer } from '../ui/_footer'
import SideNavButtons from '../ui/SideNavButtons'
import { NavContextProvider } from '@/context/NavContext'

export default function RootLayout() {
  return (
    <NavContextProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <HeaderContainer />
        <SideNavButtons />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </NavContextProvider>
  )
}
