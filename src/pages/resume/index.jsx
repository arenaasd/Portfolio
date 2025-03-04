import React from "react";
import Header from "../../components/Header"
import { FaBlackTie } from "react-icons/fa";
import { VerticalTimeline , VerticalTimelineElement } from "react-vertical-timeline-component";
import {data} from './utils'
import {MdWork} from 'react-icons/md'
import "./style.css"
import 'react-vertical-timeline-component/style.min.css'

const Resume = () => {
    return(
        <div className="resume">
        <Header
        title = {"Resume"}
        icon = {<FaBlackTie size={40}/>}
        />
        <div className="resume-container">
            <div className="education-container">
              <h3 className="education-container-header-text">
                Education
                </h3>
                <VerticalTimeline
                layout="1-column"
                lineColor="var(--yellow-theme-main-color)"
                >
                    {
                        data.education.map((item, i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="education-timeline"
                               contentStyle={{
                                background: "none",
                                color: "var(--yellow-theme-main-color)",
                                border: "1.5px solid var(--yellow-theme-main2-color)"
                            }}
                            icon={<MdWork/>}
                            iconStyle={{
                                background: "black",
                                color: "var(--yellow-theme-main2-color)"
                            }}
                            >
                                <div className="each-education">
                                    <h3 className="each-education-title">
                                        {item.title}
                                    </h3>
                                    <h4 className="each-education-subtitle">
                                        {item.subtitle}
                                    </h4>
                                    <p className="each-education-description">
                                        {item.description}
                                    </p>
                                </div>

                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>  
            </div>
            <div className="experience-container">
                <h3 className="experience-container-header-text">
                    Experience
                </h3>
                <VerticalTimeline
                layout="1-column"
                lineColor="var(--yellow-theme-main-color)"
                >
                    {
                        data.experience.map((item, i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="experience-timeline"
                            contentStyle={{
                                background: "none",
                                color: "var(--yellow-theme-main-color)",
                                border: "1.5px solid var(--yellow-theme-main2-color)"
                            }}
                            icon={<MdWork/>}
                            iconStyle={{
                                background: "black",
                                color: "var(--yellow-theme-main2-color)"
                            }}
                            >
                                <div className="each-experience">
                                    <h3 className="each-experience-title">
                                        {item.title}
                                    </h3>
                                    <h4 className="each-experience-subtitle">
                                        {item.subtitle}
                                    </h4>
                                </div>
                                    <p className="each-experience-description">
                                        {item.description}
                                    </p>

                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>  
            </div>
        </div>
    </div>
    )
}

export default Resume;