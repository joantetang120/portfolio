import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';
import { useMode } from '../hooks/useModeContext';
import GradientText from './GradientText';

const Timeline = () => {
  const { mode, colors } = useMode();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timelineData = {
    developer: [
      {
        year: '2025-PRESENT',
        title: 'Internship at Maisoft Group.',
        company: 'Maisoft Group.',
        description: 'Internship at Maisoft Group.',
        icon: Rocket,
        type: 'work'
      },
      {
        year: '2024',
        title: 'Got my degree in computer science',
        company: 'GETSMARTER ACADEMY.',
        description: 'Got my degree in computer science',
        icon: Briefcase,
        type: 'education'
      },
      {
        year: '2024',
        title: 'Won 1st place in web dev competition',
        company: 'Getsmarter Academy',
        description: 'Won a 24 hours web dev Hackathon',
        icon: Award,
        type: 'achievement'
      },
      {
        year: '2024',
        title: 'Started my web Dev journey',
        company: 'Getsmarter Academy',
        description: 'Started learning web development',
        icon: Briefcase,
        type: 'education'
      },
      {
        year: '2020',
        title: 'GCE Advanced Level',
        company: 'GBHS Bepanda',
        description: 'Passed GCE Advanced Level',
        icon: GraduationCap,
        type: 'education'
      }
    ],
    hacker: [
          {
        year: '2025-PRESENT',
        title: 'Contributed an ethical hacking course.',
        company: 'Maisoft Group.',
        description: 'Contributed in an ethical hacking course on web security and created a vulnerable website for it VULN-MARKET.',
        icon: Rocket,
        type: 'work'
      },
       {
        year: '2024',
        title: 'Got my degree in ethical hacking',
        company: 'GETSMARTER ACADEMY.',
        description: 'Got my degree in ethical hacking from Getsmarter Academy',
        icon: Briefcase,
        type: 'education'
      },
     {
        year: '2025',
        title: 'Won 1st place in a Capture the Flag competition',
        company: 'HackFest 2025',
        description: 'Won a Capture the Flag competition organized by Hack the Box',
        icon: Award,
        type: 'achievement'
      },
  {
        year: '2024',
        title: 'Won 1st place in a Capture the Flag competition',
        company: 'Getsmarter Academy',
        description: 'Won a Capture the Flag competition',
        icon: Award,
        type: 'achievement'
      },
    {
        year: '2024',
        title: 'Started my ethical hacking journey',
        company: 'Getsmarter Academy',
        description: 'Started learning ethical hacking',
        icon: Briefcase,
        type: 'education'
      },
      {
        year: '2020',
        title: 'GCE Advanced Level',
        company: 'GBHS Bepanda',
        description: 'Passed GCE Advanced Level',
        icon: GraduationCap,
        type: 'education'
      }
    ]
  };

  const timeline = timelineData[mode];

  return (
    <section id="timeline" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/30 to-dark-bg" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.primary }} />
              <span className="text-sm font-medium">My journey</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <GradientText>
                Career Timeline
              </GradientText>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              The path that shaped my expertise
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block"
              style={{
                background: `linear-gradient(180deg, ${colors.primary}, ${colors.secondary})`,
                transformOrigin: 'top'
              }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="glass-strong rounded-2xl p-6 relative overflow-hidden group"
                      >
                        {/* Glow Effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`
                          }}
                        />

                        <div className="relative z-10">
                          {/* Year Badge */}
                          <motion.div
                            className="inline-block px-4 py-1 rounded-full glass mb-3 text-sm font-bold"
                            style={{ color: colors.primary }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {item.year}
                          </motion.div>

                          {/* Title */}
                          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                            {item.title}
                          </h3>

                          {/* Company */}
                          <p className="text-gray-400 mb-3 font-medium">
                            {item.company}
                          </p>

                          {/* Description */}
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Corner Accent */}
                        <motion.div
                          className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"
                          style={{ background: colors.primary }}
                        />
                      </motion.div>
                    </div>

                    {/* Center Icon - Positioned at center regardless of card position */}
                    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 hidden md:flex items-center justify-center pointer-events-none z-10">
                      <motion.div
                        className="w-16 h-16 rounded-full glass-strong flex items-center justify-center pointer-events-auto"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={inView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.15, type: 'spring' }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        style={{
                          boxShadow: `0 0 20px ${colors.primary}40`
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: colors.primary }} />
                      </motion.div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full glass-strong mb-4">
                      <Icon className="w-6 h-6" style={{ color: colors.primary }} />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
            </div>

            {/* End Marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.5, type: 'spring' }}
              className="hidden md:flex items-center justify-center mx-auto mt-12"
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background: colors.primary,
                  boxShadow: `0 0 20px ${colors.primary}`
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
