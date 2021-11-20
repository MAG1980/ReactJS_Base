import { forwardRef, useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";
import { useSelector, useDispatch } from "react-redux";
import { addMessageWithThunk } from "../store/middlewares/addMessageWithThunk";
import { nanoid } from "nanoid";

export const MessagesScreen = (props) => {
  const chatID = props.chatID;
  const authorName = props.authorName;

  let messageList = useSelector(
    (store) => store.messagesReducer.messagesList[chatID]
  );

  if (!messageList) {
    messageList = [];
  }

  const inputRef = forwardRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "inherit",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          flexGrow: 1,
          overflow: "hidden",
          border: " 1px solid",
          borderColor: "border.myBorder",
          backgroundColor: "background.main",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          {messageList.map((message) => {
            return <Message key={message.messageID} message={message} />;
          })}
        </Box>
        <Divider />
      </Box>
      <MessageInput
        chatID={chatID}
        authorName={authorName}
        inputRef={inputRef}
        addMessage={addMessage}
        input={input}
        changeInput={changeInput}
      />
    </Box>
  );
};
