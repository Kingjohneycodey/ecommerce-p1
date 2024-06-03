import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function CurrencyDropDown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu
      onOpenChange={(openState) =>
        setIsOpen(openState)
      }
    >
      <DropdownMenuTrigger className="header-action flex items-center justify-center gap-1 p-2">
        <span>Nigerian Naira</span>
        <ChevronDown
          className={cn(
            'size-4 opacity-50 transition',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          Currency
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">
          Nigerian Naira ₦
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
