import {
  Moon,
  Sun,
  LaptopIcon,
} from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/utils'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({
            variant: 'ghost',
            size: 'icon',
            className: 'rounded-full',
          })
        )}
        // asChild
      >
        {/* <Button variant="outline" size="icon"> */}
        {theme === 'light' && <Sun />}
        {theme === 'dark' && <Moon />}

        {theme === 'system' && <LaptopIcon />}
        <span className="sr-only">
          Toggle theme
        </span>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
