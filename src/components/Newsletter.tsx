import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bell, Check } from 'lucide-react';
import ShinyText from './ShinyText';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nba-red/20 via-black to-nba-blue/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-nba-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nba-red/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-nba-gold/20 rounded-full mb-6"
          >
            <Bell className="w-8 h-8 text-nba-gold" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-4"
          >
            GET FIRST ACCESS TO{' '}
            <ShinyText text="EXCLUSIVE DROPS" speed={3} className="text-3xl md:text-4xl font-black" />
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg mb-8"
          >
            Sign up for exclusive access to limited edition releases, player collections, 
            and special promotions before anyone else.
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-3 w-full py-4 bg-green-500/20 border border-green-500/30 rounded-full">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">You&apos;re on the list!</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-nba-gold/50 focus:ring-2 focus:ring-nba-gold/20 transition-all"
                />
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-nba-red hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-lg shadow-red-500/25"
                >
                  Subscribe
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}
          </motion.form>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm mt-4"
          >
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
