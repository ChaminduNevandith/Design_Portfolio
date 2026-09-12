import React from 'react';
import { ArrowRight, Code, User, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import profileImg from '../assets/profile1.png';

const Hero = () => {
  const { theme } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#B9D7EA] flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-2">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold text-[#364e6b] leading-tight">
                Hello, I'm <span className="text-5xl md:text-8xl text-[#111e2e]">Chamindu</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl font-medium md:text-xl text-[#364e6b] ">
                Some one who loves to design and develop things that live on the internet.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-2 pt-6">
              <a
                href="#contact"
                className="group px-8 py-3 bg-[#1e3550] text-[#B9D7EA] rounded-full flex items-center justify-center gap-2 font-semibold"
              >
                Contact
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://github.com/ChaminduNevandith"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-[#1e3550] text-[#B9D7EA]"

                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(209, 213, 219)';
                  e.currentTarget.style.color = theme === 'dark' ? 'white' : 'rgb(15, 23, 42)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)';
                  e.currentTarget.style.color = theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(55, 65, 81)';
                }}
              >
                <Code size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/chamindu-nevandith-1691b9278/"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-[#1e3550] text-[#B9D7EA]"
            
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(209, 213, 219)';
                  e.currentTarget.style.color = theme === 'dark' ? 'white' : 'rgb(15, 23, 42)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)';
                  e.currentTarget.style.color = theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(55, 65, 81)';
                }}
              >
                <User size={24} />
              </a>
              <a
                href="mailto:cnewandith123@gmail.com"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-[#1e3550] text-[#B9D7EA]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(209, 213, 219)';
                  e.currentTarget.style.color = theme === 'dark' ? 'white' : 'rgb(15, 23, 42)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)';
                  e.currentTarget.style.color = theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(55, 65, 81)';
                }}
              >
                <Mail size={24} />
              </a>

            </motion.div>

          </div>

          {/* Right - Floating Card */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="hidden md:flex justify-center"
          >
            <div className="relative w-[420px]">

              {/* Background glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 blur-3xl rounded-[40px]" />

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#14263b]/90 backdrop-blur-xl shadow-2xl">

                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />

                <div className="relative p-8">

                  {/* Available Badge */}
                  <div className="flex justify-end items-center mb-8">

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs font-medium text-green-400">
                        Available for work
                      </span>
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div className="relative mx-auto w-64 h-64 mb-8">
                    <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-blue-500 to-purple-500 rotate-3 opacity-70" />

                    <div className="relative w-full h-full rounded-[28px] overflow-hidden border border-white/10">
                      <img
                        src={profileImg}
                        alt="UI/UX Designer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating Figma Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-[#1e3550] border border-white/10 shadow-xl rounded-2xl px-4 py-3">
                      <p className="text-xs text-slate-400">Main Tool</p>
                      <p className="font-semibold text-white">Figma</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mt-10">
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3">
                      UI / UX Designer
                    </p>

                    <h3 className="text-3xl font-bold text-white mb-3">
                      Beautiful interfaces
                      <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Better experiences.
                      </span>
                    </h3>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 mt-8 pt-7 border-t border-white/10">

                    <div className="text-center border-r border-white/10">
                      <p className="text-2xl font-bold text-white">
                        15+
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Projects
                      </p>
                    </div>

                    <div className="text-center border-r border-white/10">
                      <p className="text-2xl font-bold text-white">
                        01+
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Years
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">
                        100%
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Passion
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              {/* Floating decorative element */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 top-28 bg-[#1e3550] border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-slate-400">Specialized in</p>
                <p className="text-sm font-semibold text-white">
                  Web & Mobile UI
                </p>
              </motion.div>

  </div>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
