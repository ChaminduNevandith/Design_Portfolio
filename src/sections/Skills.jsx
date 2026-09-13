import React from "react";
import { motion } from "framer-motion";
import { SiFigma, SiCanva } from "react-icons/si";

import {
  Layout,
  Smartphone,
  Component,
  MousePointerClick,
  Workflow,
  Palette,
  Search,
  Users,
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Figma", icon: SiFigma },
    { name: "Canva", icon: SiCanva },
    { name: "UI Design", icon: Palette },
    { name: "Responsive Design", icon: Smartphone },
    { name: "Auto Layout", icon: Layout },
    { name: "Components", icon: Component },
    { name: "Prototyping", icon: MousePointerClick },
    { name: "User Flows", icon: Workflow },
    { name: "User Research", icon: Search },
    { name: "Usability Testing", icon: Users },
  ];

  return (
    <section id="skills" className="py-12 bg-[#B9D7EA]">

      
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#364E6B]/60 mb-2">
            What I Work With
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#364E6B]">
            Skills & Tools
          </h2>

          <p className="text-[#364E6B]/70 mt-3 text-sm md:text-base max-w-xl mx-auto">
            A few tools and design skills I use to create clean and
            user-friendly digital experiences.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                className="group flex items-center gap-2.5 bg-white/70 hover:bg-[#364E6B] border border-white/80 rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
              >
                <Icon
                  size={19}
                  className="text-[#364E6B] group-hover:text-[#B9D7EA] transition-colors duration-300"
                />

                <span className="text-sm font-medium text-[#364E6B] group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;