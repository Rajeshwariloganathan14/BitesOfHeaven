/**
 * Reusable section heading component.
 * Renders a subtitle, main title, and decorative gold line.
 */
export default function SectionHeading({ subtitle, title, light = false, className = '' }) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      {subtitle && (
        <span className="inline-block text-brand-gold font-medium text-sm md:text-base uppercase tracking-[0.2em] mb-3">
          — {subtitle} —
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-brand-cream'
        }`}
      >
        {title}
      </h2>
      <div className="mt-4 mx-auto w-20 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
    </div>
  )
}
