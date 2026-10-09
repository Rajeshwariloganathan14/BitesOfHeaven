import { Phone, Mail, MessageCircle, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import useScrollReveal from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'

const socialConfig = [
  { key: 'instagram', icon: Instagram, label: 'Instagram' },
  { key: 'facebook', icon: Facebook, label: 'Facebook' },
  { key: 'twitter', icon: Twitter, label: 'Twitter' },
  { key: 'youtube', icon: Youtube, label: 'YouTube' },
]

/**
 * Contact section — phone, email, WhatsApp, and social icons.
 */
export default function Contact() {
  const ref = useScrollReveal()
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <section id="contact" className="section-padding bg-brand-charcoal" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading subtitle="Get In Touch" title="Contact Us" className="reveal" />

        {/* Contact methods */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <a
            href={siteConfig.phoneHref}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-brand-gray/30 border border-brand-gray-light/15 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors duration-300">
              <Phone size={24} className="text-brand-gold" />
            </div>
            <div>
              <p className="text-brand-cream font-semibold text-sm mb-0.5">Call Us</p>
              <p className="text-brand-text-muted text-sm">{siteConfig.phone}</p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-brand-gray/30 border border-brand-gray-light/15 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors duration-300">
              <Mail size={24} className="text-brand-gold" />
            </div>
            <div>
              <p className="text-brand-cream font-semibold text-sm mb-0.5">Email Us</p>
              <p className="text-brand-text-muted text-sm">{siteConfig.email}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-brand-gray/30 border border-brand-gray-light/15 hover:border-[#25D366]/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors duration-300">
              <MessageCircle size={24} className="text-[#25D366]" />
            </div>
            <div>
              <p className="text-brand-cream font-semibold text-sm mb-0.5">WhatsApp</p>
              <p className="text-brand-text-muted text-sm">Chat with us</p>
            </div>
          </a>
        </div>

        {/* Social Media */}
        <div className="reveal">
          <p className="text-brand-text-muted text-sm mb-4 uppercase tracking-wider">Follow us on social media</p>
          <div className="flex justify-center gap-4">
            {socialConfig.map(({ key, icon: Icon, label }) => (
              <a
                key={key}
                href={siteConfig.social[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full border border-brand-gray-light/30 flex items-center justify-center text-brand-text-muted hover:bg-brand-gold hover:text-brand-charcoal hover:border-brand-gold transition-all duration-300 hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
