// src/pages/About.js
import React from "react";
import bannrt_img from "./aboust.jpg";

function About() {
  return (
    <div className="about_index">
      <div className="about_banner">
        <img src={bannrt_img} alt="About Banner" className="image" />
        <h2>ABOUT US</h2>
        <div></div>
      </div>
      <div className="about_context">
        <div className="about_mega">
          <h2>Welcome to the AdRoadster Lahore</h2>
          <p>
            We are a trusted and strong outdoor advertising company, delivering
            the client’s campaign to Million of viewers. We are offering a
            variety of services to our clients including Media placement,
            advertising, billboards, and site arrangements, and dedicated to
            serving the needs of customers. Our staff provides professional
            skills and services to answer your questions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
