import placeholder from '@/lib/placeholder.json'
import { SellerCard } from './SellerCard'

const { sellers } = placeholder

export function SellerCards({ className }) {
  // fetch sellers here

  return (
    <div
      className={`w-full grid-cols-1 -space-x-px -space-y-px bg-background/5 backdrop-blur-[2px] max-sm:flex max-sm:flex-wrap sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${className}`}
    >
      {sellers.map((seller) => (
        <SellerCard
          key={seller.id}
          {...seller}
          className="border bg-background first:z-10 hover:!ml-0 hover:!mr-0 max-sm:flex-1 first:md:-mt-px"
        />
      ))}
    </div>
  )
}
