import { CHATS_ADD_CHAT } from "../chats/action";
export const addChatActionCreator = (name) => ({
  type: CHATS_ADD_CHAT,
  name,
});
