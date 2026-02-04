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
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Core CS */}
          <SkillCard
            title="Core Computer Science"
            skills={[
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Problem Solving",
              "Debugging",
            ]}
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
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills, icons = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>

      <ul className="space-y-3 text-gray-600 dark:text-gray-400">
        {skills.map((skill, index) =>
          icons ? (
            <li key={index} className="flex items-center gap-3">
              <span className="text-xl text-blue-600">{skill.icon}</span>
              <span>{skill.name}</span>
            </li>
          ) : (
            <li key={index}>• {skill}</li>
          )
        )}
      </ul>
    </motion.div>
  );
};

export default Skills;
