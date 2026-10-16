import { cn } from '@/lib/cn'

export function ScoreBadge({ image, label, size = 'md', className }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl border border-border bg-surface-raised',
        size === 'lg' ? 'size-28 shadow-gold' : 'size-24',
        className,
      )}
    >
      <img src={image} alt={`${label} score`} loading="lazy" className="size-full object-contain p-2.5" />
    </div>
  )
}
