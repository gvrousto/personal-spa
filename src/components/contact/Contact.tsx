import React from "react";
import "./Contact.css";

const Contact = () => {
  return(
    <div className="contact-container">
      <div className="contact-box">
        <div className="contact-header">Contact Me</div>
        <div className="contact-list">
          <div className="contact-point">
            <div className="contact-type">Email:</div>
            <a className="contact-link" href="mailto:gvroustouris@gmail.com">
              <div>gvroustouris@gmail.com</div>
            </a>
          </div>
          <div className="contact-point">
            <div className="contact-type">LinkedIn:</div>
            <a className="contact-link" href="https://www.linkedin.com/in/gus-v/">
              https://www.linkedin.com/in/gus-v/
            </a>
          </div>
          <div className="contact-point">
            <div className="contact-type">Github:</div>
            <a className="contact-link" href="https://github.com/gvrousto">
              https://github.com/gvrousto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
