import React from 'react'
import "./projects_page_css/projects.css";
import Ecommerce from "../Image/Ecommerce.jpg"
import Collegeproject from "../Image/Collegeproject.jpg"
import Portfolio from "../Image/Portfolio.jpg"
import todo from "../Image/todo list.png";



export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "College Project",
      description: "This is a college project which i made during my college time.",
      tech: ["Html","Javascript", "CSS3"],
      image:Collegeproject,
      link: "https://college-project-gilt-six.vercel.app/"
    },
   
    {
      id: 2,
      title: "Nova Portfolio",
      description: "An ultra-modern portfolio template designed for creative professionals and studios.",
      tech: ["React"],
      image:Portfolio,
      link: "https://portfolio-swart-rho-82.vercel.app/"
    },
    {
      id: 3,
      title: "E-commerce Website",
      description: "This is a e-commerce website which i made using fake store api.",
      tech: ["React","Api","Css"],
      image:Ecommerce,
      link: "https://e-commerce-delta-lilac-79.vercel.app/"
    },
    {
      id: 4,
      title: "To do list app ",
      description: "This is a to do list app which i made using react.",
      tech: ["React","Css"],
      image:Todolist,
      link: "https://to-do-list-challangers.vercel.app/"
    }
  ];

  return (
    <div className="projects-page container">
      <div className="projects-header">
        <h1 className="gradient-text">Featured Projects</h1>
        <p className="subtitle">A collection of my latest work, blending design aesthetics with technical excellence.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.link} className="btn-secondary small">View Demo</a>
                </div>
              </div>
            </div>
            
            <div className="project-info">
              <div className="project-tech-stack">
                {project.tech.map((t, index) => (
                  <span key={index} className="tech-tag">{t}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
