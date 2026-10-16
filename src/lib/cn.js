import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['display', 'h2', 'lead', 'eyebrow'] }],
      'max-w': [{ 'max-w': ['page'] }],
    },
  },
})

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
