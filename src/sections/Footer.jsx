import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  Code,
  Share2,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  return (
    <footer className="relative bg-[#B9D7EA] overflow-hidden">

      {/* Top Curve */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-28 md:h-36 bg-[#364E6B] rounded-b-[50%]" />

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-28 md:h-36 bg-[#364E6B] rounded-t-[50%]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-36 md:pt-44 pb-36 md:pb-44">

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#364E6B]/60 mb-4">
              UI / UX Designer
            </p>

            <h2 className="text-[65px] sm:text-[90px] md:text-[120px] lg:text-[140px] leading-[0.8] font-bold tracking-[-0.06em] text-[#364E6B]">
              Let’s
              <span className="block text-white">
                create.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-[#364E6B]/70 leading-7">
              Have an idea, project, or opportunity in mind? I’m always open
              to creating simple and meaningful digital experiences together.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="lg:pl-10"
          >
            {/* Email */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#364E6B]/50 mb-3">
                Get in touch
              </p>

              <a
                href="mailto:cnewandith123@gmail.com"
                className="group flex items-center gap-3 text-lg md:text-xl text-[#364E6B] font-medium"
              >
                <Mail size={20} />

                <span className="relative">
                  cnewandith123@gmail.com

                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#364E6B] group-hover:w-full transition-all duration-300" />
                </span>
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#364E6B]/20 mb-8" />

            {/* Social Links */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#364E6B]/50 mb-4">
                Find me online
              </p>

              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      whileHover={{
                        y: -4,
                        rotate: -3,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="w-11 h-11 rounded-full border border-[#364E6B]/25 text-[#364E6B] flex items-center justify-center hover:bg-[#364E6B] hover:text-[#B9D7EA] transition-all duration-300"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-sm text-[#364E6B]/55">
              © {currentYear} Chamindu Nevandith
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="mt-16 pt-6 border-t border-[#364E6B]/20 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-[#364E6B]/50">
            Designed with simplicity and usability in mind.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex items-center gap-2 text-xs font-medium text-[#364E6B]"
            aria-label="Scroll to top"
          >
            Back to top

            <span className="w-8 h-8 rounded-full bg-[#364E6B] text-[#B9D7EA] flex items-center justify-center">
              <ArrowUp size={14} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;