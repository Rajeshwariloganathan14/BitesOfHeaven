import { Award, Flame, Heart } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import useScrollReveal from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'
import aboutImg from '../assets/images/about.jpg'

const iconMap = { Award, Flame, Heart }

/**
 * About section — restaurant story + 3 feature cards.
 */
export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section-padding bg-brand-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Our Story" title="A Tradition of Flavour" className="reveal" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={aboutImg}
                alt="Elegant restaurant interior at Bites of Heaven"
                loading="lazy"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Decorative border element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-brand-gold/20 -z-10 hidden lg:block" />
          </div>

          {/* Text Content */}
          <div className="reveal-right">
            <p className="text-brand-text/85 text-base md:text-lg leading-relaxed mb-6">
              {siteConfig.longDescription}
            </p>
            <p className="text-brand-text-muted text-base leading-relaxed mb-8">
              Whether you're craving juicy momos, a crispy chicken burger, or a rich, creamy hot chocolate, every dish at Bites of Heaven is prepared with love, care, and an unwavering commitment to quality. 
              From satisfying bites to indulgent desserts, there's something delicious for every craving.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {siteConfig.aboutFeatures.map((feature) => {
                const Icon = iconMap[feature.icon]
                return (
                  <div
                    key={feature.title}
                    className="bg-brand-gray/40 border border-brand-gray-light/20 rounded-xl p-4 text-center hover:border-brand-gold/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-gold/20 transition-colors duration-300">
                      <Icon size={20} className="text-brand-gold" />
                    </div>
                    <h4 className="text-brand-cream text-sm font-semibold mb-1">{feature.title}</h4>
                    <p className="text-brand-text-muted text-xs leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
