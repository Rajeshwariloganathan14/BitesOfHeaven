import { Star } from 'lucide-react'

/**
 * Customer testimonial card with star rating, quote, and name.
 */
export default function TestimonialCard({ review }) {
  return (
    <div className="bg-brand-gray/40 border border-brand-gray-light/20 rounded-2xl p-6 md:p-8 hover:border-brand-gold/30 transition-all duration-500 relative">
      {/* Quotation mark decoration */}
      <div className="absolute top-4 right-6 text-brand-gold/10 text-7xl font-heading leading-none select-none pointer-events-none">
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < review.rating ? 'fill-brand-gold text-brand-gold' : 'text-brand-gray-light'}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-brand-text/90 text-sm md:text-base leading-relaxed mb-6 relative z-10">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-brand-cream font-medium text-sm">{review.name}</p>
          <p className="text-brand-text-muted text-xs">{review.date}</p>
        </div>
      </div>
    </div>
  )
}
