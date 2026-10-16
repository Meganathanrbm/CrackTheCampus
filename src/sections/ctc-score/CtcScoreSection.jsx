import { Fragment } from 'react'
import { Section, SectionHeader } from '@/components/layout'
import { Reveal, Text } from '@/components/ui'
import { SCORE_CONTENT, SCORE_PARTS, SCORE_RESULT } from '@/constants/score'
import { cn } from '@/lib/cn'
import { ScoreBadge } from './ScoreBadge'

function Connector({ symbol, className }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-fg-muted',
        className,
      )}
    >
      {symbol}
    </span>
  )
}

export function CtcScoreSection() {
  return (
    <Section id="ctc-score">
      <SectionHeader
        eyebrow={SCORE_CONTENT.eyebrow}
        title={SCORE_CONTENT.title}
        description={SCORE_CONTENT.description}
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:items-start md:gap-0">
        {SCORE_PARTS.map(({ id, image, label, description }, i) => (
          <Fragment key={id}>
            {i > 0 && <Connector symbol="+" className="mt-8 hidden md:flex" />}
            <Reveal delay={i * 0.1} className="flex flex-1 flex-col items-center px-4 text-center">
              <ScoreBadge image={image} label={label} />
              <p className="mt-4 font-semibold">{label}</p>
              <Text variant="small" className="mt-2 max-w-56">{description}</Text>
            </Reveal>
          </Fragment>
        ))}
      </div>

      <div className="mx-auto my-10 flex max-w-3xl items-center gap-4" aria-hidden="true">
        <span className="h-px flex-1 bg-border" />
        <Connector symbol="=" />
        <span className="h-px flex-1 bg-border" />
      </div>

      <Reveal className="flex flex-col items-center text-center">
        <ScoreBadge image={SCORE_RESULT.image} label={SCORE_RESULT.label} size="lg" />
        <p className="mt-5 text-lg font-semibold">{SCORE_RESULT.label}</p>
        <p className="mt-1 font-mono font-semibold">{SCORE_RESULT.range}</p>
        <Text variant="small" className="mt-4 max-w-md">{SCORE_RESULT.description}</Text>
      </Reveal>
    </Section>
  )
}
