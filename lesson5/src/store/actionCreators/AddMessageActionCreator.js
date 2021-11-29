import { MESSAGES_ADD_MESSAGE } from "../messages/action";
export const addMessageActionCreator = (chatID, chatMessage) => ({
  type: MESSAGES_ADD_MESSAGE,
  chatID: chatID,
  message: {
    id: chatMessage.id,
    author: chatMessage.author,
    text: chatMessage.text,
  },
});
