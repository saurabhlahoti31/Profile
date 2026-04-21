import React from 'react'
import "./home_page_css/home.css";
import Profile from "../Image/profile.JPG";

export const Home = () => {
  return (
    <div className="Home container">
      <section className="hero-section">
        <div className="profile-img-container">
          <img src={Profile} alt="Saurabh Lahoti" className="profile-img"/>
        </div>
        <h1 className="home-title">Hi, I'm Saurabh Lahoti</h1>
        <p className="home-subtitle">
          A Full Stack Developer crafting beautiful, interactive, and high-performance digital experiences.
        </p>
      </section>

      <div className="Skill">
        <h1>Core Stack</h1>
        <ul>
          <li>
            <span className="skill-icon">🚀</span>
            JavaScript
          </li>
          <li>
            <span className="skill-icon">⚛️</span>
            React
          </li>
          <li>
            <span className="skill-icon">🟢</span>
            Node.js
          </li>
          <li>
            <span className="skill-icon">🐍</span>
            Python
          </li>
        </ul>
      </div>
    </div>
  )
}