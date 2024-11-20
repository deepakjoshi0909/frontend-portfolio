// src/components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css'; // Import the new CSS file
import AOS from 'aos'; // Import AOS for animations

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container py-5">
        <h2 className="text-center mb-4 project-heading">PROJECTS</h2>
        <div className="row">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${index * 100}`}
              key={index}
            >
              <div className="card project-card">
                <img
                  src={`https://via.placeholder.com/400x200?text=Project+${index + 1}`}
                  className="card-img-top"
                  alt={`Project ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title">Project {index + 1}</h5>
                  <p className="card-text">Description of Project {index + 1}</p>
                  <a
                    href="https://example.com"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://example.com"
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
