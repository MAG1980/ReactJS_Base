import { createStore, compose } from "redux";
// import { profileReducer } from "./profile/reducer";
// import { chatsListReducer } from "./chats/reducer";
import { storeCombineReducer } from "./combineReducers/";
import thunk from "redux-thunk";
// import { addMessageWithThunk } from "./middlewares/addMessageWithThunk";

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__) ||
  compose;

export const store = createStore(
  storeCombineReducer,
  // profileReducer,
  // composeEnhancers(addMessageWithThunk(thunk))
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
