import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'
import { NavLink, useLocation } from 'react-router-dom'
import UserAuth from '@/components/UserAuth'
import { Button } from '@/components/ui/Button'
import { XIcon } from 'lucide-react'
import { useNavContext } from '@/context/NavContext'
import { useEffect } from 'react'

export function DesktopNav() {
  return (
    <nav className="hidden lg:block">
      <ul
        className="mx-auto flex max-w-[600px] items-center overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.link}
              className={({ isActive }) =>
                cn(
                  'inline-flex min-w-max items-center bg-transparent px-4 py-4 transition hover:bg-neutral/20',
                  isActive &&
                    'hover:bg-neutral-30 bg-neutral/30'
                )
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function MobileNav() {
  const { pathname } = useLocation()
  const { navOpen, setNavOpen } = useNavContext()

  const close = () => setNavOpen(false)

  useEffect(() => {
    close()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <nav className="block lg:hidden">
      <div
        className={cn(
          'fixed left-0 top-0 z-[100] min-h-dvh w-[70%] bg-background transition-all duration-300 md:w-3/5',
          navOpen ? 'left-0' : '-left-full'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="ml-4 mt-4 hover:bg-transparent"
          onClick={close}
        >
          <XIcon className="text-destructive" size={32} />
        </Button>
        <div className="border-b border-b-neutral-100/30 px-4 py-8">
          <UserAuth />
        </div>

        <ul className="space-y-8 px-8 py-8">
          {navLinks.map((l) => (
            <li key={l.name}>
              <NavLink
                to={l.link}
                className={({ isActive }) =>
                  cn(
                    'font-semibold',
                    isActive && 'text-brand-primary'
                  )
                }
              >
                {l.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {navOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={close}
        >
          <span className="sr-only">close nav</span>
        </div>
      )}
    </nav>
  )
}
