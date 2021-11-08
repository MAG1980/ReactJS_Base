import { combineReducers } from "redux";
import { profileReducer } from "../profile/reducer";
import { chatsReducer } from "../chats/reducer";

export const storeCombineReducer = combineReducers({
  profileReducer,
  chatsReducer,
});
