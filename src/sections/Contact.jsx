import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Code,
  User,
} from "lucide-react";

import emailjs from "@emailjs/browser";
import { contactInfo } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    emailjs.init("dOJbBP5FiJqcZi8La");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const currentTime = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      await emailjs.send(
        "service_1pdty5a",
        "template_wlrkfsj",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: currentTime,
        }
      );

      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Email send failed:", error);

      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: contactInfo.phone,
      link: `tel:${contactInfo.phone}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: contactInfo.location,
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[#B9D7EA] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#364E6B] mb-4">
            Let's Work Together
          </h2>

          <p className="text-[#364E6B]/70 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear
            from you. Reach out and let's create something meaningful.
          </p>

          <div className="w-20 h-1 bg-[#364E6B] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={method.link}
                  className="flex items-start gap-4 p-6 rounded-xl border border-[#364E6B]/15 bg-white/70 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#B9D7EA] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#364E6B] transition-all duration-300">
                    <Icon
                      className="text-[#364E6B] group-hover:text-white transition-colors duration-300"
                      size={24}
                    />
                  </div>

                  <div>
                    <h3 className="text-[#364E6B] font-semibold mb-1">
                      {method.title}
                    </h3>

                    <p className="text-[#364E6B]/70">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#364E6B]/20"
            >
              <h3 className="text-[#364E6B] font-semibold mb-4">
                Follow Me
              </h3>

              <div className="flex gap-4">

                {/* GitHub */}
                <a
                  href="https://github.com/ChaminduNevandith"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/70 text-[#364E6B] hover:bg-[#364E6B] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Code size={24} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/chamindu-nevandith-1691b9278/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/70 text-[#364E6B] hover:bg-[#364E6B] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <User size={24} />
                </a>

              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/60 border border-[#364E6B]/10 rounded-2xl p-6 md:p-8 shadow-sm"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#364E6B] mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/80 border border-[#364E6B]/20 rounded-lg placeholder-[#364E6B]/40 focus:outline-none focus:border-[#364E6B] focus:ring-2 focus:ring-[#364E6B]/10 transition-all duration-300 text-[#364E6B]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#364E6B] mb-2"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/80 border border-[#364E6B]/20 rounded-lg placeholder-[#364E6B]/40 focus:outline-none focus:border-[#364E6B] focus:ring-2 focus:ring-[#364E6B]/10 transition-all duration-300 text-[#364E6B]"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#364E6B] mb-2"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-white/80 border border-[#364E6B]/20 rounded-lg placeholder-[#364E6B]/40 focus:outline-none focus:border-[#364E6B] focus:ring-2 focus:ring-[#364E6B]/10 transition-all duration-300 text-[#364E6B]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#364E6B] mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/80 border border-[#364E6B]/20 rounded-lg placeholder-[#364E6B]/40 focus:outline-none focus:border-[#364E6B] focus:ring-2 focus:ring-[#364E6B]/10 transition-all duration-300 text-[#364E6B] resize-none"
                />
              </div>

              {/* Success */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="p-4 bg-green-500/10 border border-green-500/40 text-green-700 rounded-lg text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {/* Error */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="p-4 bg-red-500/10 border border-red-500/40 text-red-600 rounded-lg text-sm"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}

              {/* Submit */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#364E6B] hover:bg-[#2c4058] disabled:opacity-60 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                <Send size={20} />

                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;