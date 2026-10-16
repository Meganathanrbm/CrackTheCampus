import { cn } from '@/lib/cn'

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-brand/10 px-3 py-1',
        'text-xs font-medium tracking-widest text-brand-soft uppercase',
        className,
      )}
    >
      {children}
    </span>
  )
}
