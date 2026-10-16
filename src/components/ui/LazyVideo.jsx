import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches


export function LazyVideo({ src, poster, label, className }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    const node = ref.current
    if (!node || reduced) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <video
      ref={ref}
      src={active || reduced ? src : undefined}
      poster={poster}
      aria-label={label}
      autoPlay={!reduced}
      controls={reduced}
      muted
      loop
      playsInline
      preload={reduced ? 'none' : 'metadata'}
      className={className}
    />
  )
}
