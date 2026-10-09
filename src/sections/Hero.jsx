import { ChevronDown } from 'lucide-react'
import heroBg from '../assets/images/hero-bg.jpg'

/**
 * Full-viewport hero section with background image, overlay, restaurant name,
 * tagline, description, and two CTA buttons.
 */
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Bites of Heaven dining experience with aromatic Indian dishes"
          className="w-full h-full object-cover animate-ken-burns"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="animate-fade-in-up">
          <span className="inline-block text-brand-gold font-medium text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            — Welcome to —
          </span>
        </div>

        {/* Restaurant Name */}
        <h1 className="animate-fade-in-up delay-100 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[1.1]">
          Bites of<span className="text-gradient-gold">Heaven</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up delay-200 font-heading text-xl sm:text-2xl md:text-3xl text-brand-cream/90 italic mb-6">
          Authentic Flavours, Made With Passion
        </p>

        {/* Description */}
        <p className="animate-fade-in-up delay-300 text-brand-text/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Discover a world of rich, aromatic Indian cuisine crafted by our expert chefs 
          using time-honoured recipes and the finest locally-sourced ingredients.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            onClick={(e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-bold py-3.5 px-10 rounded-full text-base transition-all duration-300 hover:shadow-[0_4px_20px_rgba(212,168,83,0.4)] hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto"
          >
            View Our Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="text-brand-gold/60 hover:text-brand-gold transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  )
}
