import React, { useState } from 'react'
import "./projects.css"


const ProjectList = ({name,des,tech1,tech2,tech3,tech4,projectlink,index}) => {

  const [show,setShow] = useState(false);

  return (
    <div className='project-list'>



      <h5 style={{marginLeft:"5px"}}>{name}</h5>
      <div className='tech-stack'>

        <span>{tech1}</span>
        <span>{tech2}</span>
        <span>{tech3}</span>
        <span>{tech4}</span>

      </div>
        
    </div>
  )
}

export default ProjectList