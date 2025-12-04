import { createContext, useContext, useState, useEffect } from 'react';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('developer');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleMode = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    setIsTransitioning(true);
    setTimeout(() => {
      setMode(prev => prev === 'developer' ? 'hacker' : 'developer');
      setTimeout(() => setIsTransitioning(false), 600);
    }, 200);
  };

  const colors = {
    developer: {
      primary: '#00fff9',
      secondary: '#8b5cf6',
      accent: '#00d4ff',
      gradient: 'from-cyan-400 to-purple-500'
    },
    hacker: {
      primary: '#00ff88',
      secondary: '#ff0055',
      accent: '#00ffcc',
      tertiary: '#ff3366',
      dark: '#0a0f0a',
      gradient: 'from-emerald-400 via-teal-400 to-rose-500'
    }
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode, isTransitioning, colors: colors[mode] }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within ModeProvider');
  }
  return context;
};
