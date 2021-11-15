import { createStore } from "redux";
// import { profileReducer } from "./profile/reducer";
// import { chatsListReducer } from "./chats/reducer";
import { storeCombineReducer } from "./combineReducers/";

export const store = createStore(
  storeCombineReducer,
  // profileReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
