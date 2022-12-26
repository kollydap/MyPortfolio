import React from "react";
import Header from "./components/Header";
import "./App.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Header />

      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
