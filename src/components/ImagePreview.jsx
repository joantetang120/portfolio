import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';
import { useMode } from '../hooks/useModeContext';

const ImagePreview = ({ images, currentIndex, isOpen, onClose, onNavigate }) => {
  const { colors } = useMode();
  const [zoom, setZoom] = useState(1);

  if (!images || images.length === 0) return null;

  const handlePrevious = (e) => {
    e.stopPropagation();
    onNavigate('prev');
    setZoom(1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onNavigate('next');
    setZoom(1);
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleClose = () => {
    setZoom(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100]"
          />

          {/* Full Screen Image Viewer */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className="absolute top-6 right-6 p-3 rounded-full glass-strong hover:bg-white/20 transition-colors z-10"
              style={{ color: colors.primary }}
            >
              <X className="w-7 h-7" />
            </motion.button>

            {/* Zoom Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute top-6 left-6 flex items-center space-x-2 glass-strong rounded-full p-2 z-10"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleZoomOut}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                style={{ color: colors.primary }}
                disabled={zoom <= 0.5}
              >
                <ZoomOut className="w-5 h-5" />
              </motion.button>
              <span className="text-sm font-medium px-2">{Math.round(zoom * 100)}%</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleZoomIn}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                style={{ color: colors.primary }}
                disabled={zoom >= 3}
              >
                <ZoomIn className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full glass-strong z-10"
            >
              <span className="text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </span>
            </motion.div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrevious}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full glass-strong hover:bg-white/20 transition-colors z-10"
                  style={{ color: colors.primary }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full glass-strong hover:bg-white/20 transition-colors z-10"
                  style={{ color: colors.primary }}
                >
                  <ChevronRight className="w-8 h-8" />
                </motion.button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={images[currentIndex]}
                alt={`Preview ${currentIndex + 1}`}
                className="w-full h-full object-contain rounded-lg"
                style={{
                  transform: `scale(${zoom})`,
                  transition: 'transform 0.3s ease',
                  maxHeight: '90vh',
                  maxWidth: '90vw',
                }}
                drag={zoom > 1}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={0.1}
              />
            </motion.div>

            {/* Keyboard Hints */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-6 right-6 glass-strong rounded-lg p-3 text-xs text-gray-400 z-10"
            >
              <div className="flex items-center space-x-4">
                <span>← → Navigate</span>
                <span>ESC Close</span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ImagePreview;
