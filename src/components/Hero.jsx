import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useMode } from '../hooks/useModeContext';
import { content } from '../data/content';
import ParticleBackground from './ParticleBackground';
import FloatingShapes from './FloatingShapes';
import GradientText from './GradientText';
import TypewriterText from './TypewriterText';

const Hero = () => {
  const { mode, colors } = useMode();
  const heroContent = content[mode].hero;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <FloatingShapes />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4" style={{ color: colors.primary }} />
            <span className="text-sm font-medium">Available for opportunities</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl mb-4">
              Hi, I'm{' '}
              <GradientText className="inline-block">
                Tetang Jerry
              </GradientText>
              {' '}a
            </span>
            <GradientText className="block min-h-[1.2em]" animate>
              <TypewriterText words={heroContent.typewriterWords} />
            </GradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-light"
          >
            {heroContent.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            {heroContent.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${colors.primary}` }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all relative overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                color: '#000'
              }}
            >
              <span className="relative z-10">{heroContent.cta}</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-semibold text-lg glass hover:glass-strong transition-all"
              style={{ color: colors.primary }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8" style={{ color: colors.primary }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
