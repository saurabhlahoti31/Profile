import React from 'react'
import "./contact_page_css/contact.css";

export const Contact = () => {
  return (
    <div className="contact-page container">
      <div className="contact-card">
        <h2>Get in Touch</h2>
        <p>
          I'm always open to new opportunities, collaborations, or just a friendly chat. 
          Feel free to reach out through any of the channels below!
        </p>
        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <a href="mailto:lahotisaurabh31@gmail.com" className="contact-value">lahotisaurabh31@gmail.com</a>
          </li>
          <li>
            <span className="contact-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/saurabh-lahoti-6b4781391/" target="_blank" rel="noopener noreferrer" className="contact-value">Saurabh Lahoti</a>
          </li>
          <li>
            <span className="contact-label">GitHub</span>
            <a href="https://github.com/saurabhlahoti31" target="_blank" rel="noopener noreferrer" className="contact-value">saurabhlahoti31</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
