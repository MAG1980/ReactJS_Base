import { combineReducers } from "redux";
import { profileReducer } from "../profile/reducer";
import { chatsReducer } from "../chats/reducer";
import { messagesReducer } from "../messages/reducer";
import { testAPIReducer } from "../TestAPIWithMiddleware/index";

import { newData } from "../newTestApi";

export const storeCombineReducer = combineReducers({
  messagesReducer,
  profileReducer,
  chatsReducer,
  testAPIReducer,
  NEW_DATA: newData.reducer,
});
