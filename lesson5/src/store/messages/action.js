import { messagesRef } from "../../services/firebase";
import {
  createMessage,
  mapMessageSnapshotToMessage,
} from "../../helpers/index";

export const MESSAGES_ADD_MESSAGE = "MESSAGES_ADD_MESSAGE";
export const MESSAGES_DELETE_MESSAGES = "MESSAGES_DELETE_MESSAGES";
export const MESSAGES_SET_BOT_TIMER_ID = "MESSAGES_SET_BOT_TIMER_ID";
export const REMOVE_MESSAGES_BY_CHAT_ID = "REMOVE_MESSAGES_BY_CHAT_ID";

//message = {id: snapshot.key, {author: '26lo6J579HPINaffXcaXgEGgBkU2', text: '2'}}
export const addMessage = (message, chatId) => ({
  type: MESSAGES_ADD_MESSAGE,
  payload: {
    message,
    chatId,
  },
});

export const removeMessagesByChatID = (chatId) => {
  return {
    type: REMOVE_MESSAGES_BY_CHAT_ID,
    payload: chatId,
  };
};

export const removeMessagesByChatIDWithThunk = (chatId) => (dispatch) => {
  messagesRef.child(chatId).remove(() => {
    dispatch(removeMessagesByChatID(chatId));
  });
};
// removeMessagesByCha-tIDWithThunk;

export const sendMessageWithThunk = (author, text, chatId) => (dispatch) => {
  const userMessage = createMessage(author, text);
  dispatch(addMessage(userMessage, chatId));

  if (author === "Bot") {
    return;
  }

  const botMessage = createMessage("Bot", "Hello");

  dispatch(addMessage(botMessage, chatId));
};

export const addMessageWithThunk = (message, chatId) => () => {
  messagesRef.child(chatId).push(message); //chatMessage: {author,text}
};

export const onTrackingAddMessageWithThunk = (chatId) => (dispatch) => {
  messagesRef.child(chatId).on("child_added", (snapshot) => {
    dispatch(addMessage(mapMessageSnapshotToMessage(snapshot), chatId));
  });
};

export const offTrackingAddMessageWithThunk = (chatId) => (dispatch) => {
  messagesRef.child(chatId).off("child_added");
};

export const onTrackingRemoveMessageWithThunk = (chatId) => (dispatch) => {
  messagesRef.child(chatId).on("child_removed", () => {
    dispatch(removeMessagesByChatID(chatId));
  });
};

export const offTrackingRemoveMessageWithThunk = (chatId) => () => {
  messagesRef.child(chatId).off("child_removed");
};
