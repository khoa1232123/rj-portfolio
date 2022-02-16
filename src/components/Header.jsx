import React from "react";
import { Link } from "react-router-dom";
import { IkoCol, IkoContainer, IkoRow } from "./iko";
import Button from "./iko/Button";

const Header = ({ darkmode, setDarkmode }) => {
  return (
    <header>
      <IkoContainer fluid className="header">
        <IkoRow>
          <IkoCol col={3}>
            <div className="header__left">
              <div className="header__logo">
                <Link to="/">
                  <div className="logo">iKo</div>
                </Link>
              </div>
            </div>
          </IkoCol>
          <IkoCol col={9}>
            <div className="header__right">
              <div className="header__menu">
                <div className="header__menu__item">
                  <Link to="/project-detail">Work</Link>
                </div>
                <div className="header__menu__item">
                  <Link to="/about">About</Link>
                </div>
                <div className="header__menu__item">
                  <Link to="/contact">Contact</Link>
                </div>
                <div className="header__menu__item">Other</div>
              </div>
              <div className="header__darkmode">
                <Button onClick={() => setDarkmode(!darkmode)}>Darkmode</Button>
              </div>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </header>
  );
};

export default Header;
