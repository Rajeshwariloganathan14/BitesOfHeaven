/**
 * Centralized restaurant configuration.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * To rebrand this website for a new restaurant client,
 * edit this file and menuData.js — no component changes needed.
 */

const siteConfig = {
  // ─── Restaurant Identity ───────────────────────────
  name: 'Bites of Heaven',
  tagline: 'Authentic Flavours, Made With Passion',
  shortDescription:
    'Discover a world of rich, aromatic Indian cuisine crafted by our expert chefs using time-honoured recipes and the finest locally-sourced ingredients.',
  longDescription:
    'Founded in 2025, Bites of Heaven was born from a passion for bringing the diverse, vibrant flavours of India to your table. Every dish tells a story - from the smoky depths of our tandoor oven to the delicate balance of spices in our signature curries. We believe great food is about more than taste; it is about experience, tradition, and the warmth of sharing a meal with those you love.',

  // ─── Contact Information ───────────────────────────
  phone: '+91 9566344446',
  phoneHref: 'tel:+919566344446',
  email: 'bitsofheaven@gmail.com',
  whatsapp: '9566344446',
  whatsappMessage: 'Hi! I would like to know more about Bites of Heaven.',

  // ─── Address ───────────────────────────────────────
  address: {
    street: '20, Kamaraj Rd, Arumugam Nagar',
    city: 'Pollachi',
    state: 'Tamilnadu',
    zip: '642002',
    country: 'India',
    full: '20, Kamaraj Rd, Arumugam Nagar, Pollachi, Tamilnadu 642002',
    googleMapsQuery: '20+Kamaraj+Rd+Arumugam+Nagar+Pollachi+Tamilnadu+642002',
    googleMapsEmbed:
      'https://www.google.com/maps?q=12.9716,77.5946&z=15&output=embed',
    googleMapsLink:
      'https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946',
  },

  // ─── Opening Hours ─────────────────────────────────
  hours: [
    { days: 'Monday – Thursday', time: '11:00 AM – 10:30 PM' },
    { days: 'Friday – Saturday', time: '11:00 AM – 11:00 PM' },
    { days: 'Sunday', time: '10:00 AM – 10:30 PM' },
  ],

  // ─── Social Media ──────────────────────────────────
  social: {
    instagram: 'https://instagram.com/bites_of__heaven',
    // facebook: 'https://facebook.com/BitesofHeaven',
    // twitter: 'https://twitter.com/BitesofHeaven',
    // youtube: 'https://youtube.com/@BitesofHeaven',
  },

  // ─── Navigation Links ─────────────────────────────
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],

  // ─── Why Choose Us ─────────────────────────────────
  features: [
    {
      icon: 'Leaf',
      title: 'Fresh Ingredients',
      description:
        'We source the finest spices and freshest produce from local farms and trusted suppliers every single day.',
    },
    {
      icon: 'ChefHat',
      title: 'Expert Chefs',
      description:
        'Our team of award-winning chefs brings decades of culinary experience and passion to every dish they create.',
    },
    {
      icon: 'Clock',
      title: 'Fast Service',
      description:
        'Enjoy prompt and attentive service without the wait. Your time is valuable, and we respect it.',
    },
    {
      icon: 'Armchair',
      title: 'Cozy Ambience',
      description:
        'Relax in our thoughtfully designed dining space with warm lighting, comfortable seating, and elegant décor.',
    },
  ],

  // ─── About Section Features ────────────────────────
  aboutFeatures: [
    {
      icon: 'Award',
      title: 'Quality Ingredients',
      description: 'We handpick premium spices and fresh produce daily to ensure every dish meets our exacting standards.',
    },
    {
      icon: 'Flame',
      title: 'Freshly Prepared',
      description: 'Every meal is cooked to order - no shortcuts, no compromises. Just honest, flavourful food.',
    },
    {
      icon: 'Heart',
      title: 'Comfortable Dining',
      description: 'From intimate dinners to festive gatherings, our warm ambience makes every visit special.',
    },
  ],
}

export default siteConfig
