// external
import { forwardRef } from 'react'

// internal
import { skills, resume } from '../assets';

const Skill = ({ image }) => (
  <div className="d-flex flex-column justify-content-center align-items-center px-4">
    <img src={image} className="skill-logo"/>
  </div>
)

const Skills = forwardRef((props, ref) => {
  return (
    <div id="skills" className='section d-flex' ref={ref}>
      <div className='container my-auto'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2 id='skills-title'>\SKILLS</h2>
          <div className='w-100 mt-3 mb-5'>
            <p id='skills-text' className='text-center'>I've worked with . . .</p>
            <div className="w-100 position-relative overflow-hidden slider-container">
              <div className="d-flex align-items-center justify-content-around position-absolute slider">
                {skills.map((skill, i) => (
                  <Skill image={skill.image} key={i} />
                ))}
                {skills.map((skill, i) => (
                  <Skill image={skill.image} key={i+skills.length} />
                ))}
              </div>
              <div id="left-fade" className='slider-fade'></div>
              <div id="right-fade" className='slider-fade'></div>
            </div>
          </div>
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <button className='btn mt-3' id='resume-btn'>SEE FULL RÉSUMÉ</button>
          </a>
        </div>
      </div>
    </div>
  )
})

export default Skills;