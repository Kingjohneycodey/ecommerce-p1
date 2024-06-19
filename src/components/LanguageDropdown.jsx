import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/_DropdownMenu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function LanguageDropDown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu
      onOpenChange={(openState) => setIsOpen(openState)}
    >
      <DropdownMenuTrigger className="header-action flex items-center justify-center gap-1 p-2">
        <span>English</span>
        <ChevronDown
          className={cn(
            'size-4 opacity-50 transition',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Language</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
