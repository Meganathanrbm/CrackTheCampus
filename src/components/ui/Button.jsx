import { cn } from '@/lib/cn'

const VARIANTS = {
  primary: 'bg-brand text-white shadow-glow hover:brightness-110',
  ghost:
    'border border-white/25 bg-white/8 text-white backdrop-blur-xl hover:border-white/40 hover:bg-white/14',
}

const SIZES = {
  sm: 'min-h-9 px-5 text-[13px]',
  md: 'min-h-11 px-6 text-sm',
  lg: 'min-h-12 px-8 text-sm',
}


export function Button({ variant = 'primary', size = 'md', href, className, children, ...props }) {
  const classes = cn(
    'group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap',
    'transition duration-200 active:translate-y-px',
    'disabled:pointer-events-none disabled:opacity-50',
    VARIANTS[variant],
    SIZES[size],
    className,
  )

  return href ? (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  ) : (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
