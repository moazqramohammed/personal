import "./index.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { GiArchiveResearch } from "react-icons/gi";
const Portfolio = function () {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("./data.json").then(res => { setData(res.data.projects) });
    }, []);
    const projects = data.map(pro => {
        return (
            <div className="project-item" key={pro.id}>
                <li>
                    <a href="./"><img src={pro.image} alt="project" /></a>
                </li>
                <div className="overlay-pro">
                    <GiArchiveResearch size="80" className="icon" />
                </div>
            </div>
        )
    })
    return (
        <div className="portfolio">
            <div className="container">
                <h2 className="text-capitalize">projects</h2>
                <p>include work and side projects/experiments.</p>
                <div className="projects-list">
                    <ul className="list-unstyled">
                        {projects}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;