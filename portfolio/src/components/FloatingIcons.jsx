import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const FloatingIcons = () => {
  const icons = [
    {
      Icon: FaReact,
      color: "text-cyan-500",
      delay: 0,
      size: "w-12 h-12",
      top: "10%",
      left: "5%",
    },
    {
      Icon: SiJavascript,
      color: "text-yellow-400",
      delay: 0.2,
      size: "w-10 h-10",
      top: "20%",
      left: "80%",
    },
    {
      Icon: FaNodeJs,
      color: "text-green-500",
      delay: 0.4,
      size: "w-12 h-12",
      top: "60%",
      left: "10%",
    },
    {
      Icon: FaDatabase,
      color: "text-blue-500",
      delay: 0.6,
      size: "w-11 h-11",
      top: "75%",
      left: "85%",
    },
    {
      Icon: SiTailwindcss,
      color: "text-cyan-400",
      delay: 0.8,
      size: "w-10 h-10",
      top: "40%",
      left: "75%",
    },
    {
      Icon: FaGitAlt,
      color: "text-orange-500",
      delay: 1,
      size: "w-11 h-11",
      top: "30%",
      left: "15%",
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, idx) => (
        <FloatingIcon
          key={idx}
          {...icon}
        />
      ))}
    </div>
  );
};

const FloatingIcon = ({
  Icon,
  color,
  delay,
  size,
  top,
  left,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.3, y: 0 }}
      animate={{
        opacity: [0.2, 0.6, 0.2],
        y: [0, -30, 0],
        x: [0, 10, -10, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        top,
        left,
      }}
      className="cursor-default"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        className={`${size} ${color} opacity-40 hover:opacity-80 transition-opacity`}
      >
        <Icon className="w-full h-full" />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{
          duration: 4,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute inset-0 ${color} opacity-0 blur-lg rounded-full`}
      />
    </motion.div>
  );
};

export default FloatingIcons;
