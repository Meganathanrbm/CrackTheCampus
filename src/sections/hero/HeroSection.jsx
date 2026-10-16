import { LuArrowRight } from 'react-icons/lu'
import { Container } from '@/components/layout'
import { Button, Heading } from '@/components/ui'
import { HERO } from '@/constants/hero'
import { CTAS } from '@/constants/site'

const OVERLAY = 'pointer-events-none absolute inset-0'
const SIDE_FADE =
  'bg-[linear-gradient(to_right,rgb(11_11_14/0.98)_0%,rgb(11_11_14/0.92)_15%,rgb(11_11_14/0.8)_30%,rgb(11_11_14/0.6)_45%,rgb(11_11_14/0.3)_60%,rgb(11_11_14/0.1)_75%,transparent_92%)]'

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-6.5rem)] flex-col justify-center overflow-hidden border-b border-border sm:min-h-[max(36rem,calc(100svh-7.25rem))]"
    >
      <img
        src={HERO.image}
        alt=""
        decoding="async"
        fetchPriority="high"
        width="1200"
        height="1798"
        className="absolute inset-0 -z-10 size-full object-cover object-[52%_18%] sm:object-[58%_26%] lg:object-[56%_24%]"
      />
      <div aria-hidden="true" className={`${OVERLAY} ${SIDE_FADE} hidden lg:block`} />
      <div aria-hidden="true" className={`${OVERLAY} bg-linear-to-b from-surface/45 via-surface/60 to-surface/90 lg:hidden`} />

      <Container className="relative z-10 py-10 sm:py-20 lg:py-24">
        <div className="flex max-w-2xl flex-col gap-5 sm:gap-9 lg:max-w-184">
          <div className="space-y-5 motion-safe:animate-fade-up border-l-2 border-brand/50 pl-4 sm:space-y-6 sm:pl-6 md:pl-7">
            <Heading as="h1" size="display" className="drop-shadow-[0_2px_28px_rgb(0_0_0/0.5)]">
              <span id="hero-heading">{HERO.heading}</span>
            </Heading>
            <div className="space-y-3 text-[#d4d4d8] [text-shadow:0_1px_18px_rgb(0_0_0/0.35)] sm:space-y-4">
              {HERO.lines.map((parts, i) => (
                <p key={i} className="max-w-lg text-lead">
                  {parts.map((part, j) =>
                    typeof part === 'string' ? (
                      part
                    ) : (
                      <span key={j} className="font-medium text-[#ececf1]">{part.em}</span>
                    ),
                  )}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 motion-safe:animate-fade-up motion-safe:[animation-delay:150ms] sm:flex-row sm:gap-4">
            <Button size="lg" href={CTAS.primary.href} className="w-full sm:w-auto">
              {CTAS.primary.label}
              <LuArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="ghost" href={CTAS.secondary.href} className="w-full sm:w-auto">
              {CTAS.secondary.label}
              <LuArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
