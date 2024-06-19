import { SearchIcon } from 'lucide-react'
import { Input } from './ui/_input'

export function SearchBar() {
  return (
    <form className="relative flex-1 lg:mx-auto lg:max-w-md">
      <Input
        type="text"
        placeholder="I am shopping for..."
        className="peer rounded-full pl-4 pr-10"
      />
      <button className="absolute right-3 top-1/2 aspect-square -translate-y-1/2 rounded-full p-1 text-border hover:bg-neutral-200/30 peer-focus-within:text-brand-primary">
        <SearchIcon />
      </button>
    </form>
  )
}
