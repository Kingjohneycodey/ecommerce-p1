import { categories } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CategoriesDropdown({
  setCurrentCategory,
  isOpen,
  setIsOpen,
}) {
  return (
    <div className="relative">
      {/* dropdown trigger */}
      <button
        className="z-30 inline-flex h-full items-center gap-16 bg-neutral/20 px-4 py-4 transition hover:bg-neutral/30"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="inline-flex min-w-max items-center gap-3">
          <span className="text-base">Categories</span>
          <span className="text-sm font-light">
            &#40;See All&#41;
          </span>
        </span>

        <ChevronDown
          className={cn(isOpen ? 'rotate-180' : 'rotate-0')}
        />
      </button>

      <div
        className={cn(
          'absolute left-0 right-0 top-full z-20 flex overflow-auto bg-background font-light text-foreground transition-[height]',
          isOpen ? 'h-[470px]' : 'h-0'
        )}
      >
        <ul>
          {categories.map((cat) => (
            <li
              key={cat.id}
              className="group overflow-hidden border-b hover:bg-neutral/10"
            >
              <Link
                to={`/category/${cat.slug}`}
                className="flex items-center px-3 transition group-hover:translate-x-2"
                onMouseOver={() => {
                  setTimeout(() => {
                    setCurrentCategory(cat.id)
                  }, 200)
                }}
              >
                <img
                  className="h-6 w-6 object-contain group-hover:brightness-90"
                  src={cat.icon}
                  alt={`${cat.name} icon`}
                />
                <span className="p-4">{cat.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent"
          onClick={() => setIsOpen(false)}
          onMouseOver={() => setCurrentCategory(null)}
        />
      )}
    </div>
  )
}

export function CategoryLinks({ id }) {
  if (id === 'none') return console.log('hello')

  return (
    <div
      key={id}
      className={cn(
        'absolute -left-4 right-0 top-full flex h-[470px] animate-fade-in items-center gap-4 bg-background text-foreground',
        id === null && 'opacity-0'
      )}
    >
      <ul>
        <li>
          {categories
            .filter((c) => c.id === id)
            .map((cat) => cat.name)}
        </li>
      </ul>
    </div>
  )
}
