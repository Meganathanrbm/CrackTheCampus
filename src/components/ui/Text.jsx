import { cn } from '@/lib/cn'

const VARIANTS = {
  body: 'text-fg-muted',
  lead: 'text-lead text-fg-muted',
  small: 'text-sm text-fg-muted',
}

export function Text({ variant = 'body', as: Tag = 'p', className, children }) {
  return <Tag className={cn(VARIANTS[variant], className)}>{children}</Tag>
}
