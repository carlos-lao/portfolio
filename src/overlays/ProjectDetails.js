import React from 'react'

const ProjectDetails = ({ project, hide }) => {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
        <p>Project previews will be available soon. Until then, please contact me to request access.</p>
        <button className='btn btn-primary btn-lg' onClick={hide}>close</button>
    </div>
  )
}

export default ProjectDetails