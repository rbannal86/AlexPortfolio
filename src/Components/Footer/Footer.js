import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleToTop = () => {
    let element = document.getElementById("top");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer__main">
      <button onClick={() => handleToTop()}>Back To Top</button>
    </footer>
  );
};

export default Footer;
