import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useMode } from '../hooks/useModeContext';

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();
  const { colors } = useMode();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
        scaleX: scrollProgress / 100,
      }}
      initial={{ scaleX: 0 }}
    />
  );
};

export default ScrollProgress;
