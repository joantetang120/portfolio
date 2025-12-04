import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Code2, Database, Cloud, Lock, Terminal, Cpu, Zap, Shield, Bug, Search, Key, Skull } from 'lucide-react';
import { useMode } from '../hooks/useModeContext';
import { content } from '../data/content';
import GradientText from './GradientText';

const Skills = () => {
  const { mode, colors } = useMode();
  const skills = content[mode].skills;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
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
              <span className="text-sm font-medium">My expertise</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <GradientText>
                Skills & Technologies
              </GradientText>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Constantly learning and mastering new technologies to stay ahead
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill, index) => {
              const SkillIcon = skill.iconComponent || Code2;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                  animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ 
                    delay: 0.05 * index, 
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -10,
                    rotateY: 10,
                    rotateX: 5,
                  }}
                  className="glass-strong rounded-2xl p-6 relative overflow-hidden group cursor-pointer aspect-square flex flex-col items-center justify-center"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      opacity: 0
                    }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Rotating Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2"
                    style={{
                      borderColor: colors.primary,
                      opacity: 0
                    }}
                    animate={{
                      rotate: [0, 360],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative z-10 mb-3"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  >
                    <SkillIcon 
                      className="w-10 h-10 md:w-12 md:h-12" 
                      style={{ color: colors.primary }}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-sm md:text-base font-semibold text-center relative z-10 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>

                  {/* Particles on Hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                          background: colors.primary,
                          left: '50%',
                          top: '50%',
                        }}
                        animate={{
                          x: [0, (Math.cos(i * 60 * Math.PI / 180) * 40)],
                          y: [0, (Math.sin(i * 60 * Math.PI / 180) * 40)],
                          opacity: [1, 0],
                          scale: [0, 1.5]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                    style={{
                      background: `radial-gradient(circle, ${colors.primary}40, transparent)`
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Want to see these skills in action?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-semibold glass-strong hover:glass transition-all"
              style={{ color: colors.primary }}
            >
              View My Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
