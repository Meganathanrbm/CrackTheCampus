import { Eyebrow, Heading, Reveal, Text } from '@/components/ui'
import { cn } from '@/lib/cn'

export function SectionHeader({ eyebrow, rule, title, description, className }) {
  return (
    <Reveal className={cn('mx-auto mb-12 max-w-2xl text-center', className)}>
      {eyebrow && (
        <Eyebrow rule={rule} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <Heading>{title}</Heading>
      {description && (
        <Text className="mt-5 text-sm leading-relaxed text-pretty sm:text-base">
          {description}
        </Text>
      )}
    </Reveal>
  )
}
