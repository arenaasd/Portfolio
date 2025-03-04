import React, { useState } from "react";
import { Animate } from 'react-simple-animate';
import Header from "../../components/Header";
import { MdContactEmergency } from "react-icons/md";
import './style.css';

const Contact = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    // State to manage alert visibility
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the form data to Formspree
        fetch("https://formspree.io/f/mbldnnrq", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                // Reset form fields upon successful submission
                setFormData({
                    name: '',
                    email: '',
                    description: ''
                });

                // Set success message
                setAlertMessage("Form submitted successfully!");
                setAlertVisible(true);

                // Hide the alert after 5 seconds
                setTimeout(() => {
                    setAlertVisible(false);
                }, 5000);
            } else {
                setAlertMessage("Error submitting the form. Please try again.");
                setAlertVisible(true);

                setTimeout(() => {
                    setAlertVisible(false);
                }, 5000);
            }
        })
        .catch(error => {
            setAlertMessage("Error submitting the form. Please try again.");
            setAlertVisible(true);

            setTimeout(() => {
                setAlertVisible(false);
            }, 5000);
        });
    };

    return (
        <div className="contact-me">
            <Header
                title={"Contact Me"}
                icon={<MdContactEmergency size={40} />}
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
                    {/* Wrap the form elements inside a <form> tag */}
                    <form onSubmit={handleSubmit} action="https://formspree.io/f/mbldnnrq" method="POST">
                        <div className="contact-form">
                            <div className="input-wrapper">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input-name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label htmlFor="name" className="name-lebal">Name</label>
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        className="input-email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label htmlFor="email" className="email-lebal">Email</label>
                                </div>
                                <div>
                                    <textarea
                                        rows={5}
                                        name="description"
                                        className="input-description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label htmlFor="description" className="description-lebal">Description</label>
                                </div>
                            </div>
                            <button type="submit">Submit</button> {/* Changed 'Sumbit' to 'Submit' */}
                        </div>
                    </form>

                    {/* Custom alert for success/error */}
                    {alertVisible && (
                        <div className="custom-alert">
                            {alertMessage}
                        </div>
                    )}
                </Animate>
            </div>
        </div>
    )
}

export default Contact;
