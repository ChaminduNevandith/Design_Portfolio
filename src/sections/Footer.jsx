import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  User,
  Mail,
  Share2,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Code,
      href: "https://github.com/ChaminduNevandith",
      label: "GitHub",
    },
    {
      icon: User,
      href: "https://www.linkedin.com/in/chamindu-nevandith-1691b9278/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:cnewandith123@gmail.com",
      label: "Email",
    },
    {
      icon: Share2,
      href: "https://www.instagram.com/chami__du/",
      label: "Instagram",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#364E6B] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">

              <div className="w-9 h-9 bg-[#B9D7EA] rounded-lg flex items-center justify-center">
                <span className="text-[#364E6B] font-bold text-lg">
                  C
                </span>
              </div>

              <span className="font-bold text-xl text-white">
                My Portfolio
              </span>

            </div>

            <p className="text-sm text-[#B9D7EA]/75 max-w-xs leading-6">
              Creating simple and user-friendly digital experiences through
              thoughtful UI/UX design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <nav className="space-y-2">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-[#B9D7EA]/75 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-white">
              Connect
            </h3>

            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 text-[#B9D7EA] hover:bg-[#B9D7EA] hover:text-[#364E6B] hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="text-sm text-[#B9D7EA]/70 text-center md:text-left"
          >
            <span>
              © {currentYear} All rights reserved.
            </span>

            <span className="ml-1">
              Built by Chamindu Nevandith
            </span>
          </motion.div>

          {/* Scroll Top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#B9D7EA] text-[#364E6B] hover:bg-white transition-all duration-300"
            aria-label="Scroll to top 
            "
          >
            <ArrowUp size={20} />
          </motion.button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;