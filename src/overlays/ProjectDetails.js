import { useEffect, useRef, useState } from 'react'

import iphone from '../assets/iphone-frame.png'
import laptop from '../assets/laptop-frame.png'

const ProjectDetails = ({ project, hide }) => {
  return (
    <div className='project-details d-inline-block position-relative'>
        <div className='project-details-top-bar d-flex justify-content-center py-2 mb-2'>
          <h3 className='project-details-title'>{project.name}</h3>
          <i className="bi bi-x-lg close-details-button" onClick={hide}></i>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row w-100 position-relative px-3 pb-3'>
          {project.device === "phone" ? 
            (
              <div className='project-demo-iphone mb-2 mb-lg-0 mx-0 mx-xl-5 d-flex position-relative'>
                <img src={project.demo} className='iphone-demo-gif demo'/>
                <img src={iphone} className='demo-frame'/>
              </div>
            ) : (
              <div className='project-demo-laptop mb-2 mb-lg-0 mx-0 mx-xl-2 d-flex justify-content-center align-items-center position-relative'>
                <img src={project.demo} className='laptop-demo-gif demo'/>
                <img src={laptop} className='demo-frame demo-frame-laptop'/>
              </div>
            )
          }
          <div className='project-details-content'>
            <p className='project-details-description'>{project.detailedDescription}</p>
            <div className='d-flex justify-content-center justify-content-lg-start'>
              <a href={project.source} target='_blank' className='btn btn-primary github-btn'>View on Github</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectDetails