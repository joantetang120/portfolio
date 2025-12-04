import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from '../hooks/useModeContext';

const EasterEgg = () => {
  const [showEgg, setShowEgg] = useState(false);
  const [konami, setKonami] = useState([]);
  const { colors, mode } = useMode();

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newKonami = [...konami, e.key];
      setKonami(newKonami.slice(-10));

      if (newKonami.slice(-10).join(',') === konamiCode.join(',')) {
        setShowEgg(true);
        setTimeout(() => setShowEgg(false), 5000);
        setKonami([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konami]);

  // Secret click counter
  const [clicks, setClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.shiftKey && e.altKey) {
        setClicks(prev => prev + 1);
        if (clicks >= 4) {
          setShowSecret(true);
          setTimeout(() => setShowSecret(false), 3000);
          setClicks(0);
        }
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [clicks]);

  return (
    <>
      {/* Konami Code Easter Egg */}
      <AnimatePresence>
        {showEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              className="glass-strong rounded-3xl p-12 text-center"
              animate={{
                boxShadow: [
                  `0 0 20px ${colors.primary}`,
                  `0 0 60px ${colors.primary}`,
                  `0 0 20px ${colors.primary}`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="text-8xl mb-4"
              >
                {mode === 'developer' ? '🚀' : '🔐'}
              </motion.div>
              <h2
                className="text-4xl font-bold mb-2"
                style={{ color: colors.primary }}
              >
                You found the secret!
              </h2>
              <p className="text-gray-400">
                {mode === 'developer' 
                  ? 'You\'re a true code ninja! 🥷'
                  : 'Elite hacker detected! 💀'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Click Easter Egg */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 right-8 z-50 glass-strong rounded-2xl p-6 max-w-sm"
          >
            <p className="text-sm" style={{ color: colors.primary }}>
              🎉 Secret unlocked! You discovered the hidden combo: Shift + Alt + Click (5x)
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Matrix Rain Easter Egg (always visible but subtle) */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <MatrixRain color={colors.primary} />
      </div>
    </>
  );
};

// Matrix Rain Component
const MatrixRain = ({ color }) => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, [color]);

  return <canvas id="matrix-canvas" className="absolute inset-0" />;
};

export default EasterEgg;
