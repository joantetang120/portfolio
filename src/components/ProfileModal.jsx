import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Twitter, Mail, MapPin, Coffee, Code, Heart } from 'lucide-react';
import { useMode } from '../hooks/useModeContext';
import portraitImage from '/assets/portrait-african-american-athlete-having-break.jpg';

const ProfileModal = ({ isOpen, onClose }) => {
  const { colors, mode } = useMode();

  const qualities = mode === 'developer' 
    ? [
        { icon: Code, text: 'Clean Code Enthusiast' },
        { icon: Coffee, text: 'Coffee-Driven Developer' },
        { icon: Heart, text: 'Passionate Problem Solver' },
        { icon: MapPin, text: 'Remote-First Advocate' }
      ]
    : [
        { icon: Code, text: 'Security-First Mindset' },
        { icon: Coffee, text: 'Night Owl Hacker' },
        { icon: Heart, text: 'Ethical & Responsible' },
        { icon: MapPin, text: 'Global Bug Hunter' }
      ];

  const socials = [
    { icon: Github, url: 'https://github.com', label: 'GitHub', color: '#fff' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: '#0077b5' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter', color: '#1da1f2' },
    { icon: Mail, url: 'mailto:hello@example.com', label: 'Email', color: colors.primary }
  ];

  const aboutText = mode === 'developer'
    ? "Hey there! 👋 I'm a passionate developer who loves crafting beautiful, functional web experiences. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee while debugging. I believe in writing clean code, building scalable solutions, and making the web a better place, one commit at a time."
    : "Greetings! 🔒 I'm an ethical hacker dedicated to making the digital world safer. My mission is to find vulnerabilities before the bad guys do. With certifications like OSCP and CEH, I've helped numerous organizations strengthen their security posture. When I'm not penetration testing, I'm researching new attack vectors, participating in bug bounty programs, or sharing knowledge with the security community.";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 180 }}
              transition={{ type: 'spring', duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-strong rounded-3xl overflow-hidden"
              style={{
                boxShadow: `0 0 60px ${colors.primary}40, 0 0 100px ${colors.secondary}20`
              }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  opacity: 0.1
                }}
                animate={{
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass flex items-center justify-center"
                style={{ color: colors.primary }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: Image */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <motion.div
                      className="relative rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {/* Image Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl blur-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${colors.primary}60, ${colors.secondary}60)`
                        }}
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      />
                      
                      {/* Image */}
                      <img
                        src={portraitImage}
                        alt="Profile"
                        className="relative z-10 w-full h-auto rounded-2xl"
                        style={{
                          border: `2px solid ${colors.primary}40`
                        }}
                      />

                      {/* Floating Particles */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full"
                          style={{
                            background: colors.primary,
                            left: `${20 + i * 15}%`,
                            top: `${10 + i * 10}%`
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Right: Content */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Title */}
                    <div>
                      <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-2"
                        style={{
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        About Me
                      </motion.h2>
                      <motion.div
                        className="h-1 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </div>

                    {/* About Text */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-300 leading-relaxed text-sm md:text-base"
                    >
                      {aboutText}
                    </motion.p>

                    {/* Qualities */}
                    <div className="grid grid-cols-2 gap-3">
                      {qualities.map((quality, index) => {
                        const QualityIcon = quality.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            whileHover={{ scale: 1.05, x: 5 }}
                            className="flex items-center space-x-2 glass px-3 py-2 rounded-lg"
                          >
                            <QualityIcon 
                              className="w-4 h-4 flex-shrink-0" 
                              style={{ color: colors.primary }} 
                            />
                            <span className="text-xs text-gray-300">{quality.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Social Links */}
                    <div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-sm text-gray-400 mb-3"
                      >
                        Let's connect:
                      </motion.p>
                      <div className="flex space-x-3">
                        {socials.map((social, index) => {
                          const SocialIcon = social.icon;
                          return (
                            <motion.a
                              key={index}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.1 + index * 0.1, type: 'spring' }}
                              whileHover={{ 
                                scale: 1.2, 
                                y: -5,
                                boxShadow: `0 0 20px ${colors.primary}60`
                              }}
                              whileTap={{ scale: 0.9 }}
                              className="w-12 h-12 rounded-full glass flex items-center justify-center"
                              style={{ color: colors.primary }}
                            >
                              <SocialIcon className="w-5 h-5" />
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Glow */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-32 blur-3xl"
                style={{
                  background: `linear-gradient(180deg, transparent, ${colors.primary}20)`
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
