import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-links">
          <div className="footer-link-item">
            <h4>Contact</h4>
            <a href="mailto:lahotisaurabh31@gmail.com">lahotisaurabh31@gmail.com</a>
            <a href="tel:+911234567890">+91 1234567890</a>
          </div>
          <div className="footer-link-item">
            <h4>Social</h4>
            <a href="https://www.linkedin.com/in/saurabh-lahoti-6b4781391/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/saurabhlahoti31" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="footer-link-item">
            <h4>Location</h4>
            <a href="#">India</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Saurabh Lahoti. Built with Passion.</p>
        </div>
      </div>
    </footer>
  )
}
