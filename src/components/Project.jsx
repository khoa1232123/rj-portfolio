import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project__content">
        <div className="project__img">
          <img src={project.img} alt="" />
        </div>
      </div>
      <div className="project__title">{project.name}</div>
    </div>
  );
};

export default Project;
