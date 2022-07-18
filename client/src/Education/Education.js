import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import { MdCastForEducation } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  const data = [
    {
      name: "Google",
      position: "Full stack developer",
      year: "2018-2019",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    },

    {
      name: "Facebook",
      position: "Senior developer",
      year: "2019-2020",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    },
    {
      name: "Facebook",
      position: "Senior developer",
      year: "2020-2021",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    },
    {
      name: "Facebook",
      position: "Senior developer",
      year: "2021-2022",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
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
    <div className="container" id="education">
      <div className="section-title">
        <Flip left>
          <h5>Education</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <VerticalTimeline lineColor="#FF8042">
        {data.map((item, index) => (
          <VerticalTimelineElement
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            dateClassName="date"
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<MdCastForEducation />}
          >
            <h3 className="vertical-timeline-element-titles">{item.name}</h3>
            <h4 className="vertical-timeline-element-subtitles">
              {item.position}
            </h4>

            <p>{item.des}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
