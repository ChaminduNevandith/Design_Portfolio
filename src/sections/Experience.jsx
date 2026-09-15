import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  Building2,
  ArrowDown,
} from "lucide-react";

import { experience } from "../data/portfolioData";

const Experience = () => {
  const rotations = [-2, 1.5, -1.5, 2];

  const cardColors = [
    "#DCEBF4",
    "#C9E0EE",
    "#E7F1F7",
    "#D5E7F1",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-12 md:py-20 bg-[#B9D7EA] overflow-hidden"
    >

       {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>


      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#364e6b] mb-3">
            My Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#111e2e]">
            Work Experience
          </h2>

          <p className="max-w-xl mx-auto mt-4 text-sm md:text-base text-[#364e6b]/90 leading-6">
            A few roles and experiences that helped shape my journey as a
            UI/UX designer.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 items-start"
        >
          {experience.map((job, index) => (
            <motion.div
              key={job.id || index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                rotate: 0,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="rounded-[18px] border border-[#364E6B]/15 shadow-[0_8px_18px_rgba(54,78,107,0.12)] p-6 md:p-7 cursor-default"
              style={{
                backgroundColor:
                  cardColors[index % cardColors.length],
                rotate: `${rotations[index % rotations.length]}deg`,
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full border border-[#364E6B]/20 bg-white/60 flex items-center justify-center mb-5">
                <Briefcase
                  size={25}
                  strokeWidth={1.8}
                  className="text-[#364E6B]"
                />
              </div>

              {/* Job Title */}
              <h3 className="text-2xl font-bold leading-tight text-[#111e2e] mb-3">
                {job.title}
              </h3>

              {/* Company */}
              <div className="flex items-center gap-2 text-[#364E6B] font-semibold mb-4">
                <Building2 size={17} />

                <span className="text-sm">
                  {job.company}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#364E6B]/80 text-sm md:text-[15px] leading-6 mb-5">
                {job.description}
              </p>

              {/* Footer */}
              <div className="pt-4 border-t border-[#364E6B]/15 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#364E6B]/70">
                  <Calendar size={15} />

                  <span>
                    {job.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#364E6B]/70">
                  <MapPin size={15} />

                  <span>
                    {job.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Continues */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col items-center mt-14"
        >
          {/* Connector Line */}
          <div className="w-px h-10 bg-[#364E6B]/30 mb-3" />

          {/* Animated Arrow */}
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-11 h-11 rounded-full bg-[#111e2e]/90 flex items-center justify-center shadow-md"
          >
            <ArrowDown
              size={20}
              strokeWidth={2}
              className="text-[#B9D7EA]"
            />
          </motion.div>

          {/* Text */}
          <p className="mt-3 text-sm font-medium tracking-wide text-[#364E6B]/70">
            The journey continues...
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;