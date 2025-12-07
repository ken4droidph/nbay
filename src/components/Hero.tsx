import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import ShinyText from './ShinyText';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://public.youware.com/users-website-assets/prod/6ee97e10-7685-42b7-a90f-a7e137863a72/2442293b77fc41ca914bfe038744ab53.jpg"
          alt="NBA Basketball"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-nba-red/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-nba-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nba-gold/20 border border-nba-gold/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-nba-gold animate-pulse" />
            <span className="text-nba-gold text-sm font-semibold">2024-25 Season Collection</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            GEAR UP LIKE THE{' '}
            <ShinyText text="PROS" speed={3} className="text-5xl md:text-7xl font-black" />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Shop the official NBA merchandise collection. From courtside jerseys to 
            signature sneakers - experience the game like never before.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-8 mb-10"
          >
            <div>
              <span className="text-4xl font-bold text-nba-gold">30+</span>
              <p className="text-gray-400 text-sm">NBA Teams</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-nba-red">500+</span>
              <p className="text-gray-400 text-sm">Products</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-nba-blue">100%</span>
              <p className="text-gray-400 text-sm">Authentic</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#products"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-nba-red hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
            >
              Shop Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-bold rounded-full transition-all backdrop-blur-sm">
              <Play className="w-5 h-5" />
              Watch Highlights
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-nba-gold"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
