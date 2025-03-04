import React from "react";
import {useNavigate} from 'react-router-dom'
import {Animate} from 'react-simple-animate'
import "./style.css";

const Home = () => {
    const navigate = useNavigate();
    const contact = () => {
        navigate('/contact')
    }
    return(
        <>
        <div className="home">
            <div className="home-wrap">
                <h1>Hi , I am Arsalan Durrani 
                    <br />
                    Full Stack Developer
                </h1>
            </div>
          <Animate
          play
          duration={1.5}
          delay={0.5}
          start={{
            transform: "translateY(550px)"
          }}
          end={{
            transform: "translatex(0px)"
          }}
          >
          <div className="contact">
                <button onClick={contact}>Hire Me</button>
            </div>
          </Animate>
        </div>
        </>
    )
}

export default Home;