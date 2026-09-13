import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Target , Palette , Lightbulb } from 'lucide-react';
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
    icon: Palette,
    title: "Design Tools",
    description:
      "Creating UI designs, wireframes, prototypes, and layouts using Figma, Canva, Auto Layout, and reusable components.",
  },
  {
    icon: Zap,
    title: "Clean & Modern UI",
    description:
      "Designing visually appealing interfaces with clear layouts and consistent design.",
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solving",
    description:
      "Turning ideas and user problems into practical and effective design solutions.",
  },
];

  return (
    <section id="about" className="py-2 bg-[#B9D7EA] backdrop-blur-sm transition-colors duration-300">

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#D6E6F2] p-4 rounded-2xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >

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

            <h2 className="text-4xl md:text-5xl font-bold text-[#111e2e]  mb-4 transition-colors duration-300">
            About Me 
          </h2>
          
            <p className="text-lg font-medium text-[#364e6b] duration-300">
              I’m a passionate UI/UX Designer who enjoys creating clean, simple, and user-friendly digital experiences. I focus on understanding user needs and turning ideas into intuitive designs that are both visually appealing and easy to use.
            </p>

            <p className="text-lg font-medium text-[#364e6b] duration-300">
              I have experience designing responsive web and mobile interfaces, creating wireframes, prototypes, and user flows using tools like Figma. I always try to keep my designs practical, consistent, and focused on making the overall user experience better.
            </p>

            {/* <p className="text-lg text-slate-300 leading-relaxed">
              Beyond coding, I enjoy sharing knowledge through mentoring junior developers, contributing to open-source projects, and staying updated with the latest trends in web development.
            </p> */}

            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#1e3550] text-[#B9D7EA] rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-semibold cursor-pointer"
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
                  className="rounded-xl p-6 bg-[#B9D7EA] "
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#1e3550] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111e2e] mb-2 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-[#364e6b] transition-colors duration-300">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
