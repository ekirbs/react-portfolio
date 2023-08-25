import React from "react";
import { AiOutlineClockCircle, AiOutlineHome } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { SiNetflix } from "react-icons/si";
import { TiWeatherDownpour } from "react-icons/ti";
import PropTypes from "prop-types";
import "./projectsNavbar.css";

const ProjectsNavbar = ({ currentPage, handlePageChange }) => {
  const projects = [
    { id: "Main", name: "Main", icon: AiOutlineHome },
    { id: "Clock", name: "Clock", icon: AiOutlineClockCircle },
    { id: "Netflix", name: "Netflix", icon: SiNetflix },
    { id: "VariableStyle", name: "VariableStyle", icon: GiSettingsKnobs },
    { id: "Weather", name: "Weather", icon: TiWeatherDownpour },
  ];

  return (
    <nav className="projects-navbar">
      <ul className="projects-list">
        {projects.map((project) => (
          <li
            key={project.id}
            className={currentPage === project.id ? "active" : ""}
          >
            <div onClick={() => handlePageChange(project.id)} className="icon-container">
              {project.icon && <project.icon className="p-nav-icon" />}
              {project.name}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

ProjectsNavbar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default ProjectsNavbar;