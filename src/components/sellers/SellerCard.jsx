import { Link } from 'react-router-dom'
import { Rating } from '@/components/ui/Rating'
import { cn } from '@/lib/utils'
import {
  CheckCircle2Icon,
  ChevronRightIcon,
} from 'lucide-react'

export function SellerCard({
  id,
  image,
  name,
  rating,
  reviews,
  className,
  verified,
}) {
  return (
    <div
      className={cn(
        'group/sellerCard min-w-fit px-4 py-6 text-center shadow-none transition-shadow duration-150 ease-in hover:z-20 hover:shadow-2xl',
        className
      )}
    >
      <div className="relative mx-auto w-fit">
        <div className="mx-auto mb-3 size-28 overflow-hidden rounded-full max-sm:size-20">
          <img
            src={image}
            alt={name}
            className="size-full scale-100 transition-transform duration-200 ease-out group-hover/sellerCard:scale-110"
          />
        </div>
        {verified && (
          <span
            className="absolute right-2 top-1 inline-block rounded-full bg-blue-500 p-px"
            title="verified"
          >
            <CheckCircle2Icon className="size-5 text-white" />
          </span>
        )}
      </div>

      <h2 className="mb-8 line-clamp-2 w-full truncate text-balance px-2 font-bold">
        {name}
      </h2>

      <Rating
        rating={rating}
        reviews={reviews}
        className="mx-auto mb-6 max-sm:justify-center"
        readOnly
      />

      <Link
        className={`group/sellerCardLink relative mx-auto flex w-max items-center gap-8 py-1.5 text-sm font-semibold max-sm:gap-2 max-sm:pr-1 sm:-translate-x-2`}
        to={`/shop/${name.toLowerCase().replace(' ', '-')}-${id}`}
      >
        <span className="absolute z-[1] h-full w-8 rounded-2xl bg-accent/20 transition-[width] duration-500 ease-in-out group-hover/sellerCardLink:w-[calc(100%_+_16px)] group-focus/sellerCardLink:w-[calc(100%_+_16px)]" />
        <span
          className={cn(
            'relative z-10 flex place-items-center text-brand-primary',
            'box-content before:absolute before:left-4 before:top-1/2 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-brand-primary before:opacity-0 before:transition-all before:duration-300 before:ease-in before:content-[""] group-hover/sellerCardLink:before:w-4 group-hover/sellerCardLink:before:opacity-100 group-focus/sellerCardLink:before:w-4 group-focus/sellerCardLink:before:opacity-100'
          )}
        >
          <ChevronRightIcon className="size-5 translate-x-[6px] transition-transform duration-300 ease-in group-hover/sellerCardLink:translate-x-5 group-focus/sellerCardLink:translate-x-5" />
        </span>
        <span className="max-sm:translate-x-2">
          {' '}
          VISIT STORE
        </span>
      </Link>
    </div>
  )
}
