import React from 'react';
//import { MDBTimeline, MDBTimelineStep, MDBIcon } from "mdbreact";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from "./timeline";
import { ReactComponent as WorkIcon } from "../../work.svg";
import { ReactComponent as SchoolIcon } from "../../school.svg";
import './index.css';

function Education() 
    {
        let workIconStyles = { background: "#06D6A0" };
        let schoolIconStyles = { background: "#f9c74f" };
        
        return(
       <div className="timeline">
         <div className="container">
           <br></br>
           <h1>Education: </h1>
           <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          // let showButton =
          //   element.buttonText !== undefined &&
          //   element.buttonText !== null &&
          //   element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              <p id="buttontext">{element.buttonText}</p>
              {/* {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )} */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
  
      </div>
        </div>
     )
     
    }
export default Education;