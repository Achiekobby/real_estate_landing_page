import React from 'react'
import { galleryData } from '../Data/Gallery'
import galleryBg from "../assets/bg2.jpg"
import "../scss/Gallery.scss"

const Gallery = () => {
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
          <div className="gallery_images">
            <div className="image_card">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery