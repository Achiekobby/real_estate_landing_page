import React from "react";
import "../scss/Header.scss"
const Header = () => {
  return (
    <section className="header">
      <div className="header_container">
        <div className="header_wrapper">
          <div className="content">
            <div className="topLine">
              <h1>
                <span>New</span> BUILDS AND RENOVATIONS
              </h1>
            </div>
            <div className="headLine">
              <p>
                We Supply and install in both new homes and renovations &
                add_ons
              </p>
            </div>
            <button className="details-btn">Details</button>
          </div>
        <div className="socials">
          <p>Twitter</p>
          <p>Facebook</p>
          <p>linkedIn</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
