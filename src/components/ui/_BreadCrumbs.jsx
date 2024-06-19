import { cn } from '@/lib/utils'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '@/lib/data'

export function BreadCrumbs() {
  const { pathname } = useLocation()

  const routes = [
    { name: 'Home', path: '/' }, // Default homepage route
    ...pathname
      .split('/')
      .filter(Boolean)
      .map((r, i, arr) => {
        const path = `/${arr.slice(0, i + 1).join('/')}`

        return {
          name:
            navLinks.find(({ link }) => link === path)
              ?.name ?? r,
          path,
        }
      }),
  ]

  return (
    <ul className="flex min-w-max items-center text-sm font-medium">
      {routes.map((r, i) => (
        <li key={r.name + i}>
          <Link
            to={r.path}
            className={cn(
              'capitalize',
              i === routes.length - 1
                ? 'text-foreground'
                : 'text-foreground/50 hover:underline'
            )}
          >
            {r.name.includes(' ') ? `"${r.name}"` : r.name}
          </Link>
          {i !== routes.length - 1 && (
            <span className="mx-2">/</span>
          )}
        </li>
      ))}
    </ul>
  )
}
