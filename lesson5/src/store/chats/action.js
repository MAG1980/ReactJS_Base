export const ADD_CHAT = "CHATS::ADD_CHAT";
export const GET_CHATS_LIST = "CHATS::GET_CHATS_LIST";
export const addChat = (name) => ({
  type: ADD_CHAT,
  name,
});
