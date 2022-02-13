import React from "react";
import imgIntro from "../imgs/intro.jpg";
import { IkoCol, IkoContainer, IkoRow } from "./iko";

const Intro = () => {
  return (
    <IkoContainer>
      <IkoRow className="intro">
        <IkoCol>
          <div className="intro__wrapper">
            <div className="intro__info">
              I’m Khoi, a graphic designer & content creator based in Barcelona.
              Available for freelance & collaborations.
            </div>
            <div className="intro__img">
              <img src={imgIntro} alt="" />
            </div>
          </div>
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default Intro;
