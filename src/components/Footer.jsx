import { Instagram, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import siteConfig from '../data/siteConfig'

/**
 * Full-width footer with 4-column layout, social links, and copyright.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    youtube: Youtube,
  }

  return (
    <footer className="bg-brand-charcoal border-t border-brand-gray-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-brand-cream mb-4">
              Bites of<span className="text-brand-gold">Heaven</span>
            </h3>
            <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
              {siteConfig.shortDescription}
            </p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform]
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="w-9 h-9 rounded-full border border-brand-gray-light/40 flex items-center justify-center text-brand-text-muted hover:bg-brand-gold hover:text-brand-charcoal hover:border-brand-gold transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-brand-cream font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-text-muted text-sm hover:text-brand-gold hover:pl-1 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Opening Hours */}
          <div>
            <h4 className="text-brand-cream font-semibold mb-4 text-sm uppercase tracking-wider">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              {siteConfig.hours.map((h, i) => (
                <li key={i} className="text-sm">
                  <span className="text-brand-cream/80 block">{h.days}</span>
                  <span className="text-brand-gold">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-brand-cream font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={siteConfig.phoneHref} className="flex items-start gap-3 text-brand-text-muted text-sm hover:text-brand-gold transition-colors duration-300">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-brand-text-muted text-sm hover:text-brand-gold transition-colors duration-300">
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.address.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-brand-text-muted text-sm hover:text-brand-gold transition-colors duration-300"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  {siteConfig.address.full}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-brand-gray-light/10 py-6">
        <p className="text-center text-brand-text-muted text-xs">
          © {currentYear} {siteConfig.name}. All rights reserved. Crafted with ❤ and the finest spices.
        </p>
      </div>
    </footer>
  )
}
