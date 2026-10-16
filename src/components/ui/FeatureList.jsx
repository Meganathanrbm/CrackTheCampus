import { cn } from '@/lib/cn'

export function FeatureList({ items, variant = 'stacked', ruleClassName, className }) {
  return (
    <ul className={cn('space-y-4', className)}>
      {items.map(({ id, title, description }) => (
        <li key={id} className={cn('border-l-2 border-brand/50 pl-4', ruleClassName)}>
          {variant === 'stacked' ? (
            <>
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-fg-muted">{description}</p>
            </>
          ) : (
            <p className="text-fg-muted">
              <span className="font-semibold text-fg">{title}</span>: {description}
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}
