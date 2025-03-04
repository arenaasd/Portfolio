import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import "./style.css";

const data = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Skills", path: "/skills" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Resume", path: "/resume" }
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    // Handle the toggle for opening/closing the menu
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <nav className="Navbar">
                <div className="nav__container">
                    <Link to="/" className="Nav__logo">
                        <FaUserCircle size={40}/>
                    </Link>
                </div>
                {/* Add the 'active' class dynamically based on toggle state */}
                <ul className={`nav__container__menu ${toggle ? "active" : ""}`}>
                    {data.map((item, key) => (
                        <li key={key} className="nav__container__menu__item">
                            <Link to={item.path} className="nav__container__menu__item__link">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav__icon" onClick={handleToggle}>
                    {toggle ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
