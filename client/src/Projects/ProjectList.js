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
  techused,
  techname
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      className="project-list"
      onClick={handleClick}
      // onMouseLeave={() => setShow(false)}
      // onMouseEnter={() => setShow(true)}
    >
      <div className="title-with-dropdown">
        <h5>{name}</h5>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      <div className="row">
        {techused && techused.map((tec, index) => (
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div key={index} className="tech-used-at-work">
              <p>{tec.techname}</p>
            </div>
          </div>
        ))}
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
