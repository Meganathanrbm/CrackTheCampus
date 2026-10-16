import { cn } from '@/lib/cn'

export function MapEmbed({ query, title = 'Map', className }) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-border bg-surface-raised', className)}>
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block size-full border-0"
      />
    </div>
  )
}
