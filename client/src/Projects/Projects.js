import React from 'react';
import "./projects.css";
import ProjectList from './ProjectList';

const Projects = () => {

    const projectList = [
        {
            name:"MERN Stack Job Portal",
            des:"This project is to publish job for the employer and apply job for smployees",
            tech1:"Node JS",
            tech2: "React JS",
            tech3:"MogoDB",
            tech4:"Expres JS",
            projectlink:"https://react-company-profile.netlify.app/"
        },
        {
            name:"MERN Stack Event Management",
            des:"This project is to publish job for the employer and apply job for smployees",
            tech1:"Node JS",
            tech2: "React JS",
            tech3:"MogoDB",
            tech4:"Expres JS",
            projectlink:"https://react-company-profile.netlify.app/"
        },
        {
            name:"MERN Stack Event Management",
            des:"This project is to publish job for the employer and apply job for smployees",
            tech1:"Node JS",
            tech2: "React JS",
            tech3:"MogoDB",
            tech4:"Expres JS",
            projectlink:"https://react-company-profile.netlify.app/"
        },
        {
            name:"MERN Stack Event Management",
            des:"This project is to publish job for the employer and apply job for smployees",
            tech1:"Node JS",
            tech2: "React JS",
            tech3:"MogoDB",
            tech4:"Expres JS",
            projectlink:"https://react-company-profile.netlify.app/"
        },
        {
            name:"MERN Stack Event Management",
            des:"This project is to publish job for the employer and apply job for smployees",
            tech1:"Node JS",
            tech2: "React JS",
            tech3:"MogoDB",
            tech4:"Expres JS",
            projectlink:"https://react-company-profile.netlify.app/"
        },
        {
            name:"MERN Stack Event Management",
            des:"This project is to publish job for the employer and apply job for smployees",
            tech1:"Node JS",
            tech2: "React JS",
            tech3:"MogoDB",
            tech4:"Expres JS",
            projectlink:"https://react-company-profile.netlify.app/"
        },
    ]

  return (
    <div className='container'>
        <div className='row'>
            {projectList.map((item,index)=>(
                <div className='col-xl-6, col-lg-6, col-md-12, col-sm-12'>
                    <ProjectList key={index} {...item} index={index}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects