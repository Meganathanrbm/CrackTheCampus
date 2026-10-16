import { useState } from 'react'
import { LuX } from 'react-icons/lu'
import { PROMO } from '@/constants/promo'

export function PromoBanner() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  const dismiss = () => setDismissed(true)

  return (
    <div className="relative border-b border-black/50 bg-surface-overlay">
      <a href={PROMO.cta.href} className="block transition-[filter] duration-200 hover:brightness-110">
        <picture>
          <source media="(min-width: 48rem)" srcSet={PROMO.image} width="1920" height="64" />
          <img
            src={PROMO.imageMobile}
            alt={PROMO.imageAlt}
            width="1560"
            height="208"
            className="mx-auto block h-auto w-full max-w-480"
          />
        </picture>
      </a>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss prize banner"
        className="absolute top-1/2 right-2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-surface-overlay/70 text-fg-muted transition-colors hover:bg-white/15 hover:text-fg sm:right-4"
      >
        <LuX aria-hidden="true" className="size-4" />
      </button>
    </div>
  )
}
