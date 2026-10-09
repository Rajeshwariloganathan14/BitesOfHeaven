import { Plus, Minus, ShoppingCart } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

/**
 * Menu item card — shows food image, name, description, and price.
 */
export default function MenuCard({ item }) {
  const { cartItems, addToCart, updateQuantity } = useCart()
  const cartItem = cartItems.find((i) => i.id === item.id)
  const quantity = cartItem?.quantity || 0

  return (
    <div className="group bg-brand-gray/50 rounded-2xl overflow-hidden border border-brand-gray-light/30 hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,168,83,0.12)] flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] shrink-0">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {item.isPopular && (
          <span className="absolute top-3 right-3 bg-brand-gold text-brand-charcoal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="font-heading text-lg text-brand-cream font-semibold group-hover:text-brand-gold transition-colors duration-300">
            {item.name}
          </h3>
          <span className="text-brand-gold font-bold text-lg whitespace-nowrap">
            ₹{item.price}
          </span>
        </div>

        <div className="mt-auto pt-4 border-t border-brand-gray-light/20 flex items-center justify-between">
          {quantity > 0 ? (
            <div className="flex items-center gap-3 bg-brand-dark rounded-full px-2 py-1 border border-brand-gray-light/30">
              <button 
                onClick={() => updateQuantity(item.id, -1)}
                className="text-brand-cream hover:text-brand-gold transition-colors p-1"
              >
                <Minus size={16} />
              </button>
              <span className="text-brand-cream font-medium w-6 text-center">{quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, 1)}
                className="text-brand-cream hover:text-brand-gold transition-colors p-1"
              >
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => addToCart(item)}
              className="flex items-center gap-2 bg-brand-gray/50 hover:bg-brand-gold hover:text-brand-charcoal text-brand-cream text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 border border-brand-gray-light/30 hover:border-transparent group/btn ml-auto"
            >
              <ShoppingCart size={16} className="text-brand-gold group-hover/btn:text-brand-charcoal transition-colors" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
