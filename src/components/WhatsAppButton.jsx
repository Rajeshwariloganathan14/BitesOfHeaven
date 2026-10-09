import { MessageCircle } from 'lucide-react'
import siteConfig from '../data/siteConfig'

/**
 * Floating WhatsApp contact button (bottom-left).
 */
export default function WhatsAppButton() {
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 w-11 h-11 md:w-13 md:h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] active:scale-95 animate-pulse-glow"
      style={{ '--tw-ring-color': 'rgba(37, 211, 102, 0.3)' }}
    >
      <MessageCircle size={26} fill="white" />
    </a>
  )
}
