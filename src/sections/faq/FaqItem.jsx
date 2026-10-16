import { cn } from '@/lib/cn'

export function FaqItem({ id, question, answer, open, onToggle }) {
  return (
    <div className="rounded-lg border border-border bg-surface-raised">
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-fg sm:px-5 sm:py-5 sm:text-base"
        >
          {question}
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={cn('size-4 shrink-0 text-fg-muted transition-transform duration-300', open && 'rotate-180')}
          >
            <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-sm leading-relaxed text-fg-muted sm:px-5 sm:pb-5 sm:text-[0.9375rem]">{answer}</p>
        </div>
      </div>
    </div>
  )
}
