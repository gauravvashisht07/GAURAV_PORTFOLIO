import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const PageLoader = ({ isComplete = false }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5, delay: isComplete ? 0.3 : 0 }}
      onAnimationComplete={() => isComplete}
      className={`fixed inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 z-40 flex items-center justify-center ${
        isComplete ? "pointer-events-none" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated logo */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          GS
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          />
        </div>

        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-600 dark:text-gray-400 text-sm"
        >
          Building something amazing...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageLoader;
