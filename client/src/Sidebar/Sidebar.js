import React, { useState } from "react";
import "./sidebar.css";
import { FcNext, FcPrevious } from "react-icons/fc";
import Home from "../Home/Home";

const Navbar = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  const handleClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-home-section">
      <div
        className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}
        // onMouseLeave={() => setExpandSidebar(false)}
        onMouseEnter={() => setExpandSidebar(true)}
      >
        <div className="icon-for-sidebar-expand">
          <p onClick={handleClick}>
            {expandSidebar ? <FcPrevious size={30} /> : <FcNext size={30} />}
          </p>
        </div>
        <div className="navbar-items">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container home-content">
       <Home/>
      </div>
    </div>
  );
};

export default Navbar;
