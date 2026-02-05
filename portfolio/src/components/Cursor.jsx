import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      {isVisible && (
        <motion.div
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          className="pointer-events-none fixed w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 z-50 opacity-80 mix-blend-lighten"
        />
      )}

      {/* Outer ring cursor */}
      {isVisible && (
        <motion.div
          animate={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="pointer-events-none fixed w-10 h-10 rounded-full border-2 border-blue-600/50 z-50 mix-blend-lighten"
        />
      )}
    </>
  );
};

export default Cursor;
