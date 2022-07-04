import React from "react";
import "./sidebarlist.css";
import { FcNightPortrait, FcHome, FcMindMap,FcContacts } from "react-icons/fc";
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
        
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
            
                  <FcMindMap size={25} />
                  Tech Stack
        
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="tools"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
            
                  <FcMindMap size={25} />
                  Tools
        
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
            
                  <FcContacts size={25} />
                  Contact
        
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

            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcMindMap size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="tools"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcMindMap size={25} />
              </Link>
            </li>


            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcContacts size={25} />
              </Link>
            </li>



          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarList;
