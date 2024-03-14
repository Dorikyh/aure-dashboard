// NavBar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { CodeIcon } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <span>Kotone</span>
          <span className="icon">
            <CodeIcon />
          </span>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/commands"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Commands
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/status"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Status
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/dashboard"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <HamburgetMenuOpen />{" "}
            </span>
          ) : (
            <span className="icon">
              <HamburgetMenuClose />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;