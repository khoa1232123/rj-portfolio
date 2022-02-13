import React from "react";
import { IkoCol, IkoContainer, IkoRow } from "./iko";
import Button from "./iko/Button";

const Header = () => {
  return (
    <IkoContainer fluid className="header">
      <IkoRow>
        <IkoCol col={3}>
          <div className="header__left">
            <div className="header__logo">
              <a href="/">
                <div className="logo">iKo</div>
              </a>
            </div>
          </div>
        </IkoCol>
        <IkoCol col={9}>
          <div className="header__right">
            <div className="header__menu">
              <div className="header__menu__item">Work</div>
              <div className="header__menu__item">About</div>
              <div className="header__menu__item">Contact</div>
              <div className="header__menu__item">Other</div>
            </div>
            <div className="header__darkmode">
              <Button>Darkmode</Button>
            </div>
          </div>
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default Header;
