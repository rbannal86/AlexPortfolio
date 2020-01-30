import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header__main">
      <div className="header__text">
        <h1>Alex Bannow.</h1>
        <h2>Full Stack Web Development.</h2>
        <h3>Hello there.</h3>
      </div>
      <img className="header__self" src="Images/self.jpg" alt="Alex" />
    </header>
  );
};

export default Header;
