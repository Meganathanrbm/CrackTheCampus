import { cn } from '@/lib/cn'

export function Container({ className, children }) {
  return <div className={cn('mx-auto w-full max-w-page px-gutter', className)}>{children}</div>
}
