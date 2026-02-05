import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Cursor from "./components/Cursor";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden cursor-none">
      {/* Custom cursor */}
      <Cursor />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-50"
        initial={{ scaleX: 0 }}
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ scaleX: { type: "tween", ease: "easeInOut" } }}
      />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="pt-20">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Testimonials />
        <Contact />

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-black dark:from-black dark:to-gray-900 text-white py-12 text-center border-t border-gray-800 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <p className="text-gray-300">
              Designed and developed with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                className="text-red-500 inline-block"
              >
                ❤️
              </motion.span>{" "}
              by Gaurav Sharma
            </p>
            <p className="text-sm text-gray-500 mt-3">
              © {new Date().getFullYear()} All rights reserved • Built with React + Vite + Tailwind
            </p>
          </div>
        </footer>
      </main>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : 20,
          pointerEvents: isScrolled ? "auto" : "none",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default App;
