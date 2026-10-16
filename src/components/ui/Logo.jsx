import logoSrc from '@/assets/images/logo.webp'
import { SITE } from '@/constants/site'
import { cn } from '@/lib/cn'

export function Logo({ className }) {
  return <img src={logoSrc} alt={SITE.name} width="640" height="153" className={cn('h-9 w-auto', className)} />
}
