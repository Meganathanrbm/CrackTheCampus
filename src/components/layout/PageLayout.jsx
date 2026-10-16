import { Footer } from './Footer'
import { Header } from './Header'
import { PromoBanner } from './PromoBanner'

export function PageLayout({ children }) {
  return (
    <>
      <PromoBanner />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
