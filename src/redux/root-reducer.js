import userReducer from "./user/user.reducer";
import { combineReducers } from "redux";

// export default (state = {}, action) => {
//   return {
//     a: "hi",
//     user: userReducer(undefined, action)
//   };
// };

export default combineReducers({
  user: userReducer
});
