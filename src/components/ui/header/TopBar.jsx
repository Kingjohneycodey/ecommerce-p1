import { CurrencyDropDown } from '@/components/CurrencyDropdown'
import { LanguageDropDown } from '@/components/LanguageDropdown'
import { Separator } from '../Separator'
import { Link } from 'react-router-dom'

export function TopBar() {
  return (
    <div className="relative z-10 flex h-12 items-center justify-between bg-background px-8 lg:px-16">
      <LanguageDropDown />
      <CurrencyDropDown />

      <div className="hidden h-5 flex-1 lg:block" />

      <div className="hidden h-5 items-center space-x-4 lg:flex [&>*]:py-3 [&>button]:px-1">
        <Link to="/" size="sm" className="header-action">
          Become a Seller!
        </Link>

        <Separator orientation="vertical" />

        <Link to="/" size="sm" className="header-action">
          Login to seller
        </Link>

        <a
          href="tel:+234901234567"
          size="sm"
          className="header-action ml-4 inline-block"
        >
          Help Line +234 901 234 567
        </a>
      </div>
    </div>
  )
}
