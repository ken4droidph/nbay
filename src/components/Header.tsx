import React, { useState } from 'react';
import { ShoppingCart, Menu, User, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/cartStore';
import ShinyText from './ShinyText';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const navLinks = [
    { name: 'Jerseys', href: '#products' },
    { name: 'Shoes', href: '#products' },
    { name: 'Apparel', href: '#products' },
    { name: 'Teams', href: '#products' },
    { name: 'Players', href: '#products' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-nba-red rounded-full flex items-center justify-center">
              <span className="text-white font-black text-xl">N</span>
            </div>
            <div className="hidden sm:block">
              <ShinyText text="NBA STORE" speed={4} className="text-xl font-black tracking-tight" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nba-gold transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search - Desktop Only */}
            <button className="hidden lg:flex p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-300" />
            </button>

            {/* User */}
            <button className="hidden lg:flex p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="w-5 h-5 text-gray-300" />
            </button>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-300" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-nba-red text-white text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 border-t border-white/10"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white py-2 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
