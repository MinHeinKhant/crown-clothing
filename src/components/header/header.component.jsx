import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink to="/shop" className="option">
          SHOP
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
