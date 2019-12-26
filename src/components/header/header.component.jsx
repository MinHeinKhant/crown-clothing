import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";

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

// Without createStructuredSelector
// const mapStateToProps = state => {
//   console.log("im header. im being called");
//   return {
//     currentUser: selectCurrentUser(state),
//     showCartDropdown: selectHidden(state)
//   };
// };

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCartDropdown: selectHidden
});

export default connect(mapStateToProps)(Header);
