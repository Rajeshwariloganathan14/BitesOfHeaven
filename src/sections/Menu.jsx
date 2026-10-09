import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import MenuCard from '../components/MenuCard'
import useScrollReveal from '../hooks/useScrollReveal'
import { categories, menuItems } from '../data/menuData'

/**
 * Full menu section with category filter pills and responsive grid.
 */
export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useScrollReveal()

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="section-padding bg-brand-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Our Menu" title="Explore Our Flavours" className="reveal" />

        {/* Category Filter Pills */}
        <div className="reveal flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-gold text-brand-charcoal shadow-[0_2px_12px_rgba(212,168,83,0.3)]'
                  : 'bg-brand-gray/50 text-brand-text-muted border border-brand-gray-light/30 hover:border-brand-gold/40 hover:text-brand-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="animate-fade-in" style={{ animationDuration: '0.4s' }}>
              <MenuCard item={item} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-brand-text-muted py-12">
            No items found in this category.
          </p>
        )}
      </div>
    </section>
  )
}
