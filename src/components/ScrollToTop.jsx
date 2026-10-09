import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * Floating back-to-top button that appears after scrolling 400px.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-9 h-9 md:w-11 md:h-11 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-brand-gold-light hover:scale-110 active:scale-95 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  )
}
