import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Target } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import CVFile from '../assets/Chamindu_Nevandith_CV.pdf';

const About = () => {
  const { theme } = useTheme();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CVFile;
    link.download = 'Chamindu_Nevandith_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following industry best practices.",
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Building high-performance applications that provide excellent user experiences.",
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Tackling complex challenges with creative solutions and innovative approaches.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm transition-colors duration-300">
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
            I'm a passionate Software Engineer specializing in modern web development using React.js, Node.js, and other modern technologies. I focus on building scalable, high-performance applications with intuitive user experiences and clean, maintainable code. With strong frontend and backend development skills, I enjoy turning ideas into efficient and reliable software solutions.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
              I have hands-on experience developing responsive and dynamic applications using React.js on the frontend and Node.js on the backend, ensuring clean code, efficient performance, and scalable system design. I’m committed to following industry best practices and continuously improving my skills by exploring modern technologies and development patterns.
            </p>

            {/* <p className="text-lg text-slate-300 leading-relaxed">
              Beyond coding, I enjoy sharing knowledge through mentoring junior developers, contributing to open-source projects, and staying updated with the latest trends in web development.
            </p> */}

            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-semibold cursor-pointer"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Right - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 border"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(to bottom right, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%)'
                      : 'linear-gradient(to bottom right, rgb(241, 245, 250) 0%, rgb(250, 250, 250) 100%)',
                    borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)',
                    transition: 'all 300ms'
                  }}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-slate-700 dark:text-slate-400 transition-colors duration-300">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
        >
          {[
            { number: "15+", label: "Projects Completed" },
            { number: "2", label: "Years Experience" },
            { number: "10+", label: "Technologies" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 border"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(to bottom right, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%)'
                  : 'linear-gradient(to bottom right, rgb(241, 245, 250) 0%, rgb(250, 250, 250) 100%)',
                borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)',
                transition: 'all 300ms'
              }}
            >
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-slate-700 dark:text-slate-400 transition-colors duration-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
