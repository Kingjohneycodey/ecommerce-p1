import { useState } from 'react'
import { Button } from '@/components/ui/_Button'
import { XIcon } from 'lucide-react'

export function AdBanner() {
  const [showAdBanner, setShowAdBanner] = useState(true)

  function closeAdBanner() {
    setShowAdBanner(false)
  }

  if (!showAdBanner) return null

  return (
    <div className="relative max-w-full bg-background">
      {/* desktop */}
      <img
        className="relative z-10 hidden min-h-[60px] object-cover object-center lg:block"
        src="/images/banner-lg.gif"
        alt="banner"
      />

      {/* tablet */}
      <img
        className="relative z-10 hidden min-h-14 object-cover object-center md:block lg:hidden"
        src="/images/banner-md.gif"
        alt="banner"
      />

      {/* mobile */}
      <img
        className="relative z-10 min-h-10 object-cover object-center sm:min-h-14 md:hidden"
        src="/images/banner.gif"
        alt="banner"
      />

      <Button
        variant="ghost"
        size="icon"
        onClick={closeAdBanner}
        className="absolute right-4 top-1/2 z-50 -translate-y-1/2 text-neutral-300 hover:bg-neutral-foreground-100/50"
      >
        <XIcon className="size-8" />
      </Button>
    </div>
  )
}
