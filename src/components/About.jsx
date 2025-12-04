import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useMode } from '../hooks/useModeContext';
import { content } from '../data/content';
import GradientText from './GradientText';

const About = () => {
  const { mode, colors } = useMode();
  const aboutContent = content[mode].about;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/30 to-dark-bg" />

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
              <span className="text-sm font-medium">Get to know me</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <GradientText>
                {aboutContent.title}
              </GradientText>
            </motion.h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {aboutContent.description}
              </p>

              <div className="space-y-4">
                {aboutContent.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3 group"
                  >
                    <CheckCircle2
                      className="w-6 h-6 flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                      style={{ color: colors.primary }}
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Stats/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="glass-strong rounded-3xl p-8 relative overflow-hidden group">
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    opacity: 0.1
                  }}
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Stats Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-6">
                  {[
                    { label: 'Years Experience', value: mode === 'developer' ? '2+' : '2+' },
                    { label: 'Projects Completed', value: mode === 'developer' ? '10+' : '10+' },
                    { label: 'Happy Clients', value: mode === 'developer' ? '10+' : '10+' },
                    { label: 'Awards Won', value: mode === 'developer' ? '15+' : '10+' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="text-center p-4 rounded-xl glass hover:glass-strong transition-all cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-3xl md:text-4xl font-bold mb-2"
                        style={{ color: colors.primary }}
                        animate={{
                          textShadow: [
                            `0 0 10px ${colors.primary}`,
                            `0 0 20px ${colors.primary}`,
                            `0 0 10px ${colors.primary}`,
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl"
                  style={{ background: colors.primary, opacity: 0.1 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
