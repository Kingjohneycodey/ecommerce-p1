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
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Tooltip } from '../tooltip'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../button'

export function MainNavigationBar() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="relative flex min-h-12 items-center justify-between gap-4 bg-background px-4 py-4 max-lg:overflow-hidden md:px-8 lg:px-10">
      <Logo />

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
