import React from "react";
import "../scss/Footer.scss";
import {BsFacebook, BsTwitter,BsInstagram} from 'react-icons/bs'
import {FaYoutube} from 'react-icons/fa'
import footerBg from "../assets/footer1.jpg";
import {GiWindow} from 'react-icons/gi'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright">
          <p>Copyright &copy;2022 Future Windows and Doors Limited. All Rights Reserved</p>
        </div>
        <div className="footer-bg">
          <img src={footerBg} alt="room-img" />
        </div>
        <div className="wrapper">
          <div className="footer_content">
            <div className="logo">
              <GiWindow className="logo_icon"/>
            </div>
            <div className="site_links">
              <ul className="links_items">
                <li className="link">Home</li>
                <li className="link">Why uPVC</li>
                <li className="link">Why Us</li>
              </ul>
            </div>
            <div className="socials">
              <div className="social_icon">
                <BsFacebook className="icon"/>
              </div>
              <div className="social_icon">
                <BsTwitter className="icon"/>
              </div>
              <div className="social_icon">
                <BsInstagram className="icon" />
              </div>
              <div className="social_icon">
                <FaYoutube className="icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
