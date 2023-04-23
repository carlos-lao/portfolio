// external
import { useState, useRef, useEffect } from 'react'

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

const Projects = ({ displayProject }) => {
    const [showSubtitle, setShowSubtitle] = useState(false)

    const animationIndicator = useRef(null)

    useEffect( ()=> {
        const controlSubtitle = () => {
            const {y, height} = animationIndicator.current.getClientRects()[0];
            setShowSubtitle(y < window.innerHeight - (3 * height) && y > (4 * height))
        };

        controlSubtitle();
        window.addEventListener('scroll', controlSubtitle)

        return () => {
            window.removeEventListener('scroll', controlSubtitle)
        }
    }, [] );

    return (
        <div id='projects' className='section d-flex'>
            <div className='container my-auto'>
                <div className='row'>
                    <div className='col-12 col-xxl-5 d-flex flex-column justify-content-center align-items-center align-items-xxl-start'>
                        <h2 id="projects-title" className='mt-3 mb-3'>PROJECTS<span id="underscore"></span></h2>
                        <p id='projects-subtitle' className={`text-center opacity-${showSubtitle ? '100' : '0'}`} ref={animationIndicator}>a sneak peek at some of my work...</p>
                    </div>
                    <div id='projects-wrapper' className='col-12 col-xxl-7 d-flex flex-column align-items-stretch'>
                        {projects.map((project, i) => (
                            <ProjectCard src={project} key={i} onClick={() => {project.finished && displayProject(project)}}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;