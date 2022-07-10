import React, { useState } from "react";
import "./projects.css";
import { FcExpand, FcCollapse } from "react-icons/fc";
import Fade from "react-reveal/Fade";

const ProjectList = ({
  name,
  des,
  tech1,
  tech2,
  tech3,
  tech4,
  projectlink,
  index,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);


  };

  return (
    <div className="project-list" onClick={handleClick} 
    onMouseLeave={() => setShow(false)}
    onMouseEnter={() => setShow(true)}>
      <div className="title-with-dropdown">
        <h5>{name}</h5>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      <div className="tech-stack">
        <span>{tech1}</span>
        <span>{tech2}</span>
        <span>{tech3}</span>
        <span>{tech4}</span>
      </div>

      <div className="tech-stack-mobile-view">
        <p>{tech1}</p>
        <p>{tech2}</p>
        <p>{tech3}</p>
        <p>{tech4}</p>
      </div>

      <div className="live-demo-button">
        <p>
          <a target="_" href={projectlink}>
            Live Demo
          </a>{" "}
        </p>
      </div>
      {show ? <p className="description">{des}</p> : null}
    </div>
  );
};

export default ProjectList;
