import { chatsListRef, profileRef, messagesRef } from "../../services/firebase";
import { mapChatSnapshotToChat } from "../../helpers/index";

export const CHATS_ADD_CHAT = "CHATS_ADD_CHAT";
export const CHATS_REMOVE_CHAT = "CHATS_REMOVE_CHAT";
export const GET_CHATS_LIST = "GET_CHATS_LIST";
export const SET_CHATS = "SET_CHATS";

export const addChatActionCreator = (id, name) => ({
  type: CHATS_ADD_CHAT,
  id,
  name,
});

export const addChat = (chat) => ({
  // chat = { id: snapshot.key, name: "name"}
  type: CHATS_ADD_CHAT,
  payload: chat,
});

export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const removeChat = (chatID) => {
  return {
    type: CHATS_REMOVE_CHAT,
    id: chatID,
  };
};

export const removeChatWithThunk = (chatID) => (dispatch) => {
  chatsListRef.child(chatID).remove(() => {
    dispatch(removeChat(chatID));
  });
};

export const addChatWithThunk = (chat) => {
  chatsListRef.push(chat);
};

export const onTrackingAddChatWithThunk = (dispatch) => {
  chatsListRef.on("child_added", (snapshot) => {
    const ac = mapChatSnapshotToChat(snapshot);
    console.log(ac);
    dispatch(addChat(ac));
  });
};

export const offTrackingAddChatWithThunk = () => {
  chatsListRef.off("child_added");
};

export const onTrackingRemoveChatWithThunk = (dispatch) => {
  chatsListRef.on("child_removed", (snapshot) => {
    dispatch(removeChat(snapshot.key));
  });
};

export const offTrackingRemoveChatWithThunk = () => {
  chatsListRef.off("child_removed");
};
