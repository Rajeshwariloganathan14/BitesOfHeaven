import { useState } from 'react'
import { X, Plus, Minus, ShoppingCart, CheckCircle2 } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import siteConfig from '../data/siteConfig'

export default function Cart() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, cartTotal, clearCart } = useCart()
  const [showSuccess, setShowSuccess] = useState(false)

  if (!isCartOpen && !showSuccess) return null

  const handleWhatsAppOrder = () => {
    let message = "Hello, I'd like to place an order:\n\n"
    cartItems.forEach((item) => {
      message += `${item.quantity}x ${item.name} - ₹${item.price * item.quantity}\n`
    })
    message += `\nTotal: ₹${cartTotal}`
    
    // Convert to WhatsApp URL
    const url = `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')

    // Reset and close
    clearCart()
    setIsCartOpen(false)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)

    // Navigate to menu
    const menuEl = document.querySelector('#menu')
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Toast Notification */}
      {showSuccess && (
        <div className="fixed top-24 right-4 bg-brand-gold text-brand-charcoal px-6 py-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] z-[200] flex items-center gap-3 font-medium animate-fade-in-up border border-brand-charcoal/10">
          <CheckCircle2 size={24} className="text-brand-charcoal" />
          <span>Order request sent successfully!</span>
        </div>
      )}

      {isCartOpen && (
        <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[95] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-dark shadow-2xl z-[100] flex flex-col border-l border-brand-gray-light/20 animate-slide-in-right">
        {/* Header */}
        <div className="p-5 flex items-center justify-between border-b border-brand-gray-light/20">
          <div className="flex items-center gap-2 text-brand-cream">
            <ShoppingCart size={24} className="text-brand-gold" />
            <h2 className="font-heading text-xl font-bold">Your Cart</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-brand-cream/80 hover:text-brand-gold transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-brand-text-muted gap-4">
              <ShoppingCart size={48} className="opacity-20" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-brand-gray/30 p-3 rounded-lg border border-brand-gray-light/10">
                  <div className="flex-1">
                    <h3 className="text-brand-cream font-medium line-clamp-1">{item.name}</h3>
                    <p className="text-brand-gold font-bold">₹{item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-brand-dark rounded-full px-2 py-1 border border-brand-gray-light/30">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-brand-cream hover:text-brand-gold transition-colors p-1"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-brand-cream font-medium w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-brand-cream hover:text-brand-gold transition-colors p-1"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-brand-gray-light/20 bg-brand-gray/10">
            <div className="flex justify-between items-center mb-4 text-lg">
              <span className="text-brand-cream font-medium">Total:</span>
              <span className="text-brand-gold font-bold font-heading text-xl">₹{cartTotal}</span>
            </div>
            <button 
              onClick={handleWhatsAppOrder}
              className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-bold py-3 rounded-xl transition-all shadow-[0_4px_14px_rgba(212,168,83,0.3)] hover:shadow-[0_6px_20px_rgba(212,168,83,0.4)] flex justify-center items-center gap-2"
            >
              Order on WhatsApp
            </button>
          </div>
        )}
      </div>
        </>
      )}
    </>
  )
}
