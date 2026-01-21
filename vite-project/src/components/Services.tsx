import React from "react";
import "./Services.css";

const instruments = ["Violin", "Guitar", "Piano", "Ukulele", "Singing"];
const events = ["Weddings", "Birthdays", "Funerals", "Other Special Occasions"];

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <h3>Music Lessons</h3>
      <div className="instruments-container">
        {instruments.map((inst) => (
          <div key={inst} className="instrument-card">
            <p>{inst}</p>
          </div>
        ))}
      </div>

      <h3>Event Performances</h3>
      <div className="events-container">
        {events.map((event) => (
          <div key={event} className="event-card">
            <p>{event}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
