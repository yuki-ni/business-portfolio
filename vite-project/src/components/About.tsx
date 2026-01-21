import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>

      <p>
        At Pineda Music Tutorial, we believe that music education transforms lives. With years of experience in music instruction, we provide personalized lessons that cater to students of all ages and skill levels..
      </p>

      <p>
        Our mission is to inspire creativity, build confidence, and nurture a lifelong love for music. Whether you're picking up an instrument for the first time or refining advanced techniques, our dedicated instructors are here to guide you every step of the way.
      </p>

      <p>
        <strong>Sir Lauro Pineda</strong> is one of our professional tutors and musicians.  
        He has performed on cruise ships and at numerous prestigious events, bringing years of experience and expertise to both teaching and live performances.
      </p>

      <p>
        We offer flexible scheduling, both in-person and online lessons, and a supportive learning environment where students can thrive and reach their musical goals.
      </p>
    </section>
  );
};

export default About;
