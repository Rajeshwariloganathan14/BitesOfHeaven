import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Cart from './components/Cart'

import Hero from './sections/Hero'
import About from './sections/About'
import MenuSection from './sections/Menu'
import WhyChooseUs from './sections/WhyChooseUs'
import Reviews from './sections/Reviews'
import Location from './sections/Location'
import Contact from './sections/Contact'

/**
 * Main application — assembles all sections in order.
 * Single-page layout with smooth scrolling between sections.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <Cart />

      <main>
        <Hero />
        <About />
        <MenuSection />
        <WhyChooseUs />
        <Reviews />
        <Location />
        <Contact />
      </main>

      <Footer />

      {/* Floating UI */}
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}
