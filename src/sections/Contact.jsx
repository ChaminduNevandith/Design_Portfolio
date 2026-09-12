import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Code, User, Share2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);


  useEffect(() => {
    emailjs.init('dOJbBP5FiJqcZi8La'); 
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
      const currentTime = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      await emailjs.send(
        'service_1pdty5a', 
        'template_wlrkfsj', 
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: currentTime,
        }
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: contactInfo.phone,
      link: `tel:${contactInfo.phone}`,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: contactInfo.location,
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
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
            Let's Work <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto transition-colors duration-300">
            Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create something amazing.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={method.link}
                  className="flex items-start gap-4 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300 group border"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(to bottom right, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%)'
                      : 'linear-gradient(to bottom right, rgb(241, 245, 250) 0%, rgb(250, 250, 250) 100%)',
                    borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)',
                    transition: 'all 300ms'
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all">
                    <Icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-semibold mb-1 transition-colors duration-300">{method.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div 
              variants={itemVariants} 
              className="pt-6 transition-colors duration-300 border-t"
              style={{
                borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)'
              }}
            >
              <h3 className="text-slate-900 dark:text-white font-semibold mb-4 transition-colors duration-300">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ChaminduNevandith"
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                    color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)'
                  }}
                >
                  <Code size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chamindu-nevandith-1691b9278/"
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
                    color: theme === 'dark' ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)'
                  }}
                >
                  <User size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800/50 border rounded-lg placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-slate-900 dark:text-white"
                  style={{
                    borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)'
                  }}
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800/50 border rounded-lg placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-slate-900 dark:text-white"
                  style={{
                    borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)'
                  }}
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800/50 border rounded-lg placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-slate-900 dark:text-white"
                  style={{
                    borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)'
                  }}
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800/50 border rounded-lg placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-slate-900 dark:text-white resize-none"
                  style={{
                    borderColor: theme === 'dark' ? 'rgb(51, 65, 85)' : 'rgb(203, 213, 225)'
                  }}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/50 text-green-400 rounded-lg text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg text-sm"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
