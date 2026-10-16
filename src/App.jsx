import { lazy, Suspense } from 'react'
import { PageLayout } from '@/components/layout'
import { HeroSection } from '@/sections/hero/HeroSection'

const BelowTheFold = lazy(() => import('@/sections/BelowTheFold'))

function App() {
  return (
    <PageLayout>
      <HeroSection />
      <Suspense fallback={<div className="min-h-screen" />}>
        <BelowTheFold />
      </Suspense>
    </PageLayout>
  )
}

export default App
