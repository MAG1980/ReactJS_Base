import { MESSAGES_DELETE_MESSAGES } from "../messages/action";

export const MessagesDelete = (chatID) => ({
  type: MESSAGES_DELETE_MESSAGES,
  chatID,
});
