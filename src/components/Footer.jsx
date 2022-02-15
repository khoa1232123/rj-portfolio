import React from "react";
import { IkoCol, IkoContainer, IkoRow } from "./iko";

const Footer = () => {
  return (
    <footer>
      <IkoContainer fluid className="footer">
        <IkoRow>
          <IkoCol>
            <div className="footer__left">
              <div className="footer__logo">
                <a href="/">
                  <div className="logo">iKo</div>
                </a>
              </div>
              <div className="footer__copyright">
                © 2021 Arnau Ros, LLC. All rights reserved.
              </div>
            </div>
          </IkoCol>
          <IkoCol>
            <div className="footer__right">
              <div className="footer__social">
                <div className="footer__social__item">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="footer__social__item">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="footer__social__item">
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </footer>
  );
};

export default Footer;
