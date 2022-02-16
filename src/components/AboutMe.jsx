import React from "react";
import { Accordion, IkoCol, IkoContainer, IkoRow, Title } from "./iko";
import imgIntro from "../imgs/intro.jpg";

const AboutMe = ({ showImg }) => {
  return (
    <IkoContainer fluid className="about-me">
      <IkoRow>
        <IkoCol>
          <Title borderBottom>About Me</Title>
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol>
          <div className="about-me__txt">
            <p>
              I'm a product designer working on various projects on a wide range
              of clients. My skillset lies on creating branding packages &
              websites to deliver the full online experience for new and also
              veteran businesses.
            </p>
            <p>
              You can often find me creating videos about design over on
              YouTube, or sharing my thoughts on my podcast, Dialogue With
              Designers . I'm passionate about giving back and teaching what I
              know to the next generation of designers.‍
            </p>
          </div>
        </IkoCol>
        <IkoCol>
          {showImg ? (
            <div className="about-me__img">
              <img src={imgIntro} alt="" />
            </div>
          ) : (
            <div className="about-me__accordion">
              <Accordion />
            </div>
          )}
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default AboutMe;
