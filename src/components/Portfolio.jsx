import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Education from './Education';
import Research from './Research';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import Videos from './Videos';
import Contact from './Contact';
//import AnimatedBackground from './AnimatedBackground';
import ThemeToggle from './ThemeToggle';
import ScrollToTop from './ScrollToTop';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="font-sans relative">
      {/* Background Animation 
    <div className="absolute top-0 left-0 w-full h-full -z-10">
       <AnimatedBackground />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Main Sections */}
      <Navbar />
      <Hero />
     <AboutMe />
     <Education />
     <Research />
     <Projects /> 
      <Skills /> 
      <Certifications /> 
      <Videos /> 
      <Contact />

   <footer className="relative bg-black text-white text-center py-10 mt-16 border-t border-white/10 overflow-hidden">
      {/* Glow Animation Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="glow-layer w-full h-full absolute top-0 left-0"></div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-2xl sm:text-3xl font-bold tracking-wide bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 text-transparent bg-clip-text animate-pulse"
      >
        Let's Build Something Great Together 🚀
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 text-sm text-gray-400 mt-2"
      >
      
      </motion.p>

      <div className="relative z-10 flex justify-center mt-4">
        <a
          href="https://github.com/Asif-Ullah-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-yellow-400 transition duration-300 animate-pulse"
        >
          <FaGithub />
        </a>
      </div>

      {/* Glow-layer animation styles */}
      <style>{`
        @keyframes glow-slide {
          0% {
            transform: translateX(-150%);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          50% {
            transform: translateX(0%);
            opacity: 1;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(150%);
            opacity: 0;
          }
        }

        .glow-layer {
          background: linear-gradient(
            115deg,
            rgba(255, 255, 0, 0.25),
            rgba(255, 0, 0, 0.5),
            rgba(255, 255, 0, 0.25)
          );
          filter: blur(100px);
          mix-blend-mode: screen;
          animation: glow-slide 6s ease-in-out infinite alternate;
        }
      `}</style>
    </footer>

    </div>
  );
}
