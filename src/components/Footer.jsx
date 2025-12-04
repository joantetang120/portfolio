import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { useMode } from '../hooks/useModeContext';

const Footer = () => {
  const { colors } = useMode();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-gray-400"
          >
            <span>© 2024 Made</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              {/* <Heart className="w-4 h-4" style={{ color: colors.primary }} fill="currentColor" /> */}
            </motion.div>
            <span>by Tetang Jerry</span>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="glass-strong p-3 rounded-full"
            style={{ color: colors.primary }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
