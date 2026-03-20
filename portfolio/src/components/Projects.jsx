import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    title: "Astrology Website (Freelance)",
    description:
      "Designed and developed a production-ready, fully responsive astrology website for a freelance client, focusing on modern UI/UX, performance optimization, and cross-device compatibility.",
    points: [
      "Built custom UI sections for zodiac signs, gemstones, and astrological remedies",
      "Implemented modern layouts, smooth animations, and mobile-first design",
      "Optimized assets and layouts, improving page load performance by ~30%",
      "Achieved 100% mobile responsiveness across all screen sizes",
      "Delivered a live website hosted on GitHub Pages",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://gauravvashisht07.github.io/ASTROLOGY-WEBSITE/",
    github: "https://github.com/gauravvashisht07/ASTROLOGY-WEBSITE",
    featured: true,
  },
  {
    title: "Lost and Found Web Application",
    description:
      "A full-stack web platform that helps users report lost and found items and connect directly through real-time communication to enable faster recovery.",
    points: [
      "Developed functionality for users to post lost and found items with images and detailed information",
      "Implemented real-time chat between item owner and finder for faster coordination",
      "Designed a clean, responsive UI with search and filter capabilities",
      "Built a scalable backend architecture using Node.js and MongoDB",
      "Reduced item recovery response time by approximately 40%",
    ],
    tech: ["Node.js", "MongoDB", "Tailwind CSS"],
    live: "https://lost-found-portal-n1pw.onrender.com/",
    github: "https://github.com/gauravvashisht07/LOST-FOUND-PORTAL",
    featured: true,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, fast, and responsive personal portfolio website built to showcase projects, skills, and experience with a clean and professional design.",
    points: [
      "Built using React and Vite with a component-based architecture",
      "Implemented smooth UI interactions and responsive layouts",
      "Optimized performance and reduced initial load time using Vite",
      "Improved SEO for better visibility and faster indexing",
      "Deployed the website using GitHub Pages",
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
    live: "https://gaurav-portfolio-live.vercel.app/",
    github: "https://github.com/gauravvashisht07/GAURAV_PORTFOLIO",
    featured: false,
  },
  {
    title: "Multiplayer Shooting Game",
    description:
      "A real-time multiplayer FPS game developed using Unity Engine with focus on low-latency gameplay and seamless multiplayer experience.",
    points: [
      "Implemented multiplayer matchmaking and lobby systems",
      "Handled real-time client-server synchronization",
      "Optimized network performance to reduce latency during gameplay",
      "Enhanced overall multiplayer experience through performance tuning",
    ],
    tech: ["Unity", "C#", "Alteruna"],
    live: "#",
    github: "#",
    featured: false,
  },
  {
  title: "Blinkit Clone (Frontend UI Project)",
  description:
    "A responsive frontend clone of the Blinkit website built using pure HTML and CSS, focusing on layout structuring, pixel-perfect design, and responsive user interface implementation.",
  points: [
    "Recreated Blinkit's homepage layout including navbar, product sections, banners, and footer",
    "Implemented responsive design using Flexbox and CSS Grid",
    "Designed reusable UI components for product cards and category sections",
    "Ensured mobile responsiveness across different screen sizes",
    "Improved layout alignment and spacing to closely match the original website design"
  ],
  tech: ["HTML", "CSS", "Responsive Design"],
  live: "https://gauravvashisht07.github.io/BLINKIT-CLONE/",
  github: "https://github.com/gauravvashisht07/BLINKIT-CLONE",
  featured: false,
},
{
  title: "Car Rental Web App(MERN Stack)",
  description:
    "A full-stack car rental web application that allows users to search and rent cars based on location, availability, and rental duration. Built using the MERN stack with a focus on scalable backend architecture and responsive UI.",
  points: [
    "Implemented location-based car search with dynamic availability filtering",
    "Developed RESTful APIs using Node.js and Express for booking, user management, and car listings",
    "Designed a responsive frontend using React for seamless user experience",
    "Integrated MongoDB for storing car data, user profiles, and booking records",
    "Implemented booking workflow including rental duration selection and confirmation",
    "Structured backend for scalability and efficient data querying"
  ],
  tech: ["React", "Node.js", "Express", "MongoDB"],
  live: "#",
  github: "https://github.com/gauravvashisht07/CAR_RENTAL_WEBSITE",
  featured: true,
},
{
  title: "Calculator Web Application",
  description:
    "A responsive calculator web application built using HTML, CSS, and JavaScript to perform basic arithmetic operations with a clean and user-friendly interface.",
  points: [
    "Implemented core arithmetic operations including addition, subtraction, multiplication, and division",
    "Designed a structured button layout with intuitive user interaction",
    "Handled input validation and calculation logic using JavaScript",
    "Built a responsive UI with modern styling and hover effects",
    "Optimized layout for both desktop and mobile screen sizes"
  ],
  tech: ["HTML", "CSS", "JavaScript"],
  live: "https://gauravvashisht07.github.io/CALCULATOR/",
  github: "https://github.com/gauravvashisht07/CALCULATOR",
  featured: false,
},

{
  title: "Life-OS (Full-Stack Productivity Application)",
  description:
    "A full-stack productivity web application that helps users manage daily tasks, organize workflows, and improve efficiency through a clean and distraction-free interface.",
  points: [
    "Developed a full-stack application using React (Vite) for frontend and Node.js with Express for backend",
    "Designed RESTful APIs for task management including create, update, delete, and status tracking",
    "Integrated MongoDB for persistent data storage of tasks and user workflows",
    "Implemented modular backend architecture with routes, models, and middleware",
    "Built a responsive and minimal UI focused on productivity and usability",
    "Deployed the application with Vercel (frontend) and connected it with backend APIs"
  ],
  tech: ["React", "Vite", "Node.js", "Express", "MongoDB"],
  live: "https://life-os-swph.vercel.app/",
  github: "https://github.com/gauravvashisht07/Life-OS",
  featured: true,
},


];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Filter projects: show featured first, then all if expanded
  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-linear-to-br from-gray-900 via-gray-800 to-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-blue-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of my recent projects showcasing my skills in full-stack development and UI/UX design.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)" }}
              className="group relative p-8 rounded-2xl bg-gray-800 shadow-lg border border-gray-700 hover:border-blue-600 transition-all overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all pointer-events-none" />

              {/* Featured badge */}
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-linear-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full"
                >
                  <FaStar className="text-sm" /> Featured
                </motion.div>
              )}

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key points */}
                <ul className="mb-6 space-y-2">
                  {project.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-blue-400 mt-1 shrink-0">
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
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-blue-900/40 text-blue-300 border border-blue-700 hover:border-blue-500 transition"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 font-semibold transition"
                  >
                    <FaGithub className="text-lg" /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 font-semibold transition"
                  >
                    <FaExternalLinkAlt className="text-lg" /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show All/Hide Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-3 rounded-full font-bold text-white bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-blue-400"
            >
              View All Projects ({projects.length})
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaChevronDown className="text-lg" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {/* Hide/Show Less Button */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-3 rounded-full font-bold text-white bg-linear-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-gray-500"
            >
              Show Featured Only
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaChevronDown className="text-lg rotate-180" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
