import { LuQuote } from 'react-icons/lu'
import { Section, SectionHeader } from '@/components/layout'
import { Reveal } from '@/components/ui'
import { TESTIMONIALS, TESTIMONIALS_CONTENT } from '@/constants/testimonials'

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionHeader
        eyebrow={TESTIMONIALS_CONTENT.eyebrow}
        title={TESTIMONIALS_CONTENT.title}
        description={TESTIMONIALS_CONTENT.description}
      />

      <ul className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map(({ id, quote, name, detail }, i) => (
          <li key={id} className="flex">
            <Reveal delay={i * 0.1} className="flex w-full">
              <figure className="flex w-full flex-col rounded-lg border border-border bg-surface-raised p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50">
                <LuQuote aria-hidden="true" className="size-6 text-brand-soft" />
                <blockquote className="mt-4 text-fg-muted">{quote}</blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-6">
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full bg-brand/20 font-semibold text-brand-soft"
                  >
                    {name[0]}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{name}</span>
                    <span className="block text-xs text-fg-subtle">{detail}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
