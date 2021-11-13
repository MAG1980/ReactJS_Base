export const getRootChats = (state) => {
  return state.chatsReducer;
};

export const getChatList = (state) => {
  return getRootChats(state).chatList;
};
