import React from "react";
import GalleryOne from "../assets/window_one.jpg";
import GalleryTwo from "../assets/window_two.jpg";
import GalleryThree from "../assets/window_three.jpg";
import GalleryFour from "../assets/window_four.png";
import "../scss/Benefits.scss";
const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits_container">
        <div className="benefits_wrapper">
          <div className="gallery">
            <img src={GalleryOne} alt="" />
            <img src={GalleryTwo} alt="" />
            <img src={GalleryThree} alt="" />
            <img src={GalleryFour} alt="" />
          </div>
          <div className="content">
            <div className="topLine">
              <h3>The benefits of PVC</h3>
            </div>
            <div className="headLine">
              <h2>Why uPVC?</h2>
            </div>
            <div className="description">
              <p>
                UPVC windows and Doors are made of a range of high quality local
                and European components to ensure your teh best of thermal
                insulation, noise and security. You can be confident that our
                solutions will be able to handle the toughest kiwi conditions.
                Our award-winning solutions help achieve warmer, safer, quieter
                and greener homes, ensuring hight levels of comfort for you and
                your family.
              </p>
              <button className="btn-secondary">More Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
