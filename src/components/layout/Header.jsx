import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { LuMenu, LuX } from 'react-icons/lu'
import { Button, Logo } from '@/components/ui'
import { ACCOUNT_NAV, MAIN_NAV } from '@/constants/navigation'
import { cn } from '@/lib/cn'
import { Container } from './Container'

const navLink = 'text-sm font-medium text-fg-muted transition-colors hover:text-fg'
const highlightLink = 'font-semibold text-accent [text-shadow:0_0_14px_rgb(245_230_184/0.45)] hover:text-[#fde68a]'
const pillLink = 'rounded-full px-3 py-1.5 text-[13px] font-medium text-fg-muted transition-colors hover:bg-surface-raised hover:text-fg'

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-xl">
      <div aria-hidden="true" className="h-px bg-linear-to-r from-transparent via-brand/35 to-transparent" />

      <Container className="flex min-h-14 items-center justify-between gap-4 py-2 lg:min-h-16">
        <a href="#top" aria-label="Crack The Campus home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {MAIN_NAV.map(({ label, href, highlight }) => (
            <a key={label} href={href} className={cn(navLink, highlight && highlightLink)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          {ACCOUNT_NAV.map(({ label, href, variant }) =>
            variant === 'primary' ? (
              <Button key={label} href={href} size="sm" className="ml-1">
                {label}
              </Button>
            ) : (
              <a key={label} href={href} className={pillLink}>
                {label}
              </a>
            ),
          )}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface-raised/80 lg:hidden"
        >
          {open ? <LuX aria-hidden="true" className="size-5" /> : <LuMenu aria-hidden="true" className="size-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="max-h-[70vh] overflow-y-auto border-t border-border bg-surface lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Container className="flex flex-col gap-1 py-4">
              {MAIN_NAV.map(({ label, href, highlight }) => (
                <a
                  key={label}
                  href={href}
                  onClick={close}
                  className={cn(navLink, 'px-4 py-3 text-[15px]', highlight && highlightLink)}
                >
                  {label}
                </a>
              ))}
              {ACCOUNT_NAV.map(({ label, href, variant }) =>
                variant === 'primary' ? (
                  <Button key={label} href={href} onClick={close} className="mt-3">
                    {label}
                  </Button>
                ) : (
                  <a key={label} href={href} onClick={close} className={cn(navLink, 'px-4 py-3 text-[15px]')}>
                    {label}
                  </a>
                ),
              )}
            </Container>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
