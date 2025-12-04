import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from '../hooks/useModeContext';

const GradientText = ({ children, className = '', animate = false }) => {
  const { colors, mode } = useMode();

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={mode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`${className} ${animate ? 'animate-pulse-slow' : ''}`}
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'inline-block'
        }}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
};

export default GradientText;
