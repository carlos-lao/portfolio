// external
import React from 'react'

// internal
import { skills } from '../assets';

const Skill = ({ image, name }) => (
  <div className="d-flex flex-column justify-content-center align-items-center px-4">
    <img src={image} className="skill-logo pb-3"/>
    <h3 className='monospace skill-label'>{name}</h3>
  </div>
)

const Skills = () => {
  return (
    <div id="skills" className='section py-5 py-lg-auto'>
      <div className='container'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2 id='skills-title'>\ SKILLS</h2>
          <div className='w-100 my-auto'>
            <p id='skills-text' className='text-center'>Some technologies I've built with in the past :</p>
            <div className="w-100 position-relative overflow-hidden slider-container">
              <div className="d-flex align-items-center justify-content-around position-absolute slider">
                {skills.map((skill, i) => (
                  <Skill image={skill.image} name={skill.name} key={i} />
                ))}
                {skills.map((skill, i) => (
                  <Skill image={skill.image} name={skill.name} key={i+skills.length} />
                ))}
              </div>
              <div id="left-fade" className='slider-fade'></div>
              <div id="right-fade" className='slider-fade'></div>
            </div>
          </div>
          <button className='btn' id='resume-btn'>SEE FULL RÉSUMÉ</button>
        </div>
      </div>
    </div>
  )
};

export default Skills;