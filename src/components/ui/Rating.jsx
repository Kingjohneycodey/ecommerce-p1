import { cn } from '@/lib/utils'
import { StarIcon } from 'lucide-react'
import { useState } from 'react'

export function Rating({
  rating: initialRating,
  max = 5,
  reviews = 0,
  readOnly,
  className,
  // eslint-disable-next-line no-unused-vars
  onRating = (selectedRating) => {},
}) {
  const [rating, setRating] = useState(initialRating)

  const ratingArray = Array.from(
    { length: max },
    (_, i) => i + 1
  )

  async function handleRating(r) {
    if (readOnly) return
    setRating(r)
    // eslint-disable-next-line no-unused-vars
    const res = await onRating(r)

    // if (!res.ok) {
    //   setRating(initialRating)
    // }
  }

  return (
    <p
      className={cn(
        'flex w-fit flex-wrap items-center gap-1 max-sm:gap-0.5',
        className
      )}
    >
      <span className="inline-flex items-center">
        {ratingArray.map((r) => (
          <button
            key={r}
            onClick={() => handleRating(r)}
            disabled={readOnly}
          >
            <StarIcon
              stroke="transparent"
              size={18}
              className={cn(
                r <= rating
                  ? 'fill-yellow-500'
                  : 'fill-secondary'
              )}
            />
          </button>
        ))}
        <span className="sr-only">
          {rating} star rating
        </span>
      </span>

      <span
        className={cn(
          'text-sm',
          reviews === 0
            ? 'text-neutral-foreground-100'
            : 'text-foreground'
        )}
      >
        &#40;{reviews} reviews&#41;
      </span>
    </p>
  )
}
