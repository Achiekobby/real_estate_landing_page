import React from "react";
import Logo from "../assets/logo.png";
import {BiMenu} from "react-icons/bi"
import { Link } from "react-router-dom";
import "../scss/Navbar.scss"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_wrapper">
          <div className="logo">
            <img src={Logo} alt="company_logo" />
          </div>
          <div className="close_nav">
            <BiMenu className="menu"/>
          </div>
          <div className="nav_links">
            <nav className="links">
              <ul className="link_items">
                <li className="link">
                  <Link to='/'>Home</Link>
                </li>
                <li className="link">
                  <Link to ='/why-u-pvc' >Why uPVC</Link>
                </li>
                <li className="link">
                  <Link to='/why_us'>Why Us?</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
