import React from "react";
import "../scss/Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="wrapper">
          <div className="contact_card">
            <div className="content">
              <div className="headLine">
                <h1>Make Beautiful Interior with </h1>
                <h2>Future Windows</h2>
                <p>
                  The goal at Future Windows has always been to deliver products
                  and services that represents both exceptional quality and
                  fantastic value for money.
                </p>
              </div>
            </div>
            <div className="contact-btn">
              <button className="cnt-btn">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
