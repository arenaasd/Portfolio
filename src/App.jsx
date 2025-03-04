import { Canvas } from "@react-three/fiber";
import ParticleScene from "./utils/ParticleScene";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" && (
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 5] }} style={{ background: "#040607" }}>
            <ParticleScene />
          </Canvas>
        </div>
      )}
      <Navbar />
      <div className="content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
