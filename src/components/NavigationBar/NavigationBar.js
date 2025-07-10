import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";
import KinoLogo from "../../images/NavigationBarImages/KinoLogo.png";

function NavigationBar() {
  const location = useLocation();

  return (
    <nav className="NavigationBar">
      <div className="NavigationBarContent">
        <Link to="/" className="NavigationBarLogo">
          <img src={KinoLogo} alt="Kino Logo" className="KinoLogo" />
        </Link>
        <div className="NavigationBarRightGroup">
          <ul className="NavigationBarLinks">
            <li>
              <Link to="/scientific-research" className={`NavigationBarLinkItem${location.pathname === "/scientific-research" ? " Active" : ""}`}>Scientific Research</Link>
            </li>
            <li>
              <Link to="/about-us" className={`NavigationBarLinkItem${location.pathname === "/about-us" ? " Active" : ""}`}>About Us</Link>
            </li>
          </ul>
          <a href="https://apps.apple.com/us/app/kino-fitness/id6475606094" target="_blank" rel="noopener noreferrer" className="NavigationBarDownloadBtn">
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
