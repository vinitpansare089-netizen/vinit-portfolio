import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Learning />
      <Contact />
      <Footer />

      <Analytics />
    </>
  );
}

export default App;