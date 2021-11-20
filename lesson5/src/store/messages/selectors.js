export const getRootMessages = (state) => {
  return state.messagesReducer;
};

export const getMessagesList = (state) => {
  return getRootMessages(state).messagesList;
};

export const getBotTimerID = (state) => {
  return state.botTimerID;
};
