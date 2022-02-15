import React, { useState } from "react";
import { clients } from "../data";
import { IkoCol, IkoContainer, IkoRow, Title } from "./iko";

const ClientSay = () => {
  const [itemActive, setItemActive] = useState(0);

  return (
    <IkoContainer fluid className="client-say">
      <IkoRow>
        <IkoCol>
          <Title borderBottom>What Clients Say</Title>
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol>
          <div className="client-say__slider">
            <div className="client-say__list">
              {clients.map((item, index) => (
                <div
                  className={`client-say__item${
                    itemActive === index ? " active" : ""
                  }`}
                  key={index}
                >
                  <div className="client-say__content">{item.content}</div>
                  <div className="client-say__author">
                    <div className="client-say__author__name">
                      - {item.authorName}
                    </div>
                    <div className="client-say__author__desc">
                      {item.authorDesc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="client-say__btn">
              <div
                className="client-say__btn__left"
                onClick={() =>
                  setItemActive(
                    itemActive - 1 < 0 ? clients.length - 1 : itemActive - 1
                  )
                }
              >
                <i className="fas fa-chevron-left"></i>
              </div>
              <div
                className="client-say__btn__right"
                onClick={() =>
                  setItemActive(
                    itemActive + 1 >= clients.length ? 0 : itemActive + 1
                  )
                }
              >
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default ClientSay;
