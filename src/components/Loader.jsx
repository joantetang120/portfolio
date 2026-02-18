import { useEffect, useState, useRef } from 'react';
import { Terminal, Cpu, Globe, Shield, Zap, CircuitBoard, ScanLine, Gauge } from 'lucide-react';

const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('SYSTEM BOOT');
  const [showLoader, setShowLoader] = useState(true);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const canvasRef = useRef(null);

  const loadingStages = [
    { text: 'LOADING PORTFOLIO', progress: 15 },
    { text: 'FETCHING PROJECTS', progress: 30 },
    { text: 'RENDERING COMPONENTS', progress: 45 },
    { text: 'LOADING ASSETS & MEDIA', progress: 60 },
    { text: 'APPLYING STYLES & ANIMATIONS', progress: 75 },
    { text: 'PREPARING EXPERIENCE', progress: 90 },
    { text: 'WELCOME', progress: 100 },
  ];

  // Matrix rain effect
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for(let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
    
    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(5, 5, 8, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';
      
      for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillStyle = `rgba(0, 255, 249, ${0.1 + Math.random() * 0.3})`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const matrixInterval = setInterval(drawMatrix, 35);
    return () => clearInterval(matrixInterval);
  }, []);

  useEffect(() => {
    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < loadingStages.length) {
        setLoadingText(loadingStages[currentStage].text);
        setProgress(loadingStages[currentStage].progress);
        
        // Trigger glitch effect on stage change
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 200);
        
        currentStage++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowLoader(false);
          setTimeout(() => onLoadComplete(), 500);
        }, 500);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  if (!showLoader) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050508] transition-opacity duration-1000 ${!showLoader ? 'opacity-0' : 'opacity-100'}`}>
      {/* Matrix Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Holographic Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00fff9 1px, transparent 1px),
              linear-gradient(to bottom, #00fff9 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(0, 255, 249, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 100% 100%',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center bottom',
            opacity: 0.2,
          }}
        />
      </div>

      {/* Floating Data Streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            style={{
              width: '200px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `dataStream ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Quantum Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              background: `radial-gradient(circle at center, ${
                i % 3 === 0 ? '#00fff9' : i % 3 === 1 ? '#a855f7' : '#ec4899'
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px ${
                i % 3 === 0 ? '#00fff9' : i % 3 === 1 ? '#a855f7' : '#ec4899'
              }`,
              animation: `quantumFloat ${5 + Math.random() * 5}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Loader Content */}
      <div className={`relative z-10 flex flex-col items-center space-y-12 px-4 transition-all duration-300 ${glitchEffect ? 'translate-x-1' : ''}`}>
        {/* Futuristic Core */}
        <div className="relative w-64 h-64">
          {/* Outer Rings */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping-slow" />
          <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-pulse" />
          <div className="absolute inset-8 rounded-full border border-pink-500/20 animate-spin-slow" />
          
          {/* Rotating Tech Rings */}
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              strokeDasharray="10 10"
              opacity="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="0.5"
              strokeDasharray="8 8"
              opacity="0.5"
              transform="rotate(-45 50 50)"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00fff9" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#00fff9" />
              </linearGradient>
            </defs>
          </svg>

          {/* Orbiting Icons */}
          <div className="absolute inset-0 animate-orbit-slow">
            <Cpu className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 text-cyan-400 filter drop-shadow-glow" />
          </div>
          <div className="absolute inset-0 animate-orbit-reverse">
            <CircuitBoard className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 text-purple-400 filter drop-shadow-glow" />
          </div>
          <div className="absolute inset-0 animate-orbit-slow" style={{ animationDelay: '-5s' }}>
            <Globe className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-8 h-8 text-pink-400 filter drop-shadow-glow" />
          </div>
          <div className="absolute inset-0 animate-orbit-reverse" style={{ animationDelay: '-2.5s' }}>
            <Shield className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-8 h-8 text-green-400 filter drop-shadow-glow" />
          </div>

          {/* Central Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Gauge className="w-12 h-12 text-white animate-spin-slow" />
              </div>
              {/* Core Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse" />
            </div>
          </div>

          {/* Energy Beams */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-px h-16 bg-gradient-to-t from-transparent via-cyan-500 to-transparent origin-top"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                animation: `beamPulse ${2 + Math.random()}s infinite`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        {/* Loading Text with Glitch Effect */}
        <div className="text-center space-y-6">
          <h2 className={`relative text-3xl md:text-4xl font-bold font-mono tracking-wider transition-all duration-100 ${glitchEffect ? 'glitch' : ''}`}>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                {loadingText}
              </span>
              <span className="relative bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {loadingText}
              </span>
            </span>
          </h2>

          {/* Holographic Progress Bar */}
          <div className="w-96 max-w-full mx-auto space-y-4">
            <div className="relative h-3 bg-gray-900/50 rounded-full overflow-hidden backdrop-blur-sm border border-cyan-500/20">
              {/* Background Scanlines */}
              <div className="absolute inset-0 bg-scanlines" />
              
              {/* Progress Fill with Holographic Effect */}
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              >
                {/* Animated Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                
                {/* Particle Trail */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>

              {/* Progress Glow */}
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 blur-xl opacity-50 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Digital Readout */}
            <div className="flex justify-between items-center text-sm font-mono">
              <div className="flex items-center space-x-2">
                <ScanLine className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-cyan-400">{progress}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-bold">SYSTEM STATUS: {progress === 100 ? 'ACTIVE' : 'BOOTING'}</span>
              </div>
            </div>
          </div>

          {/* Data Transfer Animation */}
          <div className="flex justify-center space-x-1 text-xs font-mono">
            {[...Array(40)].map((_, i) => (
              <span
                key={i}
                className="text-cyan-500/70 animate-dataPulse"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: `${1 + Math.random()}s`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              >
                {Math.random() > 0.6 ? '1' : '0'}
              </span>
            ))}
          </div>

          {/* Security Status */}
          <div className="flex justify-center space-x-6 text-xs">
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3 text-green-400" />
              <span className="text-green-400/70">FIREWALL: ACTIVE</span>
            </div>
            <div className="flex items-center space-x-1">
              <Cpu className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-400/70">QUANTUM: STABLE</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="w-3 h-3 text-purple-400" />
              <span className="text-purple-400/70">POWER: 100%</span>
            </div>
          </div>
        </div>

        {/* Energy Core Indicators */}
        <div className="flex space-x-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="relative"
            >
              <div className="w-1 h-8 bg-gradient-to-t from-transparent via-cyan-500 to-transparent rounded-full animate-energyPulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full blur-sm animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Corner Tech Elements */}
      <div className="absolute top-8 left-8 flex space-x-1">
        <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse" />
        <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-transparent animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="w-1 h-4 bg-gradient-to-b from-pink-500 to-transparent animate-pulse" style={{ animationDelay: '0.6s' }} />
      </div>
      
      <div className="absolute bottom-8 right-8 flex space-x-1">
        <div className="w-1 h-4 bg-gradient-to-t from-cyan-500 to-transparent animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="w-1 h-8 bg-gradient-to-t from-purple-500 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="w-1 h-12 bg-gradient-to-t from-pink-500 to-transparent animate-pulse" style={{ animationDelay: '0.8s' }} />
      </div>

      <style jsx>{`
        @keyframes dataStream {
          0% { transform: translateX(-100%) translateY(0); }
          100% { transform: translateX(400%) translateY(100px); }
        }
        
        @keyframes quantumFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(10px, -10px) scale(1.2); opacity: 0.8; }
          50% { transform: translate(-5px, 5px) scale(0.8); opacity: 0.5; }
          75% { transform: translate(-10px, -5px) scale(1.1); opacity: 0.6; }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes orbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes beamPulse {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) rotate(var(--rotation)) scaleY(0.5); }
          50% { opacity: 0.4; transform: translate(-50%, -50%) rotate(var(--rotation)) scaleY(1.2); }
        }
        
        @keyframes energyPulse {
          0%, 100% { opacity: 0.3; height: 2rem; }
          50% { opacity: 1; height: 3rem; }
        }
        
        @keyframes dataPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes pingSlow {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        
        .animate-orbit-slow {
          animation: orbit 20s linear infinite;
        }
        
        .animate-orbit-reverse {
          animation: orbitReverse 15s linear infinite;
        }
        
        .animate-ping-slow {
          animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-dataPulse {
          animation: dataPulse 1.5s ease-in-out infinite;
        }
        
        .animate-energyPulse {
          animation: energyPulse 2s ease-in-out infinite;
        }
        
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px currentColor);
        }
        
        .bg-scanlines {
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 249, 0.03) 2px,
            rgba(0, 255, 249, 0.03) 4px
          );
        }
        
        .glitch {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;