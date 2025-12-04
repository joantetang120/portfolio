import { useEffect } from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <ModeProvider>
      <div className="relative min-h-screen animated-gradient">
        {/* Custom Cursor (Desktop only) */}
        <div className="hidden lg:block">
          <Cursor />
        </div>

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Easter Eggs */}
        <EasterEgg />
        <ProfileEasterEgg />

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
