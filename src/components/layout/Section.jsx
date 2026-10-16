import { cn } from '@/lib/cn'
import { Container } from './Container'

export function Section({ id, className, children }) {
  return (
    <section id={id} className={cn('border-b border-border bg-surface py-section', className)}>
      <Container>{children}</Container>
    </section>
  )
}
