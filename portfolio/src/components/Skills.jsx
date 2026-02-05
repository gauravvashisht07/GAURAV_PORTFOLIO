import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 transition-colors relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Core CS */}
          <SkillCard
            title="Core Computer Science"
            skills={[
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Problem Solving",
              "Debugging",
            ]}
            delay={0.2}
          />

          {/* Languages */}
          <SkillCard
            title="Programming Languages"
            skills={[
              { icon: <SiCplusplus />, name: "C / C++" },
              { icon: <FaJava />, name: "Java" },
              { icon: <SiJavascript />, name: "JavaScript" },
            ]}
            icons
            delay={0.3}
          />

          {/* Web & Tools */}
          <SkillCard
            title="Web & Tools"
            skills={[
              { icon: <FaReact />, name: "React.js" },
              { icon: <FaNodeJs />, name: "Node.js" },
              { icon: <SiTailwindcss />, name: "Tailwind CSS" },
              { icon: <FaDatabase />, name: "MongoDB / MySQL" },
              { icon: <FaGitAlt />, name: "Git" },
              { icon: <FaGithub />, name: "GitHub" },
            ]}
            icons
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills, icons = false, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
      className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <span className="w-1 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-3" />
        {title}
      </h3>

      <ul className="space-y-3">
        {skills.map((skill, index) =>
          icons ? (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
            >
              <span className="text-2xl text-purple-600 dark:text-purple-400 flex-shrink-0">
                {skill.icon}
              </span>
              <span className="font-medium">{skill.name}</span>
            </motion.li>
          ) : (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.05 }}
              viewport={{ once: true }}
              className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
            >
              <span className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0">
                ✓
              </span>
              <span>{skill}</span>
            </motion.li>
          )
        )}
      </ul>
    </motion.div>
  );
};

export default Skills;
