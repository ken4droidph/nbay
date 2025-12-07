# NBA Merchandise Store - E-commerce Website

A professional NBA-themed e-commerce website built with React 18, TypeScript, Vite, and Tailwind CSS.

## Project Overview

This is an official NBA merchandise store MVP featuring:
- Hero section with dynamic content and NBA player imagery
- Product catalog with filtering and search functionality
- Shopping cart with localStorage persistence
- Newsletter subscription signup
- Fully responsive design for mobile and desktop

## Key Features Implemented

1. **Hero Section**: Full-screen hero with NBA basketball imagery, statistics display, and call-to-action buttons
2. **Product Cards**: SpotlightCard animation effect with cursor-following spotlight and hover interactions
3. **Category Filtering**: Filter products by category (jerseys, shoes, jackets, shorts, caps)
4. **Search Functionality**: Real-time search across product names, teams, and players
5. **Shopping Cart**: Slide-out cart panel with quantity controls, localStorage persistence via Zustand
6. **Responsive Design**: Mobile-first design with Tailwind CSS breakpoints
7. **Animations**: Framer Motion entrance animations and custom CSS effects (ShinyText shimmer, SpotlightCard)
8. **Promo Section**: Feature highlights for authenticity, shipping, delivery, and security

## Tech Stack

- **React**: 18.3.1 - UI library
- **TypeScript**: 5.8.3 - Type safety
- **Vite**: 7.0.0 - Build tool
- **Tailwind CSS**: 3.4.17 - Styling
- **Zustand**: 4.4.7 - State management with persist middleware
- **Framer Motion**: 11.0.8 - Animations
- **Lucide React**: Icon library

## Project Structure

```
src/
├── components/
│   ├── Header.tsx         # Navigation header with cart button
│   ├── Hero.tsx           # Hero section with imagery and CTAs
│   ├── FilterBar.tsx      # Category filters and search bar
│   ├── ProductCard.tsx    # Product card with spotlight effect
│   ├── Cart.tsx           # Slide-out shopping cart
│   ├── Newsletter.tsx     # Email subscription section
│   ├── Footer.tsx         # Site footer with links
│   ├── PromoSection.tsx   # Feature highlights
│   ├── SpotlightCard.tsx  # Animated card component
│   ├── ShinyText.tsx      # Shimmer text animation
│   └── *.css              # Component-specific styles
├── store/
│   └── cartStore.ts       # Zustand cart state management
├── data/
│   └── products.ts        # Mock product data
├── types/
│   └── index.ts           # TypeScript interfaces
└── App.tsx                # Main application component
```

## Color Scheme (NBA Official Colors)

- **NBA Red**: #C8102E
- **NBA Blue**: #1D428A  
- **NBA Gold**: #FFD700

## Development Commands

- **Install dependencies**: `npm install`
- **Build project**: `npm run build`

## Future Enhancements

- Product detail page with 360° image viewer
- Backend integration for real product data and checkout
- User authentication and order history
- Player/Artist highlight pages
- Countdown timers for limited edition releases
