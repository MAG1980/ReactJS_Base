import { MESSAGES_ADD_MESSAGE } from "../messages/action";
export const addMessageActionCreator = (chatMessage) => ({
  type: MESSAGES_ADD_MESSAGE,
  chatID: chatMessage.chatID,
  message: {
    messageID: chatMessage.messageID,
    author: chatMessage.author,
    text: chatMessage.text,
  },
});
