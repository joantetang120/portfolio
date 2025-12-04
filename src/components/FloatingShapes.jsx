import { motion } from 'framer-motion';
import { useMode } from '../hooks/useModeContext';

const FloatingShapes = () => {
  const { colors } = useMode();

  const shapes = [
    { size: 400, duration: 20, delay: 0, x: '10%', y: '20%' },
    { size: 300, duration: 25, delay: 2, x: '80%', y: '60%' },
    { size: 350, duration: 22, delay: 4, x: '60%', y: '10%' },
    { size: 250, duration: 18, delay: 1, x: '20%', y: '70%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, ${colors.primary}20, transparent)`,
          }}
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -50, 0, 50, 0],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
