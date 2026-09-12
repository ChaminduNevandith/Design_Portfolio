import React from 'react';
import { motion } from 'framer-motion';
import { Code, User, Mail, Share2, Heart, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Code, href: 'https://github.com/ChaminduNevandith', label: 'GitHub' },
    { icon: User, href: 'https://www.linkedin.com/in/chamindu-nevandith-1691b9278/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:cnewandith123@gmail.com', label: 'Email' },
    { icon: Share2, href: 'https://www.instagram.com/chami__du/', label: 'Instagram' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="transition-colors duration-300"
      style={{
        background: theme === 'dark' ? 'rgb(3, 7, 30)' : 'rgb(241, 245, 250)',
        borderTop: `1px solid ${theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(209, 213, 219)'}`
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span 
                className="font-bold text-xl transition-colors duration-300"
                style={{ color: theme === 'dark' ? 'white' : 'rgb(15, 23, 42)' }}
              >
                My Portfolio
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 
              className="font-semibold transition-colors duration-300"
              style={{ color: theme === 'dark' ? 'white' : 'rgb(15, 23, 42)' }}
            >
              Quick Links
            </h3>
            <nav className="space-y-2">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm transition-colors duration-300"
                  style={{ color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme === 'dark' ? 'white' : 'rgb(15, 23, 42)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 
              className="font-semibold transition-colors duration-300"
              style={{ color: theme === 'dark' ? 'white' : 'rgb(15, 23, 42)' }}
            >
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                      color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)'
                    }}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div 
          className="my-8 transition-colors duration-300 border-t"
          style={{
            borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)'
          }}
        ></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm flex items-center gap-1 transition-colors duration-300"
            style={{ color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}
          >
            <span>&copy; {currentYear} All rights reserved.</span>
            <span className="flex items-center gap-1">
              Built with by Chamindu Nevandith
            </span>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
              color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)'
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Extra Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs"
        >
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
