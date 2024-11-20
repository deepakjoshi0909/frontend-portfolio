// src/components/AboutSection.js
import React from 'react';
import './AboutSection.css';
import Image from '../assets/profile.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-5 section bg-dark">
      <div className="container">
        <h2 className="text-center mb-4 about-heading" data-aos="fade-down">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <ul className="timeline">
              <li data-aos="fade-up">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h5>Frontend Engineer</h5>
                  <p>Creating modern web experiences with React, JavaScript, and CSS.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h5>Problem Solver</h5>
                  <p>Solving algorithmic challenges with dynamic programming and more.</p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h5>Team Player</h5>
                  <p>Collaborating in teams to deliver efficient solutions.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <img
              src={Image}
              className="img-fluid rounded shadow-lg"
              style={{ width: '100%', maxWidth: '500px', height: 'auto' }} 
              alt="About me"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
