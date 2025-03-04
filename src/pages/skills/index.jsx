import React from "react";
import Header from "../../components/Header";
import { GiSkills } from "react-icons/gi";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from 'rc-progress';
import './style.css';

const Skills = () => {
    return (
        <div className="skills">
            <Header title={"My Skills"} icon={<GiSkills size={40} />} />
            <div className="skills-content">
                {skillsData.map((item, i) => (
                    <div className="inner-content" key={i}>
                        <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{
                                transform: "translateX(-200px)",
                                opacity: 0,
                            }}
                            end={{
                                transform: "translateX(0px)",
                                opacity: 1,
                            }}
                        >
                            <h3 className="category-text">{item.label}</h3>
                            <div className="skills-list">
                                {item.data.map((data, j) => (
                                    <AnimateKeyframes
                                        play
                                        duration={1}
                                        keyframes={["opacity: 1", "opacity: 0"]}
                                        iterationCount={1}
                                    >
                                        <div className="progress-bar-content" key={j}>
                                            <p>{data.skill}</p>
                                            <div className="progress-bar-wrapper">
                                                <Line
                                                    percent={data.percentage}
                                                    strokeWidth={"3"} 
                                                    strokeColor="var(--yellow-theme-main2-color)"
                                                    trailWidth={"3"}
                                                    strokeLinecap="square"
                                                />
                                            </div>
                                        </div>
                                    </AnimateKeyframes>
                                ))}
                            </div>
                        </Animate>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
