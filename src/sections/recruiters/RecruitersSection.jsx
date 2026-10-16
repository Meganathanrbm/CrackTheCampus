import { Container } from '@/components/layout'
import { Eyebrow } from '@/components/ui'
import { RECRUITER_ROWS, RECRUITERS_CONTENT } from '@/constants/recruiters'
import { cn } from '@/lib/cn'
import { RecruiterLogo } from './RecruiterLogo'

const GROUPS = 4

const FADE = 'pointer-events-none absolute inset-y-0 z-10 w-10 from-surface to-transparent sm:w-16 md:w-24'

function MarqueeRow({ logos, reverse }) {
  return (
    <div
      className={cn(
        'flex w-max animate-marquee will-change-transform group-hover/marquee:[animation-play-state:paused]',
        'motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center',
        reverse && '[animation-direction:reverse]',
      )}
    >
      {Array.from({ length: GROUPS }, (_, group) => (
        <ul
          key={group}
          aria-hidden={group > 0 || undefined}
          className={cn('flex shrink-0 items-center', group > 0 && 'motion-reduce:hidden')}
        >
          {logos.map(({ id, ...logo }) => (
            <RecruiterLogo key={id} {...logo} />
          ))}
        </ul>
      ))}
    </div>
  )
}

export function RecruitersSection() {
  return (
    <section aria-label={RECRUITERS_CONTENT.heading} className="border-b border-border bg-surface pt-8 sm:pt-12">
      <Container>
        <Eyebrow>{RECRUITERS_CONTENT.heading}</Eyebrow>
      </Container>

      <div className="group/marquee relative mt-4 flex flex-col gap-2 overflow-hidden pb-8 sm:gap-4 sm:pb-12">
        <div aria-hidden="true" className={cn(FADE, 'left-0 bg-linear-to-r')} />
        <div aria-hidden="true" className={cn(FADE, 'right-0 bg-linear-to-l')} />

        {RECRUITER_ROWS.map(({ id, logos, reverse }) => (
          <MarqueeRow key={id} logos={logos} reverse={reverse} />
        ))}
      </div>
    </section>
  )
}
