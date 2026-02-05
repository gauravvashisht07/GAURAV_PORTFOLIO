import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Technology",
      subtitle: "Computer Science Engineering",
      organization: "Engineering College",
      period: "2021 - 2024",
      description:
        "Final year student focusing on DSA, OOP, and full-stack web development. Actively involved in coding competitions and projects.",
      highlights: ["CGPA: 8.5+", "Active in coding contests"],
    },
    {
      type: "work",
      title: "Freelance Web Developer",
      subtitle: "Full Stack Development",
      organization: "Self-employed",
      period: "2023 - Present",
      description:
        "Developed multiple web applications and websites for clients. Specialized in React, Node.js, and responsive design.",
      highlights: ["3+ Projects Delivered", "100% Client Satisfaction"],
    },
    {
      type: "work",
      title: "Open Source Contributor",
      subtitle: "Community Development",
      organization: "Various Open Source Projects",
      period: "2023 - Present",
      description:
        "Contributing to open-source projects and helping the developer community through code reviews and documentation.",
      highlights: ["Active Contributor", "Community Helper"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-1/3 w-96 h-96 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            My journey in tech and academics
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transform -translate-x-1/2"
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                experience={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ experience, index }) => {
  const isLeft = index % 2 === 0;
  const isEducation = experience.type === "education";
  const iconColor = isEducation
    ? "from-blue-500 to-cyan-500"
    : "from-purple-500 to-pink-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content */}
      <div className="w-full md:w-5/12">
        <motion.div
          whileHover={{ y: -8 }}
          className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all"
        >
          {/* Period badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-3 px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-300"
          >
            {experience.period}
          </motion.div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {experience.title}
          </h3>

          <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
            {experience.subtitle}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {experience.organization}
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {experience.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {experience.highlights.map((highlight, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                ✓ {highlight}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-2/12 flex justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${iconColor} flex items-center justify-center text-white text-2xl shadow-lg border-4 border-white dark:border-gray-800`}
        >
          {isEducation ? <FaGraduationCap /> : <FaBriefcase />}

          {/* Pulse animation */}
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${iconColor} opacity-20`}
          />
        </motion.div>
      </motion.div>

      {/* Empty space for layout */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};

export default Experience;
