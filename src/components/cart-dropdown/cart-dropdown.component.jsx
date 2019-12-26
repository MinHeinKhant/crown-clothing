import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({
  cartItems,
  history,
  dispatch,
  // toggleCartHidden,
  ...others
}) => {
  console.log(others);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");

          // toggleCartHidden();

          // One time dispatching action, no need to write mapDispatchToProps
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log("im cart dropdown. i m called");
//   return {
//     cartItems: state.cart.cartItems
//   };
// };

// Without createStructuredSelector
// const mapStateToProps = state => {
//   console.log("im cart dropdown. im being called");
//   return {
//     cartItems: selectCartItems(state)
//   };
// };
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// const mapDispatchToProps = dispatch => {
//   return {
//     toggleCartHidden: () => dispatch(toggleCartHidden())
//   };
// };

export default withRouter(connect(mapStateToProps)(CartDropdown));
