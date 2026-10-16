import { Section, SectionHeader } from '@/components/layout'
import { Eyebrow, FeatureList, Heading, Reveal, Text } from '@/components/ui'
import { CONTEST_INTRO as intro, REWARD_TIERS } from '@/constants/contest'
import { ContestCard } from './ContestCard'

export function ContestSection() {
  return (
    <Section id="contest">
      <SectionHeader eyebrow={intro.eyebrow} rule title={intro.title} description={intro.description} />

      <Reveal className="mx-auto max-w-3xl">
        <Heading as="h3" size="h3" className="text-center">{intro.subtitle}</Heading>
        <Text className="mx-auto mt-4 max-w-2xl text-center">{intro.body}</Text>

        <div className="mt-10 border-b border-border pb-4">
          <Eyebrow>{intro.rewardsLabel}</Eyebrow>
        </div>
        <FeatureList items={REWARD_TIERS} className="mt-6" />
      </Reveal>

      <Reveal className="mx-auto mt-16 max-w-5xl">
        <ContestCard />
      </Reveal>
    </Section>
  )
}
