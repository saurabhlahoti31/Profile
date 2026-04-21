import React from 'react'
import "./about_page_css/about.css";

export const About = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="section-title">About Me</h1>
      <div className="about-container">
        <div className="about-text glass-panel">
          <h3>Get to know me!</h3>
          <p>
            I'm a frontend-focused developer passionate about creating interactive applications 
            and experiences on the web. My journey started with a curiosity for how things work, 
            which led me to dive deep into Web Development.
          </p>
          <p>
            When I'm not writing code, I enjoy exploring new design trends, contributing to open-source 
            projects, and learning about emerging technologies. I strive for pixel-perfect implementations 
            and care deeply about user experience and accessible design.
          </p>
        </div>
      </div>
    </section>
  )
}
