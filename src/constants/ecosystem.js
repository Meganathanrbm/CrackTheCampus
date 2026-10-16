import softwarePoster from '@/assets/images/ecosystem-software.webp'
import webPoster from '@/assets/images/ecosystem-web.webp'
import { LINKS } from './site'

const ASSETS = 'https://static.corp.crackthecampus.com/landing_page_assets'

export const ECOSYSTEM_INTRO = {
  eyebrow: 'Dual-Core Structure',
  title: 'One Ecosystem. Two Ways to Win.',
  description: 'Start with open-access learning on the web, then prove your skills in a professional hiring environment.',
}

export const ECOSYSTEM_COLUMNS = [
  {
    id: 'web',
    label: '01 · Web',
    video: `${ASSETS}/Web-version.mp4`,
    poster: webPoster,
    caption: 'Web app: courses, practice, and pathways in the browser.',
    title: 'The Web Hub',
    subtitle: '(Learning & Discovery)',
    tagline: 'Your Daily Training Ground',
    description: 'Open access to prepare anytime, anywhere.',
    features: [
      { id: 'courses', title: 'AI-Assisted Courses', description: 'Upskill with interactive, industry-mapped modules.' },
      { id: 'pathways', title: 'Corporate Pathways', description: 'Master the specific requirements for your dream jobs.' },
      { id: 'resume', title: 'AI Resume Builder', description: 'Create a professional, ATS-ready resume in minutes.' },
      { id: 'practice', title: 'Practice Assessments', description: 'Unlimited mock tests to sharpen your skills without the pressure.' },
    ],
    cta: { label: 'Explore Courses & Pathways', href: LINKS.explore, variant: 'ghost', arrow: true },
  },
  {
    id: 'software',
    label: '02 · Software',
    video: `${ASSETS}/Software.mp4`,
    poster: softwarePoster,
    caption: 'Desktop suite: assessments, CTC score, and recruiter-ready workflows.',
    title: 'The Pro-Suite',
    subtitle: '(Performance & Hiring)',
    tagline: 'The Official Hiring Environment',
    description: 'The software that secures your placement.',
    features: [
      { id: 'drives', title: 'Official Hiring Drives', description: 'Attend actual recruitment assessments for top companies.' },
      { id: 'simulated', title: 'Simulated Environments', description: 'Practice in a real, proctored coding and interview setting.' },
      { id: 'evaluation', title: 'High-Stakes Evaluation', description: 'Complete verified assessments that generate your CTC Score.' },
      { id: 'placement', title: 'Direct Placement Access', description: 'Connect directly with recruiters through official test scores.' },
    ],
    cta: { label: 'Download Software Suite', href: LINKS.download, variant: 'primary' },
  },
]
