import React from "react";
import { IkoCol, IkoContainer, IkoRow } from "../components/iko";
import { Projects } from "../components";
import project01 from "../imgs/projects/project-1.jpg";
import project02 from "../imgs/projects/project-2.jpg";
import project03 from "../imgs/projects/project-3.jpg";
import project04 from "../imgs/projects/project-4.jpg";

const ProjectDetail = () => {
  return (
    <>
      <IkoContainer fluid className="project-detail">
        <IkoRow>
          <IkoCol>
            <div className="project-detail__thumbnail">
              <img src={project04} alt="" />
            </div>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol>
            <div className="project-detail__title">Title of Project</div>
          </IkoCol>
          <IkoCol>
            <div className="project-detail__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
              feugiat maecenas eu imperdiet varius nec pulvinar sem ultrices.
              Adipiscing viverra mauris, nunc nisl sociis dui. Sagittis,
              curabitur libero urna interdum metus.
            </div>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol col={12}>
            <div className="project-detail__img">
              <img src={project01} alt="" />
            </div>
          </IkoCol>
          <IkoCol col={6}>
            <div className="project-detail__img">
              <img src={project02} alt="" />
            </div>
          </IkoCol>
          <IkoCol col={6}>
            <div className="project-detail__img">
              <img src={project03} alt="" />
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
      <Projects />
    </>
  );
};

export default ProjectDetail;
