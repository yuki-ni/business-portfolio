import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <p>
        Email: <a href="mailto:pinedanene4@gmail.com">pinedanene4@gmail.com</a>
      </p>
      <p>
        Phone: <a href="tel:+639694893599">+63 969 489 3599</a>
      </p>
      <p>
        Address: Merlo St., Zone IV, Santa Barbara, Iloilo City, Philippines, 5002
      </p>
      <p>
        Facebook:{" "}
        <a
          href="https://www.facebook.com/PinedaMusicTutorial"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pineda Music Tutorial
        </a>
      </p>

      
    </section>
  );
};

export default Contact;
