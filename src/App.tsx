import "./App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="page">
      <Nav />
      <div className="terminal">
        <div className="terminal-bar">
          <span className="dot dot-red" />
          <span className="dot dot-amber" />
          <span className="dot dot-green" />
          <span className="terminal-title">kinsley@portfolio — zsh — 120x40</span>
        </div>
        <div className="terminal-body">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Certifications />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
