import React from "react";
import { Button, IkoCol, IkoContainer, IkoRow, Title } from "./iko";

const SayHello = () => {
  return (
    <IkoContainer fluid className="say-hello">
      <IkoRow>
        <IkoCol>
          <Title borderBottom>Say Hello</Title>
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol>
          <div className="say-hello__txt">
            <p>
              Looking to start a new project or just want to say hi? Send me an
              email and I’ll do my best to reply within 24 hrs!
            </p>
            <p>
              If contact forms aren’t your thing... send me an email at
              hello@arnau.design
            </p>
          </div>
        </IkoCol>
        <IkoCol>
          <div className="say-hello__form">
            <IkoRow>
              <IkoCol col={12}>
                <div className="say-hello__form__label">Name</div>
              </IkoCol>
              <IkoCol col={6}>
                <div className="say-hello__form__input">
                  <input type="text" placeholder="First Name" />
                </div>
              </IkoCol>
              <IkoCol col={6}>
                <div className="say-hello__form__input">
                  <input type="text" placeholder="Last Name" />
                </div>
              </IkoCol>
              <IkoCol col={6}>
                <div className="say-hello__form__label">Inquiry *</div>
                <div className="say-hello__form__input">
                  <input type="text" placeholder="Collab/Client" />
                </div>
              </IkoCol>
              <IkoCol col={6}>
                <div className="say-hello__form__label">Email *</div>
                <div className="say-hello__form__input">
                  <input type="text" placeholder="hello@arnau.design" />
                </div>
              </IkoCol>
              <IkoCol col={12}>
                <div className="say-hello__form__label">Message *</div>
                <div className="say-hello__form__input">
                  <textarea placeholder="Hello..."></textarea>
                </div>
              </IkoCol>

              <IkoCol col={12}>
                <div className="say-hello__form__submit">
                  <Button>Send</Button>
                </div>
              </IkoCol>
            </IkoRow>
          </div>
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default SayHello;
