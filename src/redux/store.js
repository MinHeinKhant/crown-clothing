import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

// Persist data in localstorage
// const saveToLocalStorage = state => {
//   try {
//     const serializedData = JSON.stringify(state);
//     localStorage.setItem("state", serializedData);
//   } catch (e) {
//     console.log(e);
//   }
// };

// const loadFromLocalStorage = () => {
//   try {
//     const loadedData = localStorage.getItem("state");
//     if (loadedData === null) return undefined;
//     return JSON.parse(loadedData);
//   } catch (e) {
//     console.log(e);
//   }
// };

// Persist data in localstorage
// const preloadedState = loadFromLocalStorage();

// Before production build
// const middlewares = [logger];

// For production
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // Persist data in localstorage
  // preloadedState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistedStore = persistStore(store);

// Persist data in localstorage
// store.subscribe(() => saveToLocalStorage(store.getState()));
// Choose which part of the state to persist
// store.subscribe(() => console.log(store.getState().cart));

// for without redux devtools
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
