import { motion } from "framer-motion";
import { FaCodeBranch, FaLightbulb, FaRocket } from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <FaCodeBranch className="text-2xl" />,
      title: "Problem Solving",
      desc: "Strong foundation in DSA & problem-solving"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Innovation",
      desc: "Creating scalable & efficient solutions"
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Growth",
      desc: "Passionate about learning & development"
    }
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 mb-8"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I am a final-year Computer Science Engineering student with a strong foundation in{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Data Structures & Algorithms
            </span>
            , Object-Oriented Programming, and full-stack web development. I enjoy solving real-world
            problems by building scalable and user-focused applications.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate about{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              technology and innovation
            </span>
            , I strive to create impactful solutions that make a difference. With experience in both frontend and backend technologies, I'm committed to delivering excellence in every project.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
