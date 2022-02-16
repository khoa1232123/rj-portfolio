import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project__content">
        <div className="project__img">
          <Link to="/project-detail">
            <img src={project.img} alt="" />
          </Link>
        </div>
      </div>
      <div className="project__title">{project.name}</div>
    </div>
  );
};

export default Project;
