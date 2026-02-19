import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-linear-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl text-center relative z-10">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            {/* Animated border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-gray-950" />
            </motion.div>

            {/* Profile Image */}
            <div className="absolute inset-1 rounded-full overflow-hidden bg-gray-950">
              <img 
                src="/Profile.png" 
                alt="Gaurav Sharma"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-900/50 text-blue-300 text-sm font-semibold">
             Software Engineer • Web Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Gaurav Sharma
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          Final-year Computer Science Engineering student & aspiring Software
          Engineer focused on building{" "}
          <span className="text-blue-400 font-semibold">
            scalable web applications
          </span>{" "}
          with clean and efficient code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="/GauravSharmaResume.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg transition-all"
          >
            <FaDownload /> Download Resume
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-gray-600 text-gray-200 font-semibold hover:bg-gray-800 transition-all"
          >
            <FaGithub /> GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-gray-600 text-gray-200 font-semibold hover:bg-gray-800 transition-all"
          >
            <FaLinkedin /> LinkedIn
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center text-gray-500"
        >
          <FaArrowDown className="text-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
