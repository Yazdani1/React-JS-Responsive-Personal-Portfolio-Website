import React, { useEffect } from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const Home = ({ toggleTheme, theme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={() => toggleTheme()}>
        {theme === "light" ? (
          <p className="theme-iconss">
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <Fade left>
        <div className="container home-content">
          <h1>Hi I'm</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Web Development",
                  "Mobile App Development",
                  "UI/UX Design",
                  "Product Marketing",
                  "Digital Marketing",
                  "Customer Service",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h2>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <div className="hire-me-button">Hire me</div>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
