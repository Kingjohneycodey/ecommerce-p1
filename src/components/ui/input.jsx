import { cn } from '@/lib/utils'

export function Input({ className, type, ...props }) {
  return (
    <input
      type={type || 'text'}
      className={cn(
        'border-border flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}
