import React from "react";
import "../scss/Choose.scss";

//* data
import { choose_us_data } from "../Data/stats_card";

const Choose = () => {
  return (
    <section className="choose">
      <div className="container">
        <div className="wrapper">
          <div className="topLine">
            <h3>Future windows- UPVC WINDOWS AND DOORS</h3>
          </div>
          <div className="heading">
            <h1>Why Choose Us?</h1>
          </div>
          <div className="heading_desc">
            <p>
              From site survey to installation, Future Windows provides custom
              made uPVC windows and doors to our specifications. We also offer
              consulting services in replacing your existing wooded windows and
              doors
            </p>
          </div>

          <div className="cards_container">
            <div className="cards">
              {choose_us_data.map((data, index) => {
                const { icon, title, desc } = data;
                return (
                  
                  <>
                    <div className="card">
                      <div className="icon">
                        <i>{icon}</i>
                      </div>
                      <div className="title">
                        <h3>{title}</h3>
                      </div>
                      <div className="desc">
                        <p>{desc}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
