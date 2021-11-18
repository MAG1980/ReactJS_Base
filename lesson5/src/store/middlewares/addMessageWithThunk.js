// import { MESSAGES_ADD_MESSAGE } from "../messages/action";
import { addMessageActionCreator } from "../actionCreators/AddMessageActionCreator";
// import { dispatch } from "react-redux";
import { nanoid } from "nanoid";

export const addMessageWithThunk =
  (chatId, message) => (dispatch, getState) => {
    dispatch(addMessageActionCreator(chatId, message));
    console.log("message.author: ", message.author);
    if (message.author !== "Bot") {
      const botMessage = {
        id: nanoid(),
        author: "Bot",
        text: "Привет от бота!",
      };
      let timerId = setTimeout(() => {
        dispatch(addMessageWithThunk(chatId, botMessage), [dispatch]);
      }, 2000);
      return () => {
        clearTimeout(timerId);
      };
    }
  };
