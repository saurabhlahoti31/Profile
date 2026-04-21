import React from 'react'
import "./profile_page_css/profile.css";
import profileImg from "../Image/profile.JPG";

export const Profile = () => {
  return (
    <div className="profile-page container">
      <div className="profile-card animate-fade-in-up">
        {/* Hero Section */}
        <div className="profile-hero">
          <div className="profile-avatar-container">
            <div className="profile-avatar-glow"></div>
            <img src={profileImg} alt="Saurabh Lahoti" className="profile-avatar" />
          </div>
          <div className="profile-info">
            <h1>Saurabh Lahoti</h1>
            <p className="subtitle">Full Stack Developer</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="profile-content">
          <div className="about-section">
            <h2>About Me</h2>
            <p>
              Hi, I'm Saurabh Lahoti, a passionate web developer with over 2 years of experience 
              in building dynamic and responsive web applications. I specialize in modern 
              technologies like React, Node.js, and advanced CSS architectures.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating user-centric 
              designs that solve real-world problems. My journey in tech is driven by 
              continuous learning and a desire to build things that make a difference.
            </p>
          </div>

          <div className="skills-sidebar">
            <h3>Key Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">HTML</span>
              {/* <span className="skill-tag"></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
