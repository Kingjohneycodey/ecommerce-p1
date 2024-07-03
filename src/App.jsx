import { Outlet } from 'react-router-dom'
import { HeaderContainer } from './components/ui/header'
import { Footer } from './components/ui/Footer'
import { SideNavButtons } from './components/ui/SideNavButtons'
import { NavContextProvider } from '@/context/NavContext'
import { PoliciesLinks } from './components/layout/PoliciesLinks'

export default function App() {
  return (
    <NavContextProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <HeaderContainer />
        <SideNavButtons />

        <main className="flex-1 bg-background antialiased">
          <Outlet />
        </main>

        <PoliciesLinks />

        <Footer />
      </div>
    </NavContextProvider>
  )
}
