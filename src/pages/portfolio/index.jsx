import React from "react";
import Header from "../../components/Header"
import image1 from "../../images/page1.png"
import image2 from "../../images/page2.png"
import { FaFileAlt } from "react-icons/fa";
import { useState } from 'react'
import './style.css'

const portfolioData = [
    {
        id: 2,
        name: "Gen-z Ecommerce",
        image: image1,
        link: 'https://gen-z-xi.vercel.app/user/login'
    },
    {
        id: 2,
        name: "CRUD With Mysql",
        image: image2,
        link: 'https://crud-wine-ten.vercel.app/'
    }
];

const filterData = [
    {
        filterid: 1,
        label: "All"
    },
    {
        filterid: 2,
        label: "Development"
    },
    {
        filterid: 3,
        label: "Design"
    }
]


const Portfolio = () => {

    const [filteredvalue, setfilteredvalue] = useState(1)
    const [hoveredvalue, sethoveredvalue] = useState(null)

    function handlefilter(currentid) {
        setfilteredvalue(currentid);
    }

    const filteredItems = filteredvalue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredvalue)


    function handlehover(index) {
        sethoveredvalue(index)
    }

    console.log(hoveredvalue)


    return (
        <div className="portfolio">
            <Header
                title={"Portfolio"}
                icon={<FaFileAlt size={40}/>}
            />
            <div className="portfolio-content">
                <ul className="filter">
                    {
                        filterData.map((item, i) => (
                            <li className={item.filterid === filteredvalue ? 'active' : ""} onClick={() => handlefilter(item.filterid)} key={item.filterid}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio-cards">
                    {filteredItems.map((item, i) => (
                        <div
                            onMouseEnter={() => handlehover(i)}
                            onMouseLeave={() => handlehover(null)}
                            className="cards-item" key={`cardItems${item.name.trim()}`}>
                            <div className="card-image">
                                <a>
                                    <img alt="dummy data" src={item.image} />
                                </a>
                            </div>
                            <div className="overlay">
                                {
                                    i === hoveredvalue && (
                                        <div className="">
                                            <p>{item.name}</p>
                                            <button onClick={() => window.open(item.link, "_blank")}>Visit</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;