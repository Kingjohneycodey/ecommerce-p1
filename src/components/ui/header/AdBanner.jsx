import { Button } from '../Button'
import { XIcon } from 'lucide-react'

export function AdBanner() {
  return (
    <div className="relative max-w-full">
      {/* desktop */}
      <img
        className="hidden min-h-[60px] object-cover object-center lg:block"
        src="/images/banner-lg.gif"
        alt="banner"
      />

      {/* tablet */}
      <img
        className="hidden min-h-14 object-cover object-center md:block lg:hidden"
        src="/images/banner-md.gif"
        alt="banner"
      />

      {/* mobile */}
      <img
        className="min-h-10 object-cover object-center sm:min-h-14 md:hidden"
        src="/images/banner.gif"
        alt="banner"
      />

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-300 hover:bg-neutral-foreground-100/50"
      >
        <XIcon className="size-8" />
      </Button>
    </div>
  )
}
