import { useState, useEffect } from 'react'
import { Menu, X, Phone, ShoppingCart } from 'lucide-react'
import siteConfig from '../data/siteConfig'
import { useCart } from '../contexts/CartContext'

/**
 * Responsive navbar — transparent on top, solid on scroll.
 * Mobile hamburger menu with animated overlay.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const { cartCount, setIsCartOpen } = useCart()

  // Track scroll for background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="flex items-center gap-2 group"
        >
          <img src="/logo.png" alt="BitesOfHeaven Logo" className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-2xl md:text-3xl font-heading font-bold text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
            Bites of<span className="text-brand-gold">Heaven</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className={`text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-brand-gold after:transition-all after:duration-300 ${
                activeSection === link.href
                  ? 'text-brand-gold after:w-full'
                  : 'text-brand-text/80 hover:text-brand-cream after:w-0 hover:after:w-full'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-brand-text/80 hover:text-brand-gold transition-colors duration-300 text-sm"
          >
            <Phone size={16} />
            <span className="hidden xl:inline">{siteConfig.phone}</span>
          </a>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center p-2 text-brand-cream hover:text-brand-gold transition-colors"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-gold text-brand-charcoal text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Hamburger & Cart */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center p-1 text-brand-cream hover:text-brand-gold transition-colors"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-charcoal text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-cream hover:text-brand-gold transition-colors p-1"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu Overlay ──────────────────────── */}
      <div
        className={`fixed inset-0 top-0 bg-brand-dark/98 backdrop-blur-lg z-[89] lg:hidden flex flex-col items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {siteConfig.navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className={`text-2xl font-heading font-medium transition-all duration-500 ${
                activeSection === link.href ? 'text-brand-gold' : 'text-brand-cream/80 hover:text-brand-gold'
              }`}
              style={{
                transitionDelay: isOpen ? `${i * 60}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}

          <div
            className="mt-4 flex flex-col items-center gap-3"
            style={{
              transitionDelay: isOpen ? `${siteConfig.navLinks.length * 60}ms` : '0ms',
              transition: 'all 0.5s',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
            }}
          >
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 text-brand-gold text-lg"
            >
              <Phone size={20} />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
