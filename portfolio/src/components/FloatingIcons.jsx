import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <FaReact className="absolute top-24 left-20 text-blue-500 text-4xl animate-float" />
      <FaJs className="absolute bottom-32 right-32 text-yellow-400 text-4xl animate-float delay-200" />
      <FaNodeJs className="absolute top-1/2 right-24 text-green-500 text-4xl animate-float delay-500" />
    </div>
  );
};

export default FloatingIcons;
