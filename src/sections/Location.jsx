import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import useScrollReveal from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'

/**
 * Location section — address, opening hours, map placeholder, and directions CTA.
 */
export default function Location() {
  const ref = useScrollReveal()

  return (
    <section className="section-padding bg-brand-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Find Us" title="Visit Bites of Heaven" className="reveal" />

        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="reveal-left rounded-2xl overflow-hidden h-[350px] md:h-[450px] border border-brand-gray-light/20 shadow-xl shadow-black/30">
            <iframe
              src={siteConfig.address.googleMapsEmbed}
              title="Spice Haven Location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2) saturate(0.3)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="reveal-right flex flex-col justify-center">
            {/* Address */}
            <div className="flex items-start gap-4 mb-8 group">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors duration-300">
                <MapPin size={22} className="text-brand-gold" />
              </div>
              <div>
                <h3 className="text-brand-cream font-semibold mb-1">Our Address</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  {siteConfig.address.full}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-8 group">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors duration-300">
                <Phone size={22} className="text-brand-gold" />
              </div>
              <div>
                <h3 className="text-brand-cream font-semibold mb-1">Phone</h3>
                <a href={siteConfig.phoneHref} className="text-brand-text-muted text-sm hover:text-brand-gold transition-colors duration-300">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 mb-8 group">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors duration-300">
                <Clock size={22} className="text-brand-gold" />
              </div>
              <div>
                <h3 className="text-brand-cream font-semibold mb-1">Opening Hours</h3>
                <div className="space-y-1">
                  {siteConfig.hours.map((h, i) => (
                    <p key={i} className="text-brand-text-muted text-sm">
                      <span className="text-brand-cream/70">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={siteConfig.address.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-[0_4px_20px_rgba(212,168,83,0.3)] hover:-translate-y-0.5 w-fit"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
