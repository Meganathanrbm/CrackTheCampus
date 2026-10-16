import { LuTrophy } from 'react-icons/lu'
import { Badge, Eyebrow, Heading, Text } from '@/components/ui'
import { BOUNTIES, CONTEST_CARD as card, LEADERBOARD } from '@/constants/contest'
import { LeaderboardTable } from './LeaderboardTable'

function StatusPanel() {
  return (
    <div className="flex flex-col justify-center gap-6 bg-info/20 p-6 md:p-10">
      <Badge className="self-start rounded-sm">
        <span className="mr-2 size-1.5 rounded-full bg-brand" />
        {card.status}
      </Badge>

      <p className="font-mono text-xl font-bold uppercase">
        {card.challenge.map((line) => (
          <span key={line} className="block">{line}</span>
        ))}
      </p>

      <div className="border-t border-border pt-6">
        <Eyebrow align="start" className="mb-2">{card.seriesLabel}</Eyebrow>
        <p className="font-mono text-sm">{card.series}</p>
        <Text variant="small" className="mt-1 font-mono text-xs">{card.seriesNote}</Text>
      </div>
    </div>
  )
}

function ResultsPanel() {
  return (
    <div className="space-y-8 border-t border-border p-6 md:border-t-0 md:border-l md:p-10">
      <div>
        <p className="flex items-center gap-2 text-eyebrow font-semibold text-fg-subtle uppercase">
          <LuTrophy aria-hidden="true" className="size-4 text-brand-soft" />
          {card.bountiesLabel}
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          {BOUNTIES.map((bounty) => (
            <li key={bounty} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 bg-brand" />
              {bounty}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Eyebrow align="start" className="mb-3">{card.leaderboardLabel}</Eyebrow>
        <LeaderboardTable rows={LEADERBOARD} caption={card.leaderboardLabel} />
      </div>
    </div>
  )
}

export function ContestCard() {
  return (
    <div className="overflow-hidden rounded-sm border border-info">
      <div className="border-b border-border p-6 md:p-10">
        <Eyebrow align="start" className="mb-3">{card.eyebrow}</Eyebrow>
        <Heading as="h3" size="h2">{card.title}</Heading>
        <Text className="mt-2">{card.description}</Text>
      </div>

      <div className="grid md:grid-cols-2">
        <StatusPanel />
        <ResultsPanel />
      </div>
    </div>
  )
}
