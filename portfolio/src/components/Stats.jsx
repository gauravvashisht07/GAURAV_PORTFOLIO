import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCode, FaProjectDiagram, FaTrophy, FaUser } from "react-icons/fa";

const Stats = () => {
  const stats = [
    {
      icon: <FaCode />,
      number: "5",
      label: "Projects Completed",
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaProjectDiagram />,
      number: "10",
      label: "Technologies",
      suffix: "+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaTrophy />,
      number: "6",
      label: "Certifications",
      suffix: "",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FaUser />,
      number: "100",
      label: "Happy Interactions",
      suffix: "%",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-200/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Quick Stats
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A snapshot of my journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(stat.number);

  useEffect(() => {
    let interval;
    let current = 0;

    const increment = Math.ceil(targetNumber / 30);

    interval = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-all blur`} />

      <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg group-hover:shadow-xl group-hover:border-transparent transition-all">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} text-white text-xl mb-4`}
        >
          {stat.icon}
        </motion.div>

        {/* Number */}
        <div className="mb-3">
          <span className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
            {count}{stat.suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          {stat.label}
        </p>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          className={`mt-4 h-1 rounded-full bg-gradient-to-r ${stat.color} origin-left`}
        />
      </div>
    </motion.div>
  );
};

export default Stats;
