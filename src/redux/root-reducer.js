import userReducer from "./user/user.reducer";
import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";

export default (state = {}, action) => {
  return {
    // a: "hi",
    user: userReducer(state.user, action),
    cart: cartReducer(state.cart, action)
  };
};

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer
// });
