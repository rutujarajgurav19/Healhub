import React from "react";

import "./About.css";

function About() {
  return (
    <div className="about-container">
      <img
        src="/src/assets/about.png"
        alt="About HealHub"
        className="about-image"
      />
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to HealHub, a safe space dedicated to your emotional well-being. 
          At HealHub, we believe in the power of healing, connection, and growth. 
          Our mission is to provide mental health support that empowers individuals 
          to lead fulfilling, balanced lives. 
          <br />
          We understand that mental health is just as important as physical health, 
          and at times, we all need a little extra help. Whether you're facing stress, 
          anxiety, depression, or simply feeling overwhelmed by life’s challenges, 
          our team of compassionate professionals is here to listen, guide, and support you.
        </p>
      </div>

    </div>
  );
}

export default About;
