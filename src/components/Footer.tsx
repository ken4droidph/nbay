import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import ShinyText from './ShinyText';

const Footer = () => {
  const links = {
    shop: ['Jerseys', 'Shoes', 'Apparel', 'Accessories', 'Sale'],
    teams: ['Lakers', 'Warriors', 'Bulls', 'Celtics', 'Heat'],
    support: ['Help Center', 'Shipping', 'Returns', 'Size Guide', 'Contact'],
    company: ['About Us', 'Careers', 'Press', 'Affiliate', 'Partners'],
  };

  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Facebook, href: '#' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-nba-red rounded-full flex items-center justify-center">
                <span className="text-white font-black text-xl">N</span>
              </div>
              <ShinyText text="NBA STORE" speed={4} className="text-xl font-black" />
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              The official destination for authentic NBA merchandise. 
              Gear up like the pros with jerseys, shoes, and apparel.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white/5 hover:bg-nba-red rounded-full transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              {links.shop.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Teams Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Teams</h3>
            <ul className="space-y-2">
              {links.teams.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2024 NBA Store. All rights reserved. Official NBA merchandise.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
