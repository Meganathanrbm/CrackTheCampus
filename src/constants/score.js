import badgeSkills from '@/assets/images/badges/badge-skills.png'
import badgePractice from '@/assets/images/badges/badge-practice.png'
import badgeSoftware from '@/assets/images/badges/badge-software.png'
import badgeCtcHero from '@/assets/images/badges/badge-ctc-hero.png'

export const SCORE_CONTENT = {
  eyebrow: 'The Why',
  title: 'Beyond the Resume: The CTC Score.',
  description:
    'Give recruiters a defensible, institution-grade signal. Web Hub builds the foundation; Pro-Suite verifies performance, rolled into one credential.',
}

export const SCORE_PARTS = [
  {
    id: 'skills',
    image: badgeSkills,
    label: 'Skills',
    description: 'Capability signal mapped from your Web Hub profile, courses, and pathways.',
  },
  {
    id: 'practice',
    image: badgePractice,
    label: 'Practice',
    description: 'Consistency and reps recorded in the Web Hub: mocks, drills, and readiness.',
  },
  {
    id: 'performance',
    image: badgeSoftware,
    label: 'Software performance',
    description: 'Proctored outcomes and high-stakes results from the Pro-Suite environment.',
  },
]

export const SCORE_RESULT = {
  image: badgeCtcHero,
  label: 'CTC Score',
  range: '0.0 to 10.0',
  description:
    'Web Hub contributes skills and practice telemetry. Pro-Suite supplies proctored software performance. Together they produce one verified credential recruiters can rely on.',
}
