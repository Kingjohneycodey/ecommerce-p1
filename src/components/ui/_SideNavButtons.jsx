import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/_Button'
import { sideLinks } from '@/lib/data'
import {
  ChevronRightIcon,
  ChevronsRightIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavContext } from '@/context/NavContext'

export default function SideNavButtons() {
  const { navOpen } = useNavContext()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSideButtons = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <button
        className={cn(
          'fixed top-[20%] z-40 mb-2 ml-1 size-8 items-center justify-center rounded-full bg-accent transition-transform duration-500 ease-out',
          'max-lg:left-4 lg:hidden',
          isOpen ? 'rotate-180' : 'rotate-0',
          navOpen ? 'max-lg:hidden' : 'block'
        )}
        onClick={toggleSideButtons}
      >
        <ChevronsRightIcon className="mx-auto size-6 text-white" />
      </button>
      <div
        className={cn(
          'fixed top-1/2 z-40 -translate-y-1/2 transition-[left] duration-500 ease-out',
          'lg:left-4',
          isOpen ? 'left-4' : '-left-[20%]',
          navOpen ? 'max-lg:hidden' : 'block'
        )}
      >
        <ul className="space-y-6">
          {sideLinks.map(({ icon: Icon, ...l }) => (
            <li key={l.link}>
              <Button
                size="icon"
                className={cn(
                  'group relative aspect-square rounded-full bg-transparent shadow-lg hover:bg-transparent'
                )}
                asChild
              >
                <Link to={l.link}>
                  <span>
                    <span
                      className={cn(
                        'relative z-50 inline-flex size-12 items-center justify-center rounded-full !bg-brand-primary'
                      )}
                    >
                      <Icon
                        fill={
                          l.name
                            .toLowerCase()
                            .includes('flash')
                            ? 'white'
                            : 'transparent'
                        }
                      />
                    </span>

                    <span
                      className={cn(
                        'absolute left-[40%] top-1/2 z-40 flex h-12 -translate-y-1/2 items-center justify-between overflow-hidden rounded-r-full bg-brand-primary py-2 transition-all duration-500 ease-out',
                        'w-0 pl-7',
                        'group-hover:w-40'
                      )}
                    >
                      {l.name}
                      <ChevronRightIcon className="mr-2 size-6" />
                    </span>
                  </span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
