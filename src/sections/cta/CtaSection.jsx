import { LuArrowRight } from 'react-icons/lu'
import { Container } from '@/components/layout'
import { Button, Heading, Reveal, Text } from '@/components/ui'
import { CTA_CONTENT } from '@/constants/cta'
import { CTAS } from '@/constants/site'

export function CtaSection() {
  return (
    <section id="signup" aria-label={CTA_CONTENT.title} className="relative isolate overflow-hidden border-b border-border py-section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_90%_at_50%_100%,rgb(124_58_237/0.28),transparent)]"
      />
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Heading>{CTA_CONTENT.title}</Heading>
          <Text variant="lead" className="mt-4">{CTA_CONTENT.description}</Text>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" href={CTAS.primary.href} className="w-full sm:w-auto">
              {CTAS.primary.label}
              <LuArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="ghost" href={CTAS.secondary.href} className="w-full sm:w-auto">
              {CTAS.secondary.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
