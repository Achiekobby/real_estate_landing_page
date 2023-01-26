import React from 'react'
import "../scss/Services.scss"

//* Images
import ServiceImage from "../assets/glass_window3.jpg"
import ServiceImage2 from "../assets/interior_design_two.jpg"
import ServiceImage3 from "../assets/interior_design_three.jpg"

//* Icons
import {BsBuilding} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {GiSaloonDoors} from 'react-icons/gi'

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="wrapper">
          <div className="topLine">
            <h3>What we offer</h3>
          </div>
          <div className="heading">
            <h1>Our Main Services</h1>
          </div>
          <div className="services_container">
            <div className="service">
              <img src={ServiceImage} alt="" />
              <div className="service_desc">
                <BsBuilding className="icons" />
                <p>Window Services</p>
              </div>
            </div>
            <div className="service">
              <img src={ServiceImage2} alt="" />
              <div className="service_desc">
                <FiSettings className="icons" />
                <p>Window Services</p>
              </div>
            </div>
            <div className="service">
              <img src={ServiceImage3} alt="" />
              <div className="service_desc">
                <GiSaloonDoors className="icons" />
                <p>Window Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services