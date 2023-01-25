import React from "react";
import "../scss/Duties.scss";
import DutiesBg from "../assets/glass_house.jpg";
import { cardData } from "../Data/CardData";
import Card from "./Card";

const Duties = () => {
  return (
    <section className="duties">
      <div className="duties_container">
        <div className="dutiesBg">
          <img src={DutiesBg} alt="glass_house" />
        </div>
        <div className="duties_wrapper">
          {cardData.map((duties, index) => {
            return <Card index={index} {...duties} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Duties;
