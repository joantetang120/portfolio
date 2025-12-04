import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useMode } from '../hooks/useModeContext';

const Cursor = () => {
  const { x, y } = useMousePosition();
  const { colors } = useMode();
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          backgroundColor: colors.primary,
        }}
        animate={{
          x: x - 8,
          y: y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor Trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-40 border-2"
        style={{
          borderColor: colors.primary,
        }}
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isPointer ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  );
};

export default Cursor;
