import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Client A",
      role: "Startup Founder",
      feedback:
        "Gaurav delivered an amazing website that exceeded our expectations. His attention to detail and communication was exceptional.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Client B",
      role: "Small Business Owner",
      feedback:
        "Working with Gaurav was a pleasure. He understood our vision and translated it into a beautiful, functional website.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Colleague C",
      role: "Tech Mentor",
      feedback:
        "Gaurav shows great promise as a developer. He's eager to learn and has strong problem-solving skills.",
      rating: 5,
      avatar: "👨‍🏫",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-40 w-96 h-96 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent mb-4">
            What People Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Kind words from clients and colleagues
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all blur" />

      <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg group-hover:shadow-xl group-hover:border-purple-300 dark:group-hover:border-purple-600 transition-all h-full flex flex-col">
        {/* Quote icon */}
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="text-3xl text-purple-500/30 dark:text-purple-400/30 mb-4"
        >
          <FaQuoteLeft />
        </motion.div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              <FaStar className="text-yellow-400 text-sm" />
            </motion.div>
          ))}
        </div>

        {/* Feedback */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
          "{testimonial.feedback}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-4xl"
          >
            {testimonial.avatar}
          </motion.div>

          <div>
            <p className="font-bold text-gray-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
