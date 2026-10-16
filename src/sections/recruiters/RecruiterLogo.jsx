export function RecruiterLogo({ name, color, path }) {
  return (
    <li
      style={{ '--logo-color': color }}
      className="group/logo flex h-10 shrink-0 items-center justify-center px-4 sm:h-12 sm:px-7 md:h-14 md:px-10"
    >
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={name}
        className="h-5 w-auto max-w-17 text-fg-subtle/60 transition-colors duration-300 group-hover/logo:text-(--logo-color) sm:h-7 sm:max-w-22 md:h-8"
      >
        <path fill="currentColor" d={path} />
      </svg>
    </li>
  )
}
