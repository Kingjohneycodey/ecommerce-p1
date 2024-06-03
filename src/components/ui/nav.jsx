import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    // desktop nav
    <nav>
      <ul className="flex items-center">
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
      <div className="h-1 bg-gray-200" />
    </nav>
  )
}
