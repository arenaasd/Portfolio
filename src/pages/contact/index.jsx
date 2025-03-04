import React from "react";
import { Animate } from 'react-simple-animate'
import Header from "../../components/Header"
import { MdContactEmergency } from "react-icons/md"
import './style.css'

const Contact = () => {
    return (
        <div className="contact-me">
            <Header
                title={"Contact Me"}
                icon={<MdContactEmergency size={40}/>}
            />
            <div className="contact-content">
                <Animate
                    play
                    delay={0}
                    duration={1}
                    start={{
                        transform: "translatex(-200px)"
                    }}
                    end={{
                        transform: "translatex(0px)"
                    }}
                >
                    <h3 className="content-header-text">Let's Talk</h3>
                </Animate>
                <Animate
                    play
                    delay={0}
                    duration={1}
                    start={{
                        transform: "translatex(200px)"
                    }}
                    end={{
                        transform: "translatex(0px)"
                    }}
                >
                    <div className="contact-form">
                        <div className="input-wrapper">
                            <div>
                                <input required type="text" name="name" className="input-name" />
                                <label htmlFor="name" className="name-lebal">Name</label>
                            </div>
                            <div>
                                <input required type="email" name="email" className="input-email" />
                                <label htmlFor="email" className="email-lebal">Email</label>
                            </div>
                            <div>
                                <textarea rows={5} required type="text" name="description" className="input-description" />
                                <label htmlFor="description" className="description-lebal">Description</label>
                            </div>
                        </div>
                        <button>Sumbit</button>
                    </div>

                </Animate>
            </div>
        </div>
    )
}

export default Contact;