import { LuArrowRight } from 'react-icons/lu'
import { Button, FeatureList, Heading, LazyVideo, Text } from '@/components/ui'

export function EcosystemColumn({ label, video, poster, caption, title, subtitle, tagline, description, features, cta }) {
  return (
    <article className="flex flex-1 flex-col">
      <p className="mb-4 text-eyebrow font-semibold text-fg-subtle uppercase">{label}</p>

      <LazyVideo
        src={video}
        poster={poster}
        label={caption}
        className="aspect-video w-full rounded-2xl border border-border bg-surface-raised object-cover"
      />
      <p className="mt-4 text-[11px] tracking-widest md:min-h-[2lh] text-fg-subtle uppercase">{caption}</p>

      <Heading as="h3" size="h3" className="mt-16">
        {title} <span className="font-normal text-fg-muted">{subtitle}</span>
      </Heading>
      <p className="mt-4">{tagline}</p>
      <Text variant="small" className="mt-2">{description}</Text>

      <FeatureList
        items={features}
        variant="inline"
        ruleClassName="border-white/15"
        className="mt-8 mb-8 space-y-3 border-t border-border pt-8 text-sm"
      />

      <div className="mt-auto border-t border-border pt-8">
        <Button href={cta.href} variant={cta.variant}>
          {cta.label}
          {cta.arrow && <LuArrowRight aria-hidden="true" className="size-4" />}
        </Button>
      </div>
    </article>
  )
}
