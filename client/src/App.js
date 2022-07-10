import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import About from "./About/About";
import TechStack from "./TechStack/TechStack";
import Tools from "./Tools/Tools";
import Contact from "./Contact/Contact";
import Feedback from "./Feedback/Feedback";
import Projects from "./Projects/Projects";
import NavbarMobile from "./Sidebar/NavbarMobile";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import WorkExperience from "./WorkExperience/WorkExperience";
import Education from "./Education/Education";

const App = () => {
  return (
    <div>
      <NavbarMobile />
      <Sidebar />
      <About />
      <WorkExperience />
      <TechStack />

      <Education />
      <Projects />
      <Feedback />

      <Contact />

      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </div>
  );
};

export default App;
