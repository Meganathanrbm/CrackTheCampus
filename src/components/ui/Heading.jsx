import { cn } from '@/lib/cn'

const SIZES = {
  display: 'text-display font-semibold text-balance',
  h2: 'text-h2 font-semibold tracking-tight text-balance',
  h3: 'text-xl font-semibold',
}

export function Heading({ as: Tag = 'h2', size = 'h2', className, children }) {
  return <Tag className={cn(SIZES[size], className)}>{children}</Tag>
}
