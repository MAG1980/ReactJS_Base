import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessageWithThunk } from "../store/middlewares/addMessageWithThunk";
import { nanoid } from "nanoid";

export const withMessagesScreen = (Component) => {
  return (props) => {
    const chatID = props.chatID;
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
      let chatMessage = {
        id: nanoid(),
        author: author,
        text: text,
      };
      console.log(chatMessage);
      dispatch(addMessageWithThunk(chatID, chatMessage, [dispatch]));
    }

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
