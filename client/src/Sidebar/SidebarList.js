import React from "react";
import "./sidebarlist.css";
import { FcNightPortrait, FcHome, FcTodoList,FcContacts,FcFlowChart } from "react-icons/fc";
import { MdBiotech} from "react-icons/md";
import { FiSlack} from "react-icons/fi";




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
            
                  <MdBiotech size={25} />
                  Tech Stack
        
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
            
                  <FcTodoList size={25} />
                  Projects
        
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
                <MdBiotech size={25} color="orange"/>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
            
                  <FcTodoList size={25}/>
                
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
