import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Offset for fixed navbar */}
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
};

export default App;
