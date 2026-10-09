/**
 * Menu data — all items, categories, and pricing.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Images are imported from src/assets/images/.
 * To update for a new client, swap items and images.
 */

import vegmomos from '../assets/images/vegmomosplatter.png'
import classicHotChocolate from '../assets/images/classichotchocolate.png'
import caramelHotChocolate from '../assets/images/Caramelhotchocolate.png'
import hazelnutHotChocolate from '../assets/images/Hazelnuthotchocolate.png'
import pistafalooda from '../assets/images/pistaFalooda.png'
import vanillafalooda from '../assets/images/VanillaFalooda.png'
import strawberryfalooda from '../assets/images/StrawberryFalooda.png'
import mangofalooda from '../assets/images/MangoFalooda.png'
import butterscotchfalooda from '../assets/images/ButterscotchFalooda.png'



export const categories = [
  'All',
  'Momos Platter',
  'Falooda',
  'Hot Chocolate'
]

export const menuItems = [
  // ─── Momos Platter ──────────────────────────────────────
  {
    id: 1,
    name: 'Veg Momos Platter',
    price: 180,
    category: 'Momos Platter',
    image: vegmomos,
    isPopular: true,
  },
  {
    id: 2,
    name: 'Paneer Momos Platter',
    price: 210,
    category: 'Momos Platter',
    image: vegmomos,
    isPopular: false,
  },
  {
    id: 3,
    name: 'Chicken Momos Platter',
    price: 250,
    category: 'Momos Platter',
    image: vegmomos,
    isPopular: false,
  },

   // ─── Hot Chocolate ────────────────────────────────
  {
    id: 4,
    name: 'Classic Hot Chocolate',
    price: 130,
    category: 'Hot Chocolate',
    image: classicHotChocolate,
    isPopular: false,
  },

  {
    id: 5,
    name: 'Caramel Hot Chocolate',
    price: 150,
    category: 'Hot Chocolate',
    image: caramelHotChocolate,
    isPopular: true,
  },
  {
    id: 6,
    name: 'Hazelnut Hot Chocolate',
    price: 150,
    category: 'Hot Chocolate',
    image: hazelnutHotChocolate,
    isPopular: false,
  },

   // ─── Falooda ────────────────────────────────

  {
    id: 7,
    name: 'Vanilla Falooda',
    price: 120,
    category: 'Falooda',
    image: vanillafalooda,
    isPopular: false,
  },
 {
    id: 8,
    name: 'Butterscotch Falooda',
    price: 170,
    category: 'Falooda',
    image: butterscotchfalooda,
    isPopular: true,
  },
{
    id: 9,
    name: 'Strawberry Falooda',
    price: 130,
    category: 'Falooda',
    image: strawberryfalooda,
    isPopular: true,
  },

  {
    id: 10,
    name: 'Pista Falooda',
    price: 130,
    category: 'Falooda',
    image: pistafalooda,
    isPopular: true,
  },
  {
    id: 11,
    name: 'Mango Falooda',
    price: 170,
    category: 'Falooda',
    image: mangofalooda,
    isPopular: false,
  }
]
