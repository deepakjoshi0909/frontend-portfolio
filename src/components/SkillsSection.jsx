// src/components/SkillsSection.js
import React from 'react';
import './SkillsSection.css'; // Import the CSS file for styles

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 80 },
  ];

  return (
    <section id="skills" className="py-5 bg-dark text-white section">
      <div className="container">
        <h2 className="text-center mb-4 skills-heading">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="skill-card" data-aos="zoom-in" data-aos-duration="500" data-aos-delay={index * 100}>
                <div className="skill-header">
                  <h5 className="skill-name">{skill.name}</h5>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: `hsl(${skill.level * 1.2}, 70%, 50%)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
