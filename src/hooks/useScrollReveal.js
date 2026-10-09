import { useEffect, useRef } from 'react'

/**
 * Intersection Observer hook for scroll-reveal animations.
 * Attach the returned ref to a container element with class "reveal",
 * "reveal-left", "reveal-right", or "reveal-stagger".
 * When the element enters the viewport, class "revealed" is added.
 *
 * @param {Object} options
 * @param {number} options.threshold - 0 to 1 (default 0.15)
 * @param {string} options.rootMargin - CSS margin string (default '0px 0px -60px 0px')
 */
export default function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    // Observe the container itself
    observer.observe(node)

    // Also observe all child elements that have reveal classes
    const children = node.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger')
    children.forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
