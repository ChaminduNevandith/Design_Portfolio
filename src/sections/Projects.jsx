import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { uiuxDesigns } from "../data/portfolioData";

const Projects = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-20 bg-[#B9D7EA]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.18em] text-[#364E6B]/65 mb-3">
            Selected Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#364E6B]">
            UI/UX Projects
          </h2>

          <p className="max-w-xl mx-auto mt-4 text-sm md:text-base leading-6 text-[#364E6B]/70">
            A selection of web and mobile interfaces designed with simplicity,
            usability, and user experience in mind.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {uiuxDesigns.map((design, index) => (
            <motion.article
              key={design.id || index}
              variants={cardVariants}
              whileHover={{
                y: -6,
              }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#364E6B]/10 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-[220px] overflow-hidden bg-[#DCEBF4]">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />

                {/* Category */}
                {design.category && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#364E6B] text-xs font-semibold shadow-sm">
                    {design.category}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Title */}
                <h3 className="text-xl font-bold text-[#364E6B] mb-2">
                  {design.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-[#364E6B]/70 line-clamp-3">
                  {design.description}
                </p>

                {/* Tools */}
                {design.tools?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {design.tools.slice(0, 3).map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-[#B9D7EA]/45 text-[#364E6B] text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#364E6B]/10">
                  <span className="text-xs text-[#364E6B]/55">
                    UI/UX Design
                  </span>

                  <a
                    href={design.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-[#364E6B] hover:gap-2.5 transition-all duration-300"
                  >
                    View Project

                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;