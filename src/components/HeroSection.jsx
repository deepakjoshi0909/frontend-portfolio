// src/components/HeroSection.js
import React from 'react';
import 'animate.css';
import './HeroSection.css'; // Import custom CSS for HeroSection
import profileImage from '../assets/profile.jpg'; // Import your image

const HeroSection = () => {
  return (
    <section id="home" className="hero-section vh-100 d-flex justify-content-center align-items-center position-relative text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="hero-content animate__animated animate__fadeIn">
          <div className="image-container mb-4">
            <img src={profileImage} alt="Deepak Joshi" className="profile-image" />
          </div>
          <h1 className="hero-title">Hello, I'm</h1>
          <h2 className="hero-name">Deepak Joshi</h2>
          <p className="lead">Web Developer | Problem Solver </p>
          <a href="#projects" className="btn btn-light btn-lg animate__animated animate__pulse animate__infinite">View My Work</a>
          <div className="social-icons mt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="wave"></div>
    </section>
  );
}

export default HeroSection;
