import { Leaf, ChefHat, Clock, Armchair } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import useScrollReveal from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'

const iconMap = { Leaf, ChefHat, Clock, Armchair }

/**
 * Why Choose Us section — 4 benefit cards with icons.
 */
export default function WhyChooseUs() {
  const ref = useScrollReveal()

  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden" ref={ref}>
      {/* Subtle gold accent background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading subtitle="Why Choose Us" title="The Bites of Heaven Difference" className="reveal" />

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {siteConfig.features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <div
                key={feature.title}
                className="group text-center p-6 md:p-8 rounded-2xl bg-brand-gray/30 border border-brand-gray-light/15 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(212,168,83,0.08)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-gold/20 group-hover:scale-110 transition-all duration-500">
                  <Icon size={28} className="text-brand-gold" />
                </div>
                <h3 className="font-heading text-xl text-brand-cream font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
