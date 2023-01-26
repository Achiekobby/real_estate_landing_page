import React from "react";
import "../scss/Statistics.scss";

//* Statistic Data
import { statisticData } from "../Data/stats_card";

const Statistics = () => {
  console.log(statisticData);
  return (
    <section className="statistics">
      <div className="container">
        <div className="wrapper">
          <div className="statistic_cards">
            {statisticData.map((s_data, index) => {
              const { icon, figure, title } = s_data;
              return (
                <>
                  <div className="stat_card">
                    <div className="icon">
                      <i>{icon}</i>
                    </div>
                    <div className="figure">
                      <h1>{figure}</h1>
                    </div>
                    <div className="title">
                      <p>{title}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
