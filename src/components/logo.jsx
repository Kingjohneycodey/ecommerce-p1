import { Separator } from './ui/separator'

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

      <h1 className="text-xl font-black tracking-wider text-brand-secondary lg:text-2xl">
        E-COMMERCE
      </h1>
    </div>
  )
}
