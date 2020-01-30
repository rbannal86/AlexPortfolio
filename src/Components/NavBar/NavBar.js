import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const handleNavClick = id => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar__navbar">
      <button
        className="navbar__button"
        onClick={() => handleNavClick("aboutme__top")}
      >
        About Me
      </button>
      <button
        className="navbar__button"
        onClick={() => handleNavClick("projects__top")}
      >
        Projects
      </button>
      <button
        className="navbar__button"
        onClick={() => handleNavClick("contact__top")}
      >
        Contact Me
      </button>
    </div>
  );
};

export default NavBar;
