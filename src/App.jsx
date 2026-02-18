import { useEffect, useState } from 'react';
import { ModeProvider } from './hooks/useModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Cursor from './components/Cursor';
import EasterEgg from './components/EasterEgg';
import ProfileEasterEgg from './components/ProfileEasterEgg';
import Loader from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <ModeProvider>
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}

      {/* Easter Eggs (fixed position, rendered after load) */}
      {!isLoading && <EasterEgg />}
      {!isLoading && <ProfileEasterEgg />}
      
      <div className={`relative min-h-screen animated-gradient transition-all duration-1000 ease-out ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        {/* Custom Cursor (Desktop only) */}
        <div className="hidden lg:block">
          <Cursor />
        </div>

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ModeProvider>
  );
}

export default App;
