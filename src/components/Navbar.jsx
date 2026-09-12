import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className="fixed w-full top-0 z-50 backdrop-blur-md transition-colors duration-300"
      style={{
        background: theme === 'dark' ? 'rgba(3, 7, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderBottom: `1px solid ${theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'}`
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span 
              className="font-bold text-xl hidden sm:inline transition-colors duration-300"
              style={{ color: theme === 'dark' ? 'white' : 'rgb(15, 23, 42)' }}
            >
              My Portfolio
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-4 py-2 transition-colors duration-300 rounded-lg"
                style={{
                  color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme === 'dark' ? 'white' : 'rgb(15, 23, 42)';
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgb(241, 245, 250)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.title}
              </motion.a>
            ))}
          </div>

          {/* Right side - Theme Toggle + Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg transition-colors duration-300"
              style={{
                backgroundColor: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(241, 245, 250)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)';
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </motion.button>

            {/* Contact Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Mobile - Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg transition-colors duration-300"
              style={{
                backgroundColor: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(241, 245, 250)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)';
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </motion.button>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              style={{ color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}
              className="transition-colors duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme === 'dark' ? 'white' : 'rgb(15, 23, 42)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)';
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t transition-colors duration-300"
          style={{
            background: theme === 'dark' ? 'rgb(15, 23, 42)' : 'rgb(250, 250, 250)',
            borderColor: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
          }}
        >
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={handleMenuClick}
                className="block px-4 py-2 rounded-lg transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme === 'dark' ? 'white' : 'rgb(15, 23, 42)';
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgb(241, 245, 250)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.title}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleMenuClick}
              className="block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
