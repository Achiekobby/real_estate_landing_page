import React, { useState, useEffect, useRef } from "react";
import { galleryData } from "../Data/Gallery";
import galleryBg from "../assets/bg2.jpg";
import "../scss/Gallery.scss";

let new_categories = [
  "All",
  ...new Set(galleryData.map((category) => category.category)),
];

const Gallery = () => {
  const ref = useRef(null)
  const [categories, setCategories] = useState([]);
  const [gallery, setGallery] = useState(galleryData);
  const [isActive, setIsActive] = useState(false)

  const handleFilter = (category_name) => {
    if (category_name === "All") {
      setGallery(galleryData);
    } else {
      const new_gallery = galleryData.filter(
        (data) => data.category === category_name
      );
      setGallery(new_gallery);
    }
  };

  useEffect(() => {
    setCategories(new_categories);
  }, [gallery]);

  return (
    <section className="gallery">
      <div className="container">
        <div className="bg_image">
          <img src={galleryBg} alt="" />
        </div>
        <div className="wrapper">
          <div className="topLine">
            <h3>Update Works</h3>
          </div>
          <div className="heading">
            <h1>Our Work Gallery</h1>
          </div>
          <div className="filter_buttons">
            {categories.map((category) => {
              return (
                <button ref={ref}
                  onClick={() => handleFilter(category)}
                  className="btn-filter"
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="gallery_images">
            {gallery.map((data) => {
              const { id, image } = data;
              return (
                <div key={id} className="image_card">
                  <img src={image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
