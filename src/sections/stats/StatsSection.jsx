import { Section, SectionHeader } from '@/components/layout'
import { Reveal, Text } from '@/components/ui'
import { STATS, STATS_CONTENT } from '@/constants/stats'

export function StatsSection() {
  return (
    <Section id="stats" className="border-t bg-linear-to-b from-surface to-surface-raised">
      <SectionHeader title={STATS_CONTENT.title} description={STATS_CONTENT.description} />

      <ul className="mx-auto grid max-w-5xl gap-10 text-center sm:grid-cols-3 sm:gap-8 lg:gap-12">
        {STATS.map(({ id, value, label }, i) => (
          <li key={id}>
            <Reveal delay={i * 0.1}>
              <p className="font-mono text-xl font-bold tracking-tight sm:text-2xl">{value}</p>
              <Text variant="small" className="mt-2 text-fg-subtle">{label}</Text>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={0.3}>
        <Text variant="small" className="mt-12 text-center text-xs text-fg-subtle">{STATS_CONTENT.footnote}</Text>
      </Reveal>
    </Section>
  )
}
