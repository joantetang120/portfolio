import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useMode } from '../hooks/useModeContext';
import ImagePreview from './ImagePreview';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { colors } = useMode();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);

  const images = project?.images || (project?.image ? [project.image] : []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    setIsImagePreviewOpen(true);
  };

  const handleImagePreviewClose = () => {
    setIsImagePreviewOpen(false);
  };

  const handleImagePreviewNavigate = (direction) => {
    if (direction === 'next') {
      nextImage();
    } else {
      prevImage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isImagePreviewOpen) {
          setIsImagePreviewOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isImagePreviewOpen]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full glass-strong hover:bg-white/10 transition-colors"
                style={{ color: colors.primary }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Image Gallery */}
              <div className="relative h-[400px] bg-dark-bg/50 rounded-t-3xl overflow-hidden group/image">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleImageClick}
                  whileHover={{ scale: 1.02 }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />

                {/* Click to Expand Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                  onClick={handleImageClick}
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="px-6 py-3 rounded-full glass-strong font-semibold flex items-center space-x-2"
                    style={{ color: colors.primary }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    <span>Click to Expand</span>
                  </motion.div>
                </motion.div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-strong hover:bg-white/10 transition-colors"
                      style={{ color: colors.primary }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-strong hover:bg-white/10 transition-colors"
                      style={{ color: colors.primary }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-strong">
                    <span className="text-sm font-medium">
                      {currentImageIndex + 1} / {images.length}
                    </span>
                  </div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 left-4 px-4 py-2 rounded-full glass-strong text-sm font-semibold"
                    style={{ color: colors.primary }}
                  >
                    Featured Project
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title and Links */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl md:text-4xl font-bold mb-2"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {project.title}
                    </motion.h2>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3 ml-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full glass-strong hover:bg-white/10 transition-colors"
                        style={{ color: colors.primary }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full glass-strong hover:bg-white/10 transition-colors"
                        style={{ color: colors.primary }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-lg font-semibold mb-3" style={{ color: colors.primary }}>
                    About This Project
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {project.description}
                  </p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 rounded-full glass text-sm font-medium"
                        style={{ color: colors.primary }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Image Thumbnails */}
                {images.length > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>
                      Gallery
                    </h3>
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                      {images.map((image, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setCurrentImageIndex(index)}
                          onDoubleClick={() => {
                            setCurrentImageIndex(index);
                            setIsImagePreviewOpen(true);
                          }}
                          className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer ${
                            currentImageIndex === index ? 'ring-2' : 'opacity-60 hover:opacity-100'
                          }`}
                          style={{
                            ringColor: currentImageIndex === index ? colors.primary : 'transparent',
                          }}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Bottom Accent */}
              <div
                className="h-1 rounded-b-3xl"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                }}
              />
            </motion.div>
          </div>

          {/* Image Preview */}
          <ImagePreview
            images={images}
            currentIndex={currentImageIndex}
            isOpen={isImagePreviewOpen}
            onClose={handleImagePreviewClose}
            onNavigate={handleImagePreviewNavigate}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
