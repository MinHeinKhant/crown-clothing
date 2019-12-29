import userReducer from "./user/user.reducer";
// import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// For redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = (state = {}, action) => {
  return {
    // a: "hi",
    user: userReducer(state.user, action),
    cart: cartReducer(state.cart, action),
    directory: directoryReducer(state.directory, action),
    shop: shopReducer(state.shop, action)
  };
};

// For redux-persist
export default persistReducer(persistConfig, rootReducer);

// Custom combineReducers before redux-persist
// export default (state = {}, action) => {
//   return {
//     // a: "hi",
//     user: userReducer(state.user, action),
//     cart: cartReducer(state.cart, action)
//   };
// };

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer
// });
