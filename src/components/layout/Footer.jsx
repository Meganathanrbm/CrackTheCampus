import { LuMapPin } from 'react-icons/lu'
import { Logo, MapEmbed } from '@/components/ui'
import { FOOTER_PRODUCT_LINKS, SOCIALS } from '@/constants/footer'
import { SITE } from '@/constants/site'
import { Container } from './Container'

const labelClass = 'text-[10px] font-semibold uppercase tracking-[0.2em] text-fg-subtle'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface pt-11">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-6">
          <div className="sm:col-span-2 lg:col-span-3">
            <Logo />
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-fg-muted">{SITE.tagline}</p>
          </div>

          <nav aria-label="Product" className="lg:col-span-2">
            <p className={labelClass}>Product</p>
            <ul className="mt-3 space-y-2">
              {FOOTER_PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-[13px] font-medium text-fg-muted transition-colors hover:text-fg">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-5 sm:col-span-2 lg:col-span-7 lg:grid-cols-[minmax(0,1fr)_minmax(200px,1.15fr)] lg:items-start lg:gap-6 lg:border-l lg:border-border/80 lg:pl-8">
            <div className="min-w-0">
              <p className={labelClass}>Contact</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2.5 inline-flex text-[13px] font-semibold text-brand-soft transition-colors hover:text-brand-hover"
              >
                {SITE.email}
              </a>
              <p className="mt-3 text-xs leading-relaxed text-fg-subtle">{SITE.contactNote}</p>
              <address className="mt-4 flex gap-2.5 text-xs leading-snug text-fg-muted not-italic">
                <LuMapPin aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-fg-subtle" />
                <span>
                  {SITE.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </span>
              </address>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 inline-flex text-[11px] font-medium text-fg-subtle underline-offset-2 transition-colors hover:text-brand-soft hover:underline"
              >
                Larger map →
              </a>
            </div>

            <MapEmbed
              query={SITE.mapQuery}
              title={`${SITE.name} office location`}
              className="h-[156px] min-w-0 sm:h-[172px] lg:h-[140px]"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border py-6 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-[11px] text-fg-subtle">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <ul className="flex items-center gap-2">
            {SOCIALS.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex size-8 items-center justify-center rounded-md text-fg-subtle transition-colors hover:bg-surface-raised hover:text-brand-soft"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
