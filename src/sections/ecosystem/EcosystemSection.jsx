import { Section, SectionHeader } from '@/components/layout'
import { Reveal } from '@/components/ui'
import { ECOSYSTEM_COLUMNS, ECOSYSTEM_INTRO as intro } from '@/constants/ecosystem'
import { EcosystemColumn } from './EcosystemColumn'

export function EcosystemSection() {
  return (
    <Section id="ecosystem">
      <SectionHeader
        eyebrow={intro.eyebrow}
        rule
        title={intro.title}
        description={intro.description}
        className="mb-20"
      />

      <Reveal className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-0 md:divide-x md:divide-border">
        {ECOSYSTEM_COLUMNS.map(({ id, ...column }) => (
          <div key={id} className="flex flex-col md:px-12 md:first:pl-0 md:last:pr-0">
            <EcosystemColumn {...column} />
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
