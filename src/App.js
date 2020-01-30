import React from "react";
import "./App.css";
import Header from "../src/Components/Header/Header";
import AboutMe from "../src/Components/AboutMe/AboutMe";
import Projects from "../src/Components/Projects/Projects";
import Contact from "../src/Components/Contact/Contact";
import NavBar from "../src/Components/NavBar/NavBar";
import Footer from "../src/Components/Footer/Footer";

function App() {
  return (
    <div className="app_main" id="top">
      <NavBar />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
