import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addMessageWithThunk } from "../store/middlewares/addMessageWithThunk";
import { addMessageWithThunk } from "../store/messages/action";
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

    const userId = useSelector(getUserId);
    console.log(userId);
    const authorName = props.authorName;

    let messageList = useSelector(
      (store) => store.messagesReducer.messagesList[chatID]
    );

    if (!messageList) {
      messageList = [];
    }

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
    }, [chatID]);

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
        messageList={messageList}
        chatID={chatID}
        authorName={authorName}
        addMessage={addMessage}
        input={input}
        changeInput={changeInput}
      />
    );
  };
};
