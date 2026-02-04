import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "Machine Learning Models in Science",
    issuer: "LearnQuest (Coursera)",
    year: "2026",
  },
  {
    title: "Introduction to Data Science and scikit-learn in Python",
    issuer: "LearnQuest (Coursera)",
    year: "2026",
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Certificate of Completion",
    year: "2025",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "2024",
  },
  {
    title: "Programming Using C++",
    issuer: "2023",
  },
  {
    title: "Programming in C",
    issuer: "2023",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Certificates
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md"
            >
              <FaCertificate className="text-3xl text-blue-600 mt-1" />

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.issuer} {cert.year && `• ${cert.year}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
