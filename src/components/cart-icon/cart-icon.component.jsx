import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
};

// Normal mapStateToProps, without reselect
// const mapStateToProps = state => {
//   console.log("Im cart icon and rerendered.");
//   return {
//     itemCount: state.cart.cartItems.reduce(
//       (accumulatedQuantity, cartItem) =>
//         accumulatedQuantity + cartItem.quantity,
//       0
//     )
//   };
// };

// Without createStructuredSelector
// const mapStateToProps = state => {
//   console.log("Im cart icon. im being called.");
//   return {
//     itemCount: selectCartItemsCount(state)
//   };
// };

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

// export default connect(null, {toggleCartHidden})(CartIcon);
// export default connect(null, mapDispatchToProps)(CartIcon);
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
