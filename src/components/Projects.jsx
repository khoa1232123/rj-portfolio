import React from "react";
import { Project } from ".";
import { projects } from "../data";
import { IkoCol, IkoContainer, IkoRow, Title } from "./iko";

const Projects = () => {
  return (
    <IkoContainer fluid className="projects">
      <IkoRow>
        <IkoCol>
          <Title borderBottom>Projects</Title>
        </IkoCol>
      </IkoRow>
      <IkoRow className="projects__list">
        {projects.map((item, index) => (
          <IkoCol col={4} key={index}>
            <Project project={item} />
          </IkoCol>
        ))}
      </IkoRow>
    </IkoContainer>
  );
};

export default Projects;
