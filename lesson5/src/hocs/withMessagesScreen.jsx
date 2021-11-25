import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addMessageWithThunk } from "../store/middlewares/addMessageWithThunk";
import { addMessageWithThunk } from "../store/messages/action";
import {
  getMessagesReducer,
  getMessagesList,
  getChatMessagesListById,
} from "../store/messages/selectors";
import { nanoid } from "nanoid";
import {
  onTrackingAddMessageWithThunk,
  onTrackingRemoveMessageWithThunk,
  offTrackingAddMessageWithThunk,
  offTrackingRemoveMessageWithThunk,
} from "../store/messages/action.js";
import { createMessage } from "../helpers/index";
import { getUserId } from "../store/user/selectors";

export const withMessagesScreen = (Component) => {
  return (props) => {
    const chatID = props.chatID;
    console.log("chatID: ", chatID);

    const userId = useSelector(getUserId);
    // console.log(userId);
    const authorName = props.authorName;

    // Список сообщений всех чатов
    // let messageList = useSelector(getMessagesList);
    // console.log(messageList);

    let currentChatmessageList = useSelector(getChatMessagesListById(chatID));
    // messageList = [{author, text,id},..., {author, text,id}]

    // let messageList = useSelector(
    //   (store) => store.messagesReducer.messagesList[chatID]
    // );

    // if (!messageList) {
    //   messageList = [];
    // }

    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    let currentInput = "";

    function sendMessage(author, text) {
      const chatMessage = createMessage(userId, text);
      dispatch(addMessageWithThunk(chatMessage, chatID));
      // let chatMessage = {
      //   id: nanoid(),
      //   author: author,
      //   text: text,
      // };
      // console.log(chatMessage);
      // dispatch(addMessageWithThunk(chatID, chatMessage, [dispatch]));
    }
    useEffect(() => {
      dispatch(onTrackingAddMessageWithThunk(chatID));
      dispatch(onTrackingRemoveMessageWithThunk(chatID));

      return () => {
        dispatch(offTrackingAddMessageWithThunk(chatID));
        dispatch(offTrackingRemoveMessageWithThunk(chatID));
      };
    }, []);

    function changeInput(e) {
      currentInput = e.target.value;
      setInput(currentInput);
    }
    function addMessage(e) {
      e.preventDefault();
      sendMessage(authorName, input);
      console.log(input);
      resetInput();
    }
    function resetInput() {
      setInput("");
    }
    return (
      <Component
        {...props}
        messageList={currentChatmessageList}
        chatID={chatID}
        // authorName={authorName}
        addMessage={addMessage}
        input={input}
        changeInput={changeInput}
      />
    );
  };
};
