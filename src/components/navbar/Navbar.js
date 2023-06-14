import React, { useState } from "react";
import "../../styles/navbar/Navbar.css";
import logo from "../../Assets/DesearchDaoLogo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUser,
  faCoins,
  faVoteYea,
  faChevronDown,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { ConnectWallet } from "@thirdweb-dev/react";

function Navbar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuOpenCf, setSubmenuOpenCf] = useState(false);

  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleSubmenuClose = () => {
    setSubmenuOpen(false);
  };

  const handleSubmenuToggleCf = () => {
    setSubmenuOpenCf(!submenuOpenCf);
  };

  const handleSubmenuCloseCf = () => {
    setSubmenuOpenCf(false);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} height="80px" width="150px" alt="logoImg" />
      </Link>

      <ul className="navbar">

        <li>
          <NavLink activeClassName="active" to="/showcase">
            <FontAwesomeIcon icon={faChartLine} className="icons" />
            Showcase
          </NavLink>
        </li>


        <li
          className={`has-submenu ${submenuOpen ? "open" : ""}`}
          onMouseEnter={handleSubmenuToggle}
          onMouseLeave={handleSubmenuClose}
        >
          <NavLink to="/dao-member">
            <FontAwesomeIcon icon={faUser} className="icons" />
            DAO Member
          </NavLink>
          <FontAwesomeIcon icon={faChevronDown} className="submenu-arrow" />
          <ul className="submenu">
            <li>
              <NavLink activeClassName="active" to="/researcher">
                <FontAwesomeIcon icon={faUserGraduate} className="icons" />
                Researcher
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contributor-dashboard">
                <FontAwesomeIcon icon={faUser} className="icons" />
                Contributor
              </NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faVoteYea} className="icons" />
              <NavLink exact activeClassName="active" to="/quadratic-voting">
                Quadratic Voting
              </NavLink>
            </li>
          </ul>
        </li>

        <li
          className={`has-submenu ${submenuOpenCf ? "open" : ""}`}
          onMouseEnter={handleSubmenuToggleCf}
          onMouseLeave={handleSubmenuCloseCf}
        >
          <FontAwesomeIcon icon={faCoins} className="icons" />
          CrowdFunding
          <FontAwesomeIcon icon={faChevronDown} className="submenu-arrow" />
          <ul className="submenu">
            <li>
              <NavLink activeClassName="active" to="/crowd-funding">
                <FontAwesomeIcon icon={faUserGraduate} className="icons" />
                For Dao
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/crowd-funding-researcher">
                <FontAwesomeIcon icon={faUser} className="icons" />
                For Researcher
              </NavLink>
            </li>
          </ul>
        </li>
        <ConnectWallet theme="light" style={{height:"50px"}}/>
      </ul>

      {/* <div className="connect-button-container">
        <ConnectButtonCustom />
        <FontAwesomeIcon icon={faUser} className="connectwalleticon" />
      </div> */}
    </nav>
  );
}

export default Navbar;
