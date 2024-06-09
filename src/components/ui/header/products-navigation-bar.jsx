import { useState } from 'react'
import {
  CategoriesDropdown,
  CategoryLinks,
} from './cateogories-dropdown'
import { ShoppingCartIcon } from 'lucide-react'
import { DesktopNav } from '../nav'

export function ProductsNavigationBar() {
  const [currentCategory, setCurrentCategory] =
    useState(null)
  const [
    categoriesDropdownOpen,
    setCategoriesDropdownOpen,
  ] = useState(false)

  return (
    // desktop only
    <div className="hidden lg:block">
      <div className="relative flex min-h-10 items-stretch justify-between gap-4 bg-brand-primary px-4 text-sm font-bold text-neutral-foreground-300 md:px-8 lg:px-16">
        <CategoriesDropdown
          setCurrentCategory={setCurrentCategory}
          isOpen={categoriesDropdownOpen}
          setIsOpen={setCategoriesDropdownOpen}
        />

        <div className="relative flex flex-1 items-center justify-between">
          <DesktopNav />
          {categoriesDropdownOpen &&
            currentCategory != null && (
              <CategoryLinks id={currentCategory} />
            )}

          {/* cart */}
          <div className="flex min-w-max items-center bg-neutral/20 px-4 py-4 transition hover:bg-neutral/30">
            <button className="flex items-center gap-2">
              <ShoppingCartIcon />
              <span className="inline-flex items-center gap-3">
                <span className="font-mono text-base">
                  N0.00
                </span>
                <span className="text-sm font-light">
                  &#40;<span className="font-mono">0</span>{' '}
                  items&#41;
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
