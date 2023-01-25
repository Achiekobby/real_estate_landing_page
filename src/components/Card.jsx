import React from "react";
import "../scss/Card.scss";
import { BsCheck2All } from "react-icons/bs";
const Card = ({ title, icon, desc }) => {
  return (
    <div className="card">
      <div className="card_container">
        <div className="card_icon_container">
          <div className="icon_container">
            <div className="icon"> {icon}</div>
          </div>
        </div>
        <div className="card_header">
          <h1 className="title">{title}</h1>
        </div>
        <div className="card_description">
          <p>
            <span>
              <BsCheck2All />
            </span>
            {desc}
          </p>
          <div className="btn">
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
