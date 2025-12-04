import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Sparkles, Filter } from 'lucide-react';
import { useMode } from '../hooks/useModeContext';
import { content } from '../data/content';
import GradientText from './GradientText';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const { mode, colors } = useMode();
  const projects = content[mode].projects;
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured === (filter === 'featured'));

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
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
              <span className="text-sm font-medium">My work</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <GradientText>
                Featured Projects
              </GradientText>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              {mode === 'developer' 
                ? 'Innovative solutions built with cutting-edge technologies'
                : 'Security assessments and penetration testing engagements'}
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center space-x-4 mb-12"
          >
            <Filter className="w-5 h-5 text-gray-400" />
            {['all', 'featured', 'other'].map((filterOption) => (
              <motion.button
                key={filterOption}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === filterOption
                    ? 'glass-strong'
                    : 'glass hover:glass-strong'
                }`}
                style={{
                  color: filter === filterOption ? colors.primary : '#9ca3af'
                }}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => handleProjectClick(project)}
                  className="glass-strong rounded-2xl overflow-hidden group cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 right-4 px-3 py-1 rounded-full glass-strong text-xs font-semibold"
                        style={{ color: colors.primary }}
                      >
                        Featured
                      </motion.div>
                    )}

                    {/* Click to view overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 rounded-full glass-strong font-semibold"
                        style={{ color: colors.primary }}
                      >
                        View Details
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 text-xs rounded-full glass"
                          style={{ color: colors.primary }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`
                    }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View More */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">No projects found in this category</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
