import React from "react";
import { blogs } from "../data";
import { Button, IkoCol, IkoContainer, IkoRow, Title } from "./iko";

const RecentBlogs = () => {
  return (
    <IkoContainer fluid className="recent-blogs">
      <IkoRow>
        <IkoCol>
          <Title>Recent Blogs</Title>
        </IkoCol>
      </IkoRow>
      <IkoRow className="recent-blogs__list">
        {blogs.map((item, index) => (
          <IkoCol key={index} className="recent-blogs__item">
            <div className="recent-blogs__content">
              <div className="recent-blogs__title">{item.title}</div>
              <div className="recent-blogs__date">{item.date}</div>
              <div className="recent-blogs__btn">
                <Button iconRight icon="fas fa-link">
                  See Now
                </Button>
              </div>
            </div>
          </IkoCol>
        ))}
      </IkoRow>
    </IkoContainer>
  );
};

export default RecentBlogs;
