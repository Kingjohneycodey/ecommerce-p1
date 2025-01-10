import { Separator } from './ui/Separator'

export function Logo() {
  return (
    <div className="flex h-10 w-fit cursor-pointer items-center space-x-4 overflow-hidden p-2">
      <img
        src="/icons/logo.svg"
        className="size-6"
        alt="logo"
      />

      <Separator
        className="bg-brand-secondary"
        orientation="vertical"
      />

      <span className="text-xl font-black tracking-wider text-brand-primary max-[420px]:hidden lg:text-2xl">
        BUY-SHOP
      </span>
    </div>
  )
}
