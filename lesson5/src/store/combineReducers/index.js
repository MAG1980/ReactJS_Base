import { combineReducers } from "redux";
import { profileReducer } from "../profile/reducer";
import { chatsReducer } from "../chats/reducer";
import { messagesReducer } from "../messages/reducer";

export const storeCombineReducer = combineReducers({
  messagesReducer,
  profileReducer,
  chatsReducer,
});
