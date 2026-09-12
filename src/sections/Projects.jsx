import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { SiFigma } from 'react-icons/si';
import { projects, uiuxDesigns } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// ProjectCard Component
const ProjectCard = ({ project, index, theme }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  const hoverVariants = {
    initial: { y: 0 },
    hover: { y: -10 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
      className="group"
    >
      <div className="relative h-full rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 border"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(to bottom right, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%)'
            : 'linear-gradient(to bottom right, rgb(241, 245, 250) 0%, rgb(250, 250, 250) 100%)',
          borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)',
          transition: 'all 300ms'
        }}>
      
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-r from-blue-500/10 to-purple-600/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full border border-slate-300 dark:border-slate-600/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-xs bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full border border-slate-300 dark:border-slate-600/50 transition-colors duration-300">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Features */}
          <div className="pt-2 border-t border-slate-300 dark:border-slate-700 transition-colors duration-300">
            <p className="text-xs text-slate-600 dark:text-slate-500 mb-2 transition-colors duration-300">Key Features:</p>
            <ul className="text-xs text-slate-700 dark:text-slate-400 space-y-1 transition-colors duration-300">
              {project.features.slice(0, 2).map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-4">
            <a
              href={project.github}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700/50 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
            >
              <Code size={16} />
              Code
            </a>
            <a
              href={project.liveDemo}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/50 to-purple-600/50 hover:from-blue-500 hover:to-purple-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          </div>
        </div>

        {/* Hover Border Animation */}
        <div className="absolute inset-0 rounded-xl border-2 border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

// UIUXCard Component
const UIUXCard = ({ design, index, theme }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="relative h-full rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 border"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(to bottom right, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%)'
            : 'linear-gradient(to bottom right, rgb(241, 245, 250) 0%, rgb(250, 250, 250) 100%)',
          borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)',
          transition: 'all 300ms'
        }}>
      
        {/* Image Container - Figma Embed */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-r from-purple-500/10 to-pink-600/10">
          <iframe
            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(design.figma)}`}
            allowFullScreen
            className="w-full h-full border-0"
            style={{ pointerEvents: 'none' }}
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 via-transparent to-transparent pointer-events-none"></div>
          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500/90 text-white text-xs font-semibold rounded-full z-10">
            {design.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors duration-300">
            {design.title}
          </h3>

          {/* Description */}
          <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">
            {design.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {design.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-purple-500/20 dark:bg-purple-700/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-300/50 dark:border-purple-600/50 transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div className="pt-2 border-t border-slate-300 dark:border-slate-700 transition-colors duration-300">
            <p className="text-xs text-slate-600 dark:text-slate-500 mb-2 transition-colors duration-300">Design Highlights:</p>
            <ul className="text-xs text-slate-700 dark:text-slate-400 space-y-1 transition-colors duration-300">
              {design.highlights.slice(0, 2).map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="flex gap-3 pt-4">
            <a
              href={design.figma}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/50 to-pink-600/50 hover:from-purple-500 hover:to-pink-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
            >
              <SiFigma size={16} />
              View Design
            </a>
          </div>
        </div>

        {/* Hover Border Animation */}
        <div className="absolute inset-0 rounded-xl border-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

// Projects Section
const Projects = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('software');
  
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto transition-colors duration-300">
            A selection of my recent projects and design work showcasing full-stack development and UX/UI design skills
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setActiveTab('software')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'software'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                : 'bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            <Code size={18} className="inline mr-2" />
            Software Projects
          </button>
          <button
            onClick={() => setActiveTab('uiux')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'uiux'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            <SiFigma size={18} className="inline mr-2" />
            UI/UX Projects
          </button>
        </motion.div>

        {/* Software Projects Tab */}
        {activeTab === 'software' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} theme={theme} />
              ))}
            </div>

            {/* View All Software Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <a
                href="https://github.com/ChaminduNevandith?tab=repositories"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-semibold"
              >
                View More Projects on GitHub
                <ExternalLink size={20} />
              </a>
            </motion.div>
          </motion.div>
        )}

        {/* UI/UX Projects Tab */}
        {activeTab === 'uiux' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uiuxDesigns.map((design, index) => (
                <UIUXCard key={design.id} design={design} index={index} theme={theme} />
              ))}
            </div>

            {/* View All UI/UX Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
