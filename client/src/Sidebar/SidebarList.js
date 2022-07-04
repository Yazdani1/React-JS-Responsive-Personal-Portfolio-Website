import React from "react";
import "./sidebarlist.css";
import { FcNightPortrait, FcHome } from "react-icons/fc";
import { Link } from "react-scroll";

const SidebarList = ({ expandSidebar }) => {
  return (
    <>
      {expandSidebar ? (
        <div className="navbar-items">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
          
                  <FcHome size={25} />
                  Home
            
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
            
                  <FcNightPortrait size={25} />
                  About
           

                {/* <div className="each-nav-items">
                  <p>
                    <FcNightPortrait size={25} />
                  </p>
                  <p>About</p>
                </div> */}
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcNightPortrait size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarList;
