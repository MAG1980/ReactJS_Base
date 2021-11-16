import { createStore, applyMiddleware, compose } from "redux";
// import { profileReducer } from "./profile/reducer";
// import { chatsListReducer } from "./chats/reducer";
import { storeCombineReducer } from "./combineReducers/";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  storeCombineReducer,
  // profileReducer,
  // composeEnhancers(addMessageWithThunk(thunk))
  composeEnhancers(applyMiddleware(thunk))

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
