import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/30 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GS
              </span>
              <span className="text-gray-800 dark:text-gray-200 ml-1">Gaurav</span>
            </a>
          </motion.div>

          {/* Nav Links - Desktop Only */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex space-x-8"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition relative group text-sm"
                >
                  {item.label}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left rounded-full"
                  />
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Right Side - Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
              aria-label="Toggle Mobile Menu"
              type="button"
            >
              {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu - Separate from nav bar */}
      {mobileOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-screen z-30 bg-gradient-to-br from-gray-900 via-gray-950 to-black flex flex-col overflow-hidden"
          onClick={handleMenuClose}
        >
          {/* Decorative background elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Content that prevents close when clicked */}
          <div 
            className="flex-1 flex flex-col pt-20 px-8 relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu items */}
            <nav className="flex flex-col gap-8 mt-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent hover:from-blue-400 hover:via-purple-300 hover:to-pink-400 transition-all duration-300 cursor-pointer block py-2 group"
                  >
                    <span className="inline-block group-hover:scale-110 transition-transform duration-300">{item.label}</span>
                  </a>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="px-8 py-8 pb-20 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-5 rounded-2xl font-bold text-lg cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;
