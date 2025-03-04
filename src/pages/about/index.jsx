import React from "react";
import "./style.css"
import Header from "../../components/Header";
import { Animate } from "react-simple-animate";
import {BsInfoCircleFill} from 'react-icons/bs'
import {FaDev, FaDatabase, FaGlobe} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
const About = () => {
    const personalDetails = {
        name: { label: "Name", value: "Arsalan Durrani" },
        email: { label: "Email", value: "arsalancodes596@gmail.com" },
        age: { label: "Age", value: 19 },
        address: { label: "Address", value: "Quetta, Pakistan" }
    };

    const summary =
        "Full-Stack Developer with expertise in the MERN stack, building fast, secure, and scalable web apps. Skilled in Node.js, MongoDB, and JWT authentication, optimizing APIs for <500ms response times. Experienced in creating intuitive UI/UX and reducing system errors by 40%. Passionate about clean code, performance tuning, and seamless user experiences. NAVTTC-certified with hands-on project experience.";

    return (
        <section className="About">
            <Header title={"About Me"} icon={<BsInfoCircleFill size={40}/>} />

            <div className="about-content">
                <div className="personal-content">    
                     <Animate
                    play
                    duration={1.5}
                    delay={0.5}
                    start={{
                        transform: "translateX(-900px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <h3>Full Stack Developer</h3>
                    <p>{summary}</p>
                </Animate>

                <Animate
                    play
                    duration={1.5}
                    delay={0.5}
                    start={{
                        transform: "translateX(500px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <h3 className="personal-header">Personal Details</h3>
                    <ul>
                        {Object.values(personalDetails).map((item, i) => (
                            <li key={i}>
                                <span className="about-title">{item.label}</span>
                                <span className="about-value">{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </Animate>
                </div>
                
                <div className="services-content">
                   <div className="inner-service">
                   <div className="icon-container icon-1">
                        <FaDev size={60} color="var(--yellow-theme-main2-color)"/>
                    </div>
                    <div className="icon-container icon-2">
                        <FaDatabase size={60} color="var(--yellow-theme-main2-color)"/>
                    </div>
                    <div className="icon-container icon-3">
                        <SiJavascript size={60} color="var(--yellow-theme-main2-color)"/>
                    </div>
                    <div className="icon-container icon-4">
                        <FaGlobe size={60} color="var(--yellow-theme-main2-color)" />
                    </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default About;
