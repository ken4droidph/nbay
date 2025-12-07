import React, { useState } from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { useCartStore } from '../store/cartStore';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const addItem = useCartStore(state => state.addItem);
  const setCartOpen = useCartStore(state => state.setCartOpen);

  const handleAddToCart = () => {
    addItem(product, selectedSize, product.colors[0]);
    setCartOpen(true);
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <SpotlightCard 
        className="group h-full"
        spotlightColor="rgba(200, 16, 46, 0.25)"
      >
        <div className="relative">
          {/* Product Image */}
          <div className="relative h-56 overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-900 to-gray-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && (
                <span className="px-3 py-1 text-xs font-bold bg-nba-blue text-white rounded-full">
                  NEW
                </span>
              )}
              {product.isLimited && (
                <span className="px-3 py-1 text-xs font-bold bg-nba-gold text-black rounded-full">
                  LIMITED
                </span>
              )}
              {discount > 0 && (
                <span className="px-3 py-1 text-xs font-bold bg-nba-red text-white rounded-full">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Like Button */}
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  isLiked ? 'text-nba-red fill-nba-red' : 'text-white'
                }`}
              />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 relative z-10">
            {/* Team/Player */}
            {(product.team || product.player) && (
              <p className="text-xs text-nba-gold uppercase tracking-wider mb-1">
                {product.team || product.player}
              </p>
            )}

            {/* Name */}
            <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-nba-gold transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-nba-gold fill-nba-gold'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-400 text-sm">({product.reviews})</span>
            </div>

            {/* Sizes */}
            <div className="flex flex-wrap gap-1 mb-4">
              {product.sizes.slice(0, 5).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2 py-1 text-xs rounded border transition-colors ${
                    selectedSize === size
                      ? 'border-nba-gold bg-nba-gold/20 text-nba-gold'
                      : 'border-gray-600 text-gray-400 hover:border-gray-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Price & Add to Cart */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <button
                onClick={handleAddToCart}
                className="p-3 rounded-full bg-nba-red hover:bg-red-700 transition-colors shadow-lg shadow-red-500/25"
              >
                <ShoppingCart className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default ProductCard;
