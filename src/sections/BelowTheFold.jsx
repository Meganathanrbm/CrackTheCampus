import { ContestSection } from './contest/ContestSection'
import { CtaSection } from './cta/CtaSection'
import { CtcScoreSection } from './ctc-score/CtcScoreSection'
import { EcosystemSection } from './ecosystem/EcosystemSection'
import { FaqSection } from './faq/FaqSection'
import { RecruitersSection } from './recruiters/RecruitersSection'
import { StatsSection } from './stats/StatsSection'
import { TestimonialsSection } from './testimonials/TestimonialsSection'

export default function BelowTheFold() {
  return (
    <>
      <RecruitersSection />
      <EcosystemSection />
      <ContestSection />
      <CtcScoreSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
