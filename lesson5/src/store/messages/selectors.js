export const getRootMessages = (state) => {
  return state.messagesReducer;
};

export const getMessagesList = (state) => {
  return getRootMessages(state).messagesList;
};
