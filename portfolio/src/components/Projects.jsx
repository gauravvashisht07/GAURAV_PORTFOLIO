import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Astrology Website (Freelance)",
    description:
      "Designed and developed a fully responsive astrology website for a freelance client with modern UI, optimized layouts, and smooth animations.",
    points: [
      "Built custom UI sections for zodiac signs, gemstones, and remedies",
      "Improved page load performance by ~30%",
      "Achieved 100% mobile responsiveness",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#",
  },
  {
    title: "Lost and Found Web Application",
    description:
      "A full-stack web platform enabling users to report lost and found items with real-time communication.",
    points: [
      "Implemented real-time chat between item owner and finder",
      "Designed scalable backend using Node.js & MongoDB",
      "Reduced recovery response time by ~40%",
    ],
    tech: ["Node.js", "MongoDB", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Vite to showcase skills and projects.",
    points: [
      "Component-based architecture with clean UI",
      "Optimized performance using Vite",
      "Improved SEO and faster indexing",
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Multiplayer Shooting Game",
    description:
      "A real-time multiplayer FPS game built using Unity Engine with client-server synchronization.",
    points: [
      "Implemented matchmaking and lobby systems",
      "Optimized network performance for low latency",
    ],
    tech: ["Unity", "C#", "Alteruna"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                {project.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
