import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  // Scroll to Contact section when button is clicked
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <h1>Welcome to Pineda Music Tutorial</h1>
      <p>Your destination for music lessons and live performances.</p>
      <button className="hero-btn" onClick={scrollToContact}>
        Book Now
      </button>
    </section>
  );
};

export default Hero;
