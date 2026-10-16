import { useState } from 'react'
import { LuLoaderPinwheel, LuX } from 'react-icons/lu'
import { PROMO } from '@/constants/promo'

const BLANK_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAAAAACw='

export function PromoBanner() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  const [lead, accent] = PROMO.headline

  const dismiss = () => setDismissed(true)

  return (
    <div className="relative border-b border-black/50 bg-surface-overlay">
      <a href={PROMO.cta.href} className="block transition-[filter] duration-200 hover:brightness-110">
        <picture>
          <source media="(min-width: 48rem)" srcSet={PROMO.image} />
          <img
            src={BLANK_PIXEL}
            alt={PROMO.imageAlt}
            width="1920"
            height="64"
            className="mx-auto hidden h-auto w-full max-w-480 md:block"
          />
        </picture>

        <span className="flex items-center justify-between gap-3 py-2 pr-12 pl-gutter md:hidden">
          <span className="flex items-center gap-2">
            <LuLoaderPinwheel aria-hidden="true" className="size-6 shrink-0 text-gold motion-safe:animate-[spin_10s_linear_infinite]" />
            <span className="text-sm font-extrabold tracking-tight uppercase">
              {lead} <span className="text-gold">{accent}</span>
            </span>
          </span>
          <span className="shrink-0 rounded-md bg-brand px-4 py-1.5 text-xs font-extrabold uppercase">{PROMO.cta.label}</span>
        </span>
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
