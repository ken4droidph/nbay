import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Trophy, Truck, Shield } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: '100% Authentic',
    description: 'Official NBA licensed merchandise',
    color: 'from-nba-gold to-yellow-600',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $75',
    color: 'from-nba-blue to-blue-600',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: '2-5 business days',
    color: 'from-nba-red to-red-600',
  },
  {
    icon: Shield,
    title: 'Secure Checkout',
    description: '100% secure payment',
    color: 'from-green-500 to-emerald-600',
  },
];

const PromoSection = () => {
  return (
    <section className="py-12 border-y border-white/10 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-1">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
