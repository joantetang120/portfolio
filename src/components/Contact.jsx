import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter, Send, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useMode } from '../hooks/useModeContext';
import { content } from '../data/content';
import GradientText from './GradientText';

const Contact = () => {
  const { mode, colors } = useMode();
  const contactContent = content.contact;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_hf43a46',
        'template_yhzngzq',
        {
          title: 'Portfolio Contact',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'ZkIVS58rnCbNYqd4p'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, url: contactContent.social.github, label: 'GitHub' },
    { icon: Linkedin, url: contactContent.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: contactContent.social.twitter, label: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-accent/20 to-dark-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.primary }} />
              <span className="text-sm font-medium">Get in touch</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <GradientText>
                {contactContent.title}
              </GradientText>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              {contactContent.description}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              {/* Email Card */}
              <motion.a
                href={`mailto:${contactContent.email}`}
                whileHover={{ scale: 1.02, y: -5 }}
                className="block glass-strong rounded-2xl p-6 group"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="p-4 rounded-xl glass"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: colors.primary }}
                  >
                    <Mail className="w-8 h-8" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email me at</p>
                    <p className="text-lg font-semibold group-hover:text-white transition-colors">
                      {contactContent.email}
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-strong rounded-xl p-6 flex flex-col items-center justify-center space-y-2 group"
                    >
                      <social.icon
                        className="w-8 h-8 transition-colors"
                        style={{ color: colors.primary }}
                      />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-strong rounded-2xl p-8"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass focus:glass-strong outline-none transition-all"
                    style={{
                      borderColor: colors.primary,
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderOpacity: 0,
                    }}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass focus:glass-strong outline-none transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass focus:glass-strong outline-none transition-all resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    color: '#000',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <p className="text-sm text-green-400 mt-2">
                    Message sent successfully. Thank you!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-400 mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
