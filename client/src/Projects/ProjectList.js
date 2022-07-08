import React, { useState } from "react";
import "./projects.css";
import { FcExpand,FcCollapse } from "react-icons/fc";
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

  return (
    <div className="project-list">
      <div className="title-with-dropdown">
        <h5>{name}</h5>
        <p><FcExpand size={20}/></p>
      </div>

      <div className="tech-stack">
        <span>{tech1}</span>
        <span>{tech2}</span>
        <span>{tech3}</span>
        <span>{tech4}</span>
      </div>

      <div className="live-demo-button">
        <p>
          <a target="_" href={projectlink}>
            Live Demo
          </a>{" "}
        </p>
      </div>
      <p className="description">{des}</p>
    </div>
  );
};

export default ProjectList;
