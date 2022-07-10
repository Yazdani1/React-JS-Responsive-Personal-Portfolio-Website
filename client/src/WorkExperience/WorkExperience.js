import React, { useState } from "react";
import "./WorkExperience.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFlowChart,
  FcSalesPerformance,
} from "react-icons/fc";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  const data = [
    {
      name: "Google",
      position: "Full stack developer",
      year: "2018-2019",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      techused: [
        {
          techname: "Node js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
      ],
    },

    {
      name: "Facebook",
      position: "Senior developer",
      year: "2019-2020",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

      techused: [
        {
          techname: "Nuxt js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
      ],
    },
    {
      name: "Facebook",
      position: "Senior developer",
      year: "2020-2021",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

      techused: [
        {
          techname: "Nuxt js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
      ],
    },
    {
      name: "Facebook",
      position: "Senior developer",
      year: "2021-2022",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

      techused: [
        {
          techname: "Nuxt js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
        
      ],
    },
  ];

  const colors = [
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
  ];

  return (
    <div className="container">
      <div className="section-title">
        <Flip left>
          <h5>Work-Experience</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <VerticalTimeline>
        {data.map((item, index) => (
          <VerticalTimelineElement
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            dateClassName="date"
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<FcNightPortrait />}
          >
            <h3 className="vertical-timeline-element-titles">{item.name}</h3>
            <h4 className="vertical-timeline-element-subtitles">
              {item.position}
            </h4>
            <div className="row">
              {item.techused.map((tec, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div key={index} className="tech-used-at-work">
                    <p>{tec.techname}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>{item.des}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
