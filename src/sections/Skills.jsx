import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiFigma,
  SiCanva,
} from 'react-icons/si';
import { Code, Lock, Globe, Smartphone, Palette, Lightbulb, Monitor } from 'lucide-react';

const Skills = () => {
  const { theme } = useTheme();

  const renderTechIcon = (name) => {
    const iconProps = {
      size: 48,
      className: "text-blue-500 dark:text-blue-400"
    };

    const iconMap = {
      "React": <SiReact {...iconProps} />,
      "JavaScript": <SiJavascript {...iconProps} />,
      "Tailwind CSS": <SiTailwindcss {...iconProps} />,
      "HTML/CSS": <SiHtml5 {...iconProps} />,
      "Framer Motion": <SiFramer {...iconProps} />,
      "Next.js": <SiNextdotjs {...iconProps} />,
      "Node.js": <SiNodedotjs {...iconProps} />,
      "Express": <SiExpress {...iconProps} />,
      "Python": <SiPython {...iconProps} />,
      "MongoDB": <SiMongodb {...iconProps} />,
      "MySQL": <SiMysql {...iconProps} />,
      "Firebase": <SiFirebase {...iconProps} />,
      "Git/GitHub": <SiGithub {...iconProps} />,
      "VS Code": <Monitor {...iconProps} />,
      "Figma": <SiFigma {...iconProps} />,
      "Canva": <SiCanva {...iconProps} />,
      "REST APIs": <Code {...iconProps} />,
      "Authentication": <Lock {...iconProps} />,
      "Full-Stack Development": <Globe {...iconProps} />,
      "Responsive Design": <Smartphone {...iconProps} />,
      "UI/UX Design": <Palette {...iconProps} />,
      "Problem Solving": <Lightbulb {...iconProps} />,
    };

    return iconMap[name] || <span className="text-3xl">⚙️</span>;
  };

  const skillCategories = [
    { title: "Frontend", skills: skills.frontend },
    { title: "Backend", skills: skills.backend },
    { title: "Database", skills: skills.database },
    { title: "Tools & DevOps", skills: skills.tools },
    { title: "Other", skills: skills.other },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
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
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto transition-colors duration-300">
            Technologies and frameworks I use to build modern, scalable applications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, y: -5 }}
                    className="group rounded-xl p-6 border flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300"
                    style={{
                      background: theme === 'dark'
                        ? 'linear-gradient(to bottom right, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%)'
                        : 'linear-gradient(to bottom right, rgb(241, 245, 250) 0%, rgb(250, 250, 250) 100%)',
                      borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)',
                    }}
                  >
                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                      {renderTechIcon(skill.name)}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors duration-300">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl p-8 border"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)'
              : 'linear-gradient(135deg, rgba(191, 219, 254, 0.6) 0%, rgba(221, 214, 254, 0.6) 100%)',
            borderColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)',
            transition: 'all 300ms'
          }}
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Always Learning</h3>
          <p className="text-slate-700 dark:text-slate-400 text-s transition-colors duration-300">
           I’m constantly exploring new technologies to stay at the forefront of software development. Currently, I’m focusing on AI and Machine Learning, especially fine-tuning models, AI integration, and building intelligent applications using modern ML technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
