import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { SearchBar } from '@/components/search-bar'
import UserAuth from '@/components/user-auth'
import {
  ArrowLeftRight,
  HeartIcon,
  BellIcon,
  ArrowLeft,
  SearchIcon,
  MenuIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Tooltip } from '../tooltip'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../button'
import { MobileNav } from '../nav'
import { useNavContext } from '@/context/nav-context'

export function MainNavigationBar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const { navOpen, setNavOpen } = useNavContext()

  function toggleMobileNav() {
    setNavOpen((prev) => !prev)
  }

  return (
    <>
      <div className="relative z-40 flex max-h-14 min-h-12 items-center justify-between gap-4 bg-background px-8 py-4 max-lg:overflow-hidden lg:px-16">
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleMobileNav}
            className="flex items-center justify-center lg:hidden"
          >
            <MenuIcon />
          </Button>
          <Logo />
        </div>

        {/* desktop search */}
        <div className="hidden flex-1 lg:block">
          <SearchBar />
        </div>

        {/* mobile search */}
        <div
          className={cn(
            'absolute left-0 right-0 z-40 flex h-full items-center justify-center gap-4 bg-background px-4 transition-all md:px-8 lg:hidden',
            searchOpen ? 'top-0' : '-top-full'
          )}
        >
          <button
            className="text-secondary"
            onClick={() => setSearchOpen(false)}
          >
            <ArrowLeft />
          </button>

          <div className="flex-1">
            <SearchBar />
          </div>
        </div>

        <div className="hidden lg:block">
          <UserActions />
        </div>

        <div className="hidden lg:block">
          <UserAuth />
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => setSearchOpen(true)}
            className="rounded-full hover:bg-neutral-100/30 lg:hidden"
            variant="ghost"
            size="icon"
          >
            <SearchIcon />
          </Button>
          <ModeToggle />
        </div>
      </div>

      <MobileNav isOpen={navOpen} setIsOpen={setNavOpen} />
    </>
  )
}

export function UserActions() {
  return (
    <div className="flex-2 flex space-x-2">
      {['compare', 'wishlist', 'notifications'].map(
        (item) => (
          <Tooltip
            content={
              <span className="text-xs capitalize">
                {item}
              </span>
            }
            key={item}
          >
            <Link
              to={`/${item}`}
              className="inline-block aspect-square p-1 text-secondary"
            >
              {
                {
                  compare: (
                    <ArrowLeftRight
                      size={20}
                      fill="hsl(var(--color-secondary))"
                    />
                  ),
                  wishlist: (
                    <HeartIcon
                      size={20}
                      fill="hsl(var(--color-secondary))"
                    />
                  ),
                  notifications: (
                    <BellIcon
                      size={20}
                      fill="hsl(var(--color-secondary))"
                    />
                  ),
                }[item]
              }
            </Link>
          </Tooltip>
        )
      )}
    </div>
  )
}
