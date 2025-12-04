import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';
import { useMode } from '../hooks/useModeContext';
import ProfileModal from './ProfileModal';

const ProfileEasterEgg = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { colors } = useMode();

  return (
    <>
      {/* Bouncing Easter Egg Button */}
      <motion.div
        className="fixed bottom-8 left-8 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      >
        {/* Pulsing Rings */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `2px solid ${colors.primary}`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut'
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `2px solid ${colors.secondary}`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 0, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.5
          }}
        />

        {/* Main Button */}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="relative w-16 h-16 rounded-full glass-strong flex items-center justify-center overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
          style={{
            boxShadow: `0 0 30px ${colors.primary}60, 0 0 60px ${colors.secondary}30`
          }}
        >
          {/* Rotating Background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`
            }}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }}
          />

          {/* Icon */}
          <motion.div
            className="relative z-10"
            animate={{
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <User className="w-7 h-7" style={{ color: colors.primary }} />
          </motion.div>

          {/* Sparkle Effect */}
          <motion.div
            className="absolute top-0 right-0"
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: colors.secondary }} />
          </motion.div>

          {/* Hover Glow */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: `radial-gradient(circle, ${colors.primary}40, transparent)`
            }}
          />
        </motion.button>

        {/* "Click Me" Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: [0, 1, 1, 0], x: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            times: [0, 0.1, 0.9, 1]
          }}
          className="absolute left-20 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
        >
          <div 
            className="glass px-4 py-2 rounded-full text-sm font-medium"
            style={{ color: colors.primary }}
          >
            Click me! 👋
            <motion.div
              className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2"
              animate={{
                x: [0, -5, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            >
              <div 
                className="w-0 h-0 border-t-4 border-b-4 border-r-8 border-transparent"
                style={{ borderRightColor: colors.primary }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Profile Modal */}
      <ProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ProfileEasterEgg;
