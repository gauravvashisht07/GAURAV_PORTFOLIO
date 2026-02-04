import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Feel free to reach out for opportunities, collaborations, or just a
          quick chat.
        </p>

        {/* Contact Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:iamgauravvashisht7@gmail.com"
            className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition"
          >
            <FaEnvelope className="text-3xl text-blue-600 dark:text-blue-400" />
            <p className="mt-3 font-medium text-gray-800 dark:text-gray-200">
              Email
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              iamgauravvashisht7@gmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition"
          >
            <FaLinkedin className="text-3xl text-blue-700" />
            <p className="mt-3 font-medium text-gray-800 dark:text-gray-200">
              LinkedIn
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Connect with me
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition"
          >
            <FaGithub className="text-3xl text-gray-900 dark:text-white" />
            <p className="mt-3 font-medium text-gray-800 dark:text-gray-200">
              GitHub
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              View my work
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
