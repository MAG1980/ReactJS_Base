export const getRootMessages = (state) => {
  return state.messagesReducer;
};

export const getMessageList = (state) => {
  return getRootMessages(state).messagesList;
};
