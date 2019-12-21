import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, showCartDropdown }) => {
  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink to="/shop" className="option">
          SHOP
        </NavLink>
        <NavLink to="/contact" className="option">
          CONTACT
        </NavLink>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink to="/signin" className="option">
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {!showCartDropdown && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => {
  const {
    user: { currentUser },
    cart: { hidden }
  } = state;
  return {
    currentUser: currentUser,
    showCartDropdown: hidden
  };
};

export default connect(mapStateToProps)(Header);
