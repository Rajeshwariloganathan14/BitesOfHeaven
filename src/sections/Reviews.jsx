import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'
import useScrollReveal from '../hooks/useScrollReveal'
import reviews from '../data/reviewsData'

/**
 * Customer reviews / testimonials section.
 */
export default function Reviews() {
  const ref = useScrollReveal()

  return (
    <section id="reviews" className="section-padding bg-brand-charcoal" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Testimonials" title="What Our Guests Say" className="reveal" />

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
