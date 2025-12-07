import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Lakers Icon Edition Jersey',
    price: 159.99,
    originalPrice: 189.99,
    category: 'jersey',
    team: 'Los Angeles Lakers',
    player: 'LeBron James',
    image: 'https://public.youware.com/users-website-assets/prod/6ee97e10-7685-42b7-a90f-a7e137863a72/088d34c8a475465c931ac825cc7a6c89.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Purple', 'Gold'],
    description: 'Authentic NBA jersey with heat-applied graphics and Nike Dri-FIT technology.',
    isNew: true,
    rating: 4.8,
    reviews: 1247
  },
  {
    id: '2',
    name: 'Air Jordan XXXVIII Basketball Shoes',
    price: 229.99,
    category: 'shoes',
    player: 'Michael Jordan',
    image: 'https://public.youware.com/users-website-assets/prod/6ee97e10-7685-42b7-a90f-a7e137863a72/e8cf5dcd91754848b67270e324d40860.jpg',
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    colors: ['Black/Red', 'White/University Blue'],
    description: 'Premium basketball performance shoe with responsive cushioning.',
    isLimited: true,
    rating: 4.9,
    reviews: 892
  },
  {
    id: '3',
    name: 'Nike NBA Therma Flex Jacket',
    price: 149.99,
    originalPrice: 179.99,
    category: 'jacket',
    image: 'https://public.youware.com/users-website-assets/prod/6ee97e10-7685-42b7-a90f-a7e137863a72/07afd1e419de434bbeedfe8ef92aeb05.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Grey'],
    description: 'Stay warm courtside with this premium NBA warm-up jacket.',
    rating: 4.6,
    reviews: 456
  },
  {
    id: '4',
    name: 'Warriors Authentic Shorts',
    price: 89.99,
    category: 'shorts',
    team: 'Golden State Warriors',
    player: 'Stephen Curry',
    image: 'https://public.youware.com/users-website-assets/prod/6ee97e10-7685-42b7-a90f-a7e137863a72/85701ce428f44e86931861c47967a84f.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue', 'White'],
    description: 'Official NBA game shorts with Dri-FIT technology.',
    rating: 4.7,
    reviews: 678
  },
  {
    id: '5',
    name: 'NBA 75th Anniversary Cap',
    price: 39.99,
    category: 'cap',
    image: 'https://public.youware.com/users-website-assets/prod/6ee97e10-7685-42b7-a90f-a7e137863a72/88922bb3b34245f4a0dc161448f97c06.png',
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red'],
    description: 'Celebrate NBA history with this limited anniversary edition cap.',
    isLimited: true,
    rating: 4.5,
    reviews: 234
  },
  {
    id: '6',
    name: 'Slam Dunk Performance Sneakers',
    price: 189.99,
    originalPrice: 219.99,
    category: 'shoes',
    image: 'https://public.youware.com/users-website-assets/prod/6ee97e10-7685-42b7-a90f-a7e137863a72/8c0b872ffb0143e5a4ea882b915af563.jpg',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White/Orange', 'Black/Gold'],
    description: 'High-performance basketball shoes designed for explosive plays.',
    isNew: true,
    rating: 4.8,
    reviews: 567
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: '🏀' },
  { id: 'jersey', name: 'Jerseys', icon: '👕' },
  { id: 'shoes', name: 'Shoes', icon: '👟' },
  { id: 'jacket', name: 'Jackets', icon: '🧥' },
  { id: 'shorts', name: 'Shorts', icon: '🩳' },
  { id: 'cap', name: 'Caps', icon: '🧢' },
];
