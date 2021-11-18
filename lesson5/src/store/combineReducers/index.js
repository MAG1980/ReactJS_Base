import { combineReducers } from "redux";
import { profileReducer } from "../profile/reducer";
import { chatsReducer } from "../chats/reducer";
import { messagesReducer } from "../messages/reducer";
import { testAPIReducer } from "../TestAPIWithMiddleware/index";

export const storeCombineReducer = combineReducers({
  messagesReducer,
  profileReducer,
  chatsReducer,
  testAPIReducer,
});
