import { useState } from 'react'
import { Container } from '@/components/layout'
import { Reveal } from '@/components/ui'
import { FAQ_CONTENT, FAQS } from '@/constants/faq'
import { FaqItem } from './FaqItem'

export function FaqSection() {
  const [openId, setOpenId] = useState(FAQS[0].id)
  const toggle = (id) => setOpenId((current) => (current === id ? null : id))

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-border bg-surface py-14 sm:py-16">
      <Container className="max-w-3xl">
        <Reveal>
          <header className="mb-8 text-center sm:mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-soft">{FAQ_CONTENT.eyebrow}</p>
            <h2 id="faq-heading" className="mt-2 text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              {FAQ_CONTENT.title}
            </h2>
            <p className="mx-auto mt-3 max-w-prose text-sm leading-relaxed text-fg-muted sm:text-base">
              {FAQ_CONTENT.description}
            </p>
          </header>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.id} {...faq} open={openId === faq.id} onToggle={() => toggle(faq.id)} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
