import { CHATS_REMOVE_CHAT } from "../chats/action";

export const RemoveChatActionCreator = (chatID) => {
  return {
    type: CHATS_REMOVE_CHAT,
    id: chatID,
  };
};
