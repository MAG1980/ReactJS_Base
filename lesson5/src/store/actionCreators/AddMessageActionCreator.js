import { MESSAGES_ADD_MESSAGE } from "../messages/action";
export const addMessageActionCreator = (chatMessages) => ({
  type: MESSAGES_ADD_MESSAGE,
  chatID: chatMessages.chatID,
  listMessages: chatMessages.listMessages,
});
