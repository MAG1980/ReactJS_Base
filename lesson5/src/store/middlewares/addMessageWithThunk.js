import { MESSAGES_ADD_MESSAGE } from "../messages/action";
import { addMessageActionCreator } from "../actionCreators/AddMessageActionCreator";
import { dispatch } from "react-redux";
import { nanoid } from "nanoid";

export const addMessageWithThunk =
  (chatId, message) => (dispatch, getState) => {
    dispatch(addMessageActionCreator(chatId, message));
    if (message.author !== "Bot") {
      const botMessage = {
        id: nanoid(),
        author: "Bot",
        text: "Привет от бота!",
      };

      setTimeout(
        () => dispatch(addMessageActionCreator(chatId, botMessage)),
        2000
      );
    }
  };
