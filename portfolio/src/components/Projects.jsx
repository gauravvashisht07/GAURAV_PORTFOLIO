import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

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
    featured: true,
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
    featured: true,
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
    featured: false,
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
    featured: false,
  },
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 transition-colors relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 -right-40 w-96 h-96 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of my recent projects showcasing my skills in full-stack development and UI/UX design.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)" }}
              className="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all pointer-events-none" />

              {/* Featured badge */}
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full"
                >
                  <FaStar className="text-sm" /> Featured
                </motion.div>
              )}

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key points */}
                <ul className="mb-6 space-y-2">
                  {project.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 dark:from-blue-900/40 dark:to-purple-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition"
                  >
                    <FaGithub className="text-lg" /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition"
                  >
                    <FaExternalLinkAlt className="text-lg" /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
