import React, { useState } from "react";
import { accordion } from "../../data";

const AccordionItem = ({ item }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`accordion__item ${active ? "active" : ""}`}>
      <div className="accordion__header" onClick={() => setActive(!active)}>
        <div className="accordion__title">{item.title}</div>
        <div className="accordion__icon">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="accordion__content">{item.content}</div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion">
      {accordion.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Accordion;
