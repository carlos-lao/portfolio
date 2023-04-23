import React from 'react'

const ProjectDetails = ({ project, hide }) => {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center mx-5'>
        <p className='text-center'>Project previews will be available soon. Until then, please contact me to request access.</p>
        <button className='btn btn-secondary btn-lg' onClick={hide}>Close</button>
    </div>
  )
}

export default ProjectDetails