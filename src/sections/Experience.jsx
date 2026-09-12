import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { experience } from '../data/portfolioData';

const Experience = () => {
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden transition-colors duration-300"
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 dark:bg-blue-600/15"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 dark:bg-purple-600/15"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.span 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full font-medium text-sm mb-6"
            style={{
              background: theme === 'dark'
                ? 'rgba(59, 130, 246, 0.2)'
                : 'rgba(59, 130, 246, 0.1)',
              color: theme === 'dark' ? '#60a5fa' : '#2563eb',
              border: theme === 'dark'
                ? '1px solid rgba(59, 130, 246, 0.3)'
                : '1px solid rgba(59, 130, 246, 0.2)'
            }}
          >
            Career Journey
          </motion.span>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
            style={{
              color: theme === 'dark' ? '#f1f5f9' : '#0f172a'
            }}
          >
            Work <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed"
            style={{
              color: theme === 'dark' ? '#cbd5e1' : '#475569'
            }}
          >
            A timeline of my professional growth, meaningful projects, and career achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(168, 85, 247), rgb(236, 72, 153))'
            }}
          ></div>

          <div className="space-y-20">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-stretch gap-12 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                
                {/* Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  className="w-full md:w-1/2 group relative overflow-hidden rounded-2xl"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95))',
                    border: theme === 'dark'
                      ? '1px solid rgba(148, 163, 184, 0.2)'
                      : '1px solid rgba(203, 213, 225, 0.4)',
                    boxShadow: theme === 'dark'
                      ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                      : '0 10px 30px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))'
                        : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05))'
                    }}
                  ></div>

                  {/* Border Gradient */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-0.5"
                    style={{
                      background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247))',
                    }}
                  ></div>

                  <div className="relative z-10 p-8 md:p-10">
            
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-8">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight"
                          style={{
                            color: theme === 'dark' ? '#f1f5f9' : '#0f172a'
                          }}
                        >
                          {job.title}
                        </h3>

                        <div className="flex items-center gap-2 font-semibold"
                          style={{
                            color: theme === 'dark' ? '#60a5fa' : '#2563eb'
                          }}
                        >
                          <Building2 size={18} className="flex-shrink-0" />
                          <span>{job.company}</span>
                        </div>
                      </div>

                      <motion.div 
                        whileHover={{ rotate: 45 }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247))'
                        }}
                      >
                        <Briefcase className="text-white" size={28} />
                      </motion.div>
                    </div>

                    {/* Info Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                        style={{
                          background: theme === 'dark'
                            ? 'rgba(59, 130, 246, 0.15)'
                            : 'rgba(59, 130, 246, 0.1)',
                          color: theme === 'dark' ? '#60a5fa' : '#2563eb',
                          border: theme === 'dark'
                            ? '1px solid rgba(59, 130, 246, 0.3)'
                            : '1px solid rgba(59, 130, 246, 0.2)'
                        }}
                      >
                        <MapPin size={16} className="flex-shrink-0" />
                        {job.location}
                      </motion.div>

                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                        style={{
                          background: theme === 'dark'
                            ? 'rgba(168, 85, 247, 0.15)'
                            : 'rgba(168, 85, 247, 0.1)',
                          color: theme === 'dark' ? '#d8b4fe' : '#a855f7',
                          border: theme === 'dark'
                            ? '1px solid rgba(168, 85, 247, 0.3)'
                            : '1px solid rgba(168, 85, 247, 0.2)'
                        }}
                      >
                        <Calendar size={16} className="flex-shrink-0" />
                        {job.duration}
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-base leading-relaxed mb-8"
                      style={{
                        color: theme === 'dark' ? '#cbd5e1' : '#475569'
                      }}
                    >
                      {job.description}
                    </p>

                    {/* Action Link */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 font-semibold group/link cursor-pointer transition-colors duration-300 fit-content"
                      style={{
                        color: theme === 'dark' ? '#60a5fa' : '#2563eb'
                      }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-12 -translate-x-1/2 items-center justify-center z-20">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-2xl relative"
                    style={{
                      background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247))',
                      border: theme === 'dark'
                        ? '4px solid #1e293b'
                        : '4px solid #f8fafc'
                    }}
                  >
                    <span className="relative z-10">{index + 1}</span>
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)'
                      }}
                    ></div>
                  </motion.div>
                </div>

                {/* Empty Space */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-28 text-center"
        >
          <p className="text-lg md:text-xl mb-8 font-medium leading-relaxed max-w-2xl mx-auto"
            style={{
              color: theme === 'dark' ? '#cbd5e1' : '#475569'
            }}
          >
            Interested in learning more about my projects and work?
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247))',
            }}
          >
            <span className="relative z-10">Let's Connect</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm mt-8"
            style={{
              color: theme === 'dark' ? '#94a3b8' : '#64748b'
            }}
          >
            I'm always open to new opportunities and exciting projects!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;