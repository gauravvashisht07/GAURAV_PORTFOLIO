import { motion } from "framer-motion";
import { FaCertificate, FaAward } from "react-icons/fa";

const certificates = [
  {
    title: "Machine Learning Models in Science",
    issuer: "LearnQuest (Coursera)",
    year: "2026",
    category: "AI/ML",
  },
  {
    title: "Introduction to Data Science and scikit-learn in Python",
    issuer: "LearnQuest (Coursera)",
    year: "2026",
    category: "Data Science",
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Certificate of Completion",
    year: "2025",
    category: "AI",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2024",
    category: "Web Dev",
  },
  {
    title: "Programming Using C++",
    issuer: "Programming Certification",
    year: "2023",
    category: "Languages",
  },
  {
    title: "Programming in C",
    issuer: "Programming Certification",
    year: "2023",
    category: "Languages",
  },
];

const Certificates = () => {
  const categoryColors = {
    "AI/ML": "from-purple-500 to-pink-500",
    "Data Science": "from-blue-500 to-cyan-500",
    "AI": "from-indigo-500 to-purple-500",
    "Web Dev": "from-yellow-500 to-orange-500",
    "Languages": "from-green-500 to-teal-500",
  };

  return (
    <section
      id="certificates"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-40 -right-40 w-80 h-80 bg-pink-200/10 dark:bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Continuously learning and growing through professional certifications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert, index) => {
            const bgColor = categoryColors[cert.category] || "from-blue-500 to-blue-600";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                className="group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 group-hover:border-purple-300 dark:group-hover:border-purple-600 transition-all relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${bgColor} text-white flex items-center justify-center text-2xl`}
                  >
                    <FaAward />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                      {cert.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {cert.issuer} {cert.year && `• ${cert.year}`}
                    </p>

                    {/* Category badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="inline-block"
                    >
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${bgColor} text-white`}>
                        {cert.category}
                      </span>
                    </motion.div>
                  </div>

                  {/* Checkmark animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className="flex-shrink-0 text-green-500 text-xl"
                  >
                    ✓
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
