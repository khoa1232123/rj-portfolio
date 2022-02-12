import React from "react";
import award from "../imgs/award.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__left">
        <div className="about__left__wrapper">
          <h2 className="about__title">About Me</h2>
          <div className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed
            dolore, tempora doloribus, sunt tenetur, aut illum iure veritatis
            tempore optio. Nobis nam, ratione nemo reprehenderit impedit fuga
            sed atque?
          </div>
          <div className="about__award">
            <div className="about__award__image">
              <img src={award} alt="" />
            </div>
            <div className="about__award__content">
              <h3 className="about__award__title">
                International Design Award 2022
              </h3>
              <div className="about__award__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__right">
        <div className="about__card bg"></div>
        <div className="about__card">
          <img
            src="https://palada.vn/wp-content/uploads/2021/05/photographer-chuyen-nghiep-can-to-chat-gi.jpg"
            alt=""
            className="about__image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
