// export const getRootMessages = (state) => {
//   return state.messagesReducer;
// };

// export const getMessagesList = (state) => {
//   return getRootMessages(state).messagesList;
// };

// export const getBotTimerID = (state) => {
//   return state.botTimerID;
// };

export const getMessagesReducer = (state) => state.messagesReducer || {};

export const getMessagesList = (state) =>
  getMessagesReducer(state).messagesList;

export const getChatMessagesById = (chatId) => (state) =>
  getMessagesList(state)[chatId] || {};

//Этот селектор конвертирует объект в массив
export const getChatMessagesListById = (chatId) => (state) =>
  Object.values(getChatMessagesById(chatId)(state));
// Возвращает массив объектов [{author, text,id},..., {author, text,id}]
