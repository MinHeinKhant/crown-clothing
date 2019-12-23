import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length === 0
          ? "empty"
          : cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log("im cart dropdown. i m called");
//   return {
//     cartItems: state.cart.cartItems
//   };
// };

const mapStateToProps = state => {
  console.log("im cart dropdown. im being called");
  return {
    cartItems: selectCartItems(state)
  };
};

export default connect(mapStateToProps)(CartDropdown);
