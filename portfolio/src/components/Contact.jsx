import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "iamgauravvashisht7@gmail.com",
      href: "mailto:iamgauravvashisht7@gmail.com",
      color: "from-blue-500 to-blue-600",
      hoverColor: "group-hover:from-blue-600 group-hover:to-blue-700",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com",
      color: "from-cyan-500 to-blue-600",
      hoverColor: "group-hover:from-cyan-600 group-hover:to-blue-700",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "View my work",
      href: "https://github.com",
      color: "from-gray-700 to-gray-900",
      hoverColor: "group-hover:from-gray-800 group-hover:to-black",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-200/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith("mailto") ? "" : "_blank"}
              rel={link.href.startsWith("mailto") ? "" : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} ${link.hoverColor} transition-all duration-300 opacity-0 group-hover:opacity-10 dark:opacity-0 dark:group-hover:opacity-5`} />
              
              {/* Card content */}
              <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} text-white text-2xl mx-auto mb-4 transition-all`}
                >
                  {link.icon}
                </motion.div>

                <p className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {link.label}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {link.value}
                </p>

                <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Reach out</span>
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="mailto:iamgauravvashisht7@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg transition-all"
          >
            Start a Conversation
          </motion.a>

          <p className="text-gray-600 dark:text-gray-400">
            or explore my work on GitHub & LinkedIn
          </p>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-sm text-gray-500 dark:text-gray-400"
        >
          <span className="text-2xl mb-2 inline-block">✨</span>
          <br />
          Thanks for visiting! Let's build something amazing together.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
