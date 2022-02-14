import React from "react";
import { Button, IkoCol, IkoContainer, IkoRow, Title } from "./iko";
import award from "../imgs/award.jpg";

const ContentCreation = () => {
  return (
    <IkoContainer fluid className="content-creation">
      <IkoRow>
        <IkoCol>
          <Title borderBottom>Content Creation</Title>
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol col={6}>
          <div className="content-creation__content">
            <div className="content-creation__txt">
              Join my YouTube channel where I show my design thinking, my
              process, and my personality. The channel has helped over 200K
              designers become more proficient in the tools I use everyday,
              Figma, Webflow & more. Join the journey!
            </div>
            <div className="content-creation__btn">
              <Button>Get in contact about a sponsorship</Button>
            </div>
          </div>
        </IkoCol>
        <IkoCol col={6}>
          <div className="content-creation__img">
            <img src={award} alt="" />
          </div>
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default ContentCreation;
