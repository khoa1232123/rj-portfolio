import React from "react";
import { Button, IkoCol, IkoContainer, IkoRow, Title } from "./iko";

const Newletter = () => {
  return (
    <IkoContainer fluid className="newletter">
      <IkoRow>
        <IkoCol>
          <Title>Join the Newsletter!</Title>
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol>
          <div className="newletter__txt">
            You’ll receive an email every once in a while about new products,
            courses, and videos!
          </div>
          <div className="newletter__form">
            <IkoRow>
              <IkoCol col={10}>
                <div className="newletter__form__input">
                  <input type="text" placeholder="name@example.com" />
                </div>
              </IkoCol>
              <IkoCol col={2}>
                <div className="newletter__form__submit">
                  <Button>
                    <i className="fas fa-arrow-right"></i>
                  </Button>
                </div>
              </IkoCol>
            </IkoRow>
          </div>
          <div className="newletter__txt bottom">
            We’ll never share your details. See our Privacy Policy
          </div>
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default Newletter;
