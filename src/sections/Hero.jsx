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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(to bottom right, rgb(15, 23, 42), rgb(30, 41, 59), rgb(15, 23, 42))'
          : 'linear-gradient(to bottom right, rgb(250, 250, 250), rgb(255, 255, 255), rgb(241, 245, 250))',
        transition: 'background 300ms duration-300'
      }}
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
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Chamindu Nevandith</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400">
                A passionate Fullstack software engineer crafting beautiful, scalable web experiences
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I specialize in building modern web applications with React, Node.js, and cloud technologies. Let's create something amazing together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#projects"
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 rounded-lg transition-all duration-300 font-semibold"
                style={{
                  color: theme === 'dark' ? 'white' : 'rgb(15, 23, 42)',
                  borderColor: theme === 'dark' ? 'rgb(71, 85, 105)' : 'rgb(203, 213, 225)',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(241, 245, 250)';
                  e.currentTarget.style.borderColor = theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(148, 163, 184)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = theme === 'dark' ? 'rgb(71, 85, 105)' : 'rgb(203, 213, 225)';
                }}
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6 pt-8">
              <a
                href="https://github.com/ChaminduNevandith"
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                  color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(55, 65, 81)'
                }}
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
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                  color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(55, 65, 81)'
                }}
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
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                  color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(55, 65, 81)'
                }}
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
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-2xl"></div>

              {/* Card */}
              <div 
                className="relative rounded-2xl p-8 w-100 h-120 flex flex-col items-center justify-center space-y-6 border"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(to bottom right, rgb(30, 41, 59), rgb(15, 23, 42))'
                    : 'linear-gradient(to bottom right, rgb(241, 245, 250), rgb(226, 232, 240))',
                  borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)',
                  transition: 'all 300ms'
                }}
              >
                <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-blue-500 flex items-center justify-center">
                  <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: theme === 'dark' ? 'white' : 'rgb(15, 23, 42)' }}>software engineer</h3>
                  <p style={{ color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}>Creating digital solutions</p>
                </div>

                <div className="w-full pt-4" style={{ borderTopColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)', borderTopWidth: '1px' }}>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-400">15+</p>
                      <p className="text-xs" style={{ color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}>Projects</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-400">2</p>
                      <p className="text-xs" style={{ color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}>Years Exp</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-pink-400">100%</p>
                      <p className="text-xs" style={{ color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)' }}>Dedicated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
