import React from "react";
import "../scss/Sidebar.scss";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = ({sidebar, handleSidebar}) => {
  return (
    <div className={sidebar ? 'sidebar active' : 'sidebar'}>
      <div className="sidebar_container">
        <div className="sidebar_wrapper">
          <div className="close_icon">
            <FaTimes className="close" onClick={()=>handleSidebar()} />
          </div>

          <div className="nav_links">
            <nav className="links">
              <ul className="link_items">
                <li className="link">
                  <Link to="/">Home</Link>
                </li>
                <li className="link">
                  <Link to="/why-u-pvc">Why uPVC</Link>
                </li>
                <li className="link">
                  <Link to="/why_us">Why Us?</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
