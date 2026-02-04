import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 dark:text-white text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center"
        >
          I am a final-year Computer Science Engineering student with a strong
          foundation in Data Structures & Algorithms, Object-Oriented
          Programming, and full-stack web development. I enjoy solving real-world
          problems by building scalable and user-focused applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center"
        >
          Passionate about technology and innovation, I strive to create
          impactful solutions that make a difference.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
