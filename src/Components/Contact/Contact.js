import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact__main_div" id="contact__top">
      <h2 className="contact__title">Contact Me</h2>
      <div className="contact__links">
        <a href="https://github.com/rbannal86" target="blank">
          GitHub
        </a>
        <a href="mailto:rbannal@gmail.com" target="blank">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/alex-bannow-203b1918a/"
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
