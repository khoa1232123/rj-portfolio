import React from "react";
import itisme from "../imgs/it-is-me.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__bg"></div>
        <img src={itisme} alt="" className="intro__image" />
      </div>
      <div className="intro__right">
        <div className="intro__right__wrapper">
          <h2 className="intro__txt">Hello, my name is</h2>
          <h1 className="intro__name">Dinh Khoi</h1>
          <div className="intro__title">
            <div className="intro__title__list">
              <div className="intro__title__item">Web Developer</div>
              <div className="intro__title__item">UI/UX Designer</div>
              <div className="intro__title__item">Photographer</div>
              <div className="intro__title__item">Writer</div>
              <div className="intro__title__item">Content Creator</div>
            </div>
          </div>
          <div className="intro__description">
            I am a developer. Specializes in designing and developing news and
            store website projects.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
