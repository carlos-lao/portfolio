// external
import { render } from '@testing-library/react'
import { useState } from 'react'

// internal
import { projects } from '../assets'

const ProjectCard = ({ src, onClick }) => (
    <div className='w-100 project-card-wrapper my-3 mx-auto position-relative overflow-hidden w-75' onClick={onClick}>
        <div className={`project-card ${src.finished ? 'project-card-enabled' : 'project-card-disabled'} d-flex w-100 h-100 justify-content-center`}>
            <p className='project-card-text text-center'>{src.description}</p>
        </div>
        <h4 className={`project-card-title ${src.finished ? 'project-card-title-enabled' : 'project-card-title-disabled'} text-center`}>{src.name}</h4>
        {!src.finished && <div className='wip-label wip-label-top text-center'>WIP</div>}
        {!src.finished && <div className='wip-label wip-label-bottom text-center'>WIP</div>}
    </div>
)

const Projects = () => {
    const [displayedProject, setDisplayedProject] = useState(null);

    const renderOverlay = () => (
        <div className='fullscreen-overlay d-flex justify-content-center align-items-center'>
            <button className='btn btn-primary' onClick={() => {setDisplayedProject(null)}}>Close</button>
        </div>
    )

    return (
        <div id='projects' className='section d-flex'>
            {displayedProject != null && renderOverlay()}
            <div className='container my-auto'>
                <div className='row'>
                    <div className='col-12 col-xxl-5 d-flex flex-column justify-content-center align-items-center align-items-xxl-start'>
                        <h2 id="projects-title" className='mb-3 mb-xxl-4'>PROJECTS<span id="underscore"></span></h2>
                        <p id='projects-subtitle' className='text-center'>a sneak peek at some of my work...</p>
                    </div>
                    <div id='projects-wrapper' className='col-12 col-xxl-7 d-flex flex-column align-items-stretch'>
                        {projects.map((project, i) => (
                            <ProjectCard src={project} key={i} onClick={() => {setDisplayedProject(project)}}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;