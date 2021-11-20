// import { MESSAGES_ADD_MESSAGE } from "../messages/action";
import { addMessageActionCreator } from "../actionCreators/AddMessageActionCreator";
import { dispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import { SetBotTimerId } from "../actionCreators/SetBotTimerID";
import { getBotTimerID } from "../messages/selectors";

export const addMessageWithThunk =
  (chatId, message) => (dispatch, getState) => {
    dispatch(addMessageActionCreator(chatId, message));
    console.log("message.author: ", message.author);

    let oldBotTimerID = getState().messagesReducer.botTimerID;
    console.log("oldBotTimerID :", oldBotTimerID);
    clearTimeout(oldBotTimerID);

    if (message.author !== "Bot") {
      const botMessage = {
        id: nanoid(),
        author: "Bot",
        text: "Привет от бота!",
      };

      let timerId = setTimeout(() => {
        dispatch(addMessageWithThunk(chatId, botMessage), [dispatch]);
      }, 2000);
      console.log("New timerId: ", timerId);
      dispatch(SetBotTimerId(timerId));
      // let isBot = useSelector(getIsBotLastMessageOwner);
      // useEffect(() => {
      //   if (isBot) {
      //     clearTimeout(timerId);
      //   }
      // });
      // return () => {
      //   clearTimeout(timerId);
      // };
    }
  };
