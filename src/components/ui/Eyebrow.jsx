import { cn } from '@/lib/cn'

const ALIGNS = {
  center: 'items-center text-center',
  start: 'items-start text-left',
}

export function Eyebrow({ align = 'center', rule = false, className, children }) {
  return (
    <div className={cn('flex flex-col gap-3', ALIGNS[align], className)}>
      <p className="text-eyebrow font-semibold text-fg-subtle uppercase">{children}</p>
      {rule && <span className="h-px w-10 bg-white/20" />}
    </div>
  )
}
