import { cn } from '@/lib/utils'
import { Button } from './button'

export default function SideNavButtons() {
  return (
    <div
      className={cn(
        'fixed top-1/2 z-[100] -translate-y-1/2',
        'left-6'
      )}
    >
      <ul className="space-y-4">
        {[1, 2, 3, 4].map((b, i) => (
          <li key={i}>
            <Button className="rounded-full drop-shadow-lg">
              {b}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
