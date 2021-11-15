import uniqid from "uniqid";
import { React, useState, useEffect, useRef } from "react";
import { Box, TextField, Divider, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useSelector, useDispatch } from "react-redux";
import { addMessageActionCreator } from "../store/actionCreators/AddMessageActionCreator";

export const MessageInput = (props) => {
  const chatID = props.chatID;
  // console.log("chatID: ", chatID);

  let messageList = props.messageList;

  // let messageList = useSelector((store) => store.messagesList.chatId);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const [input, setInput] = useState("");
  let currentInput = "";

  useEffect(() => {
    if (
      messageList.length !== 0 &&
      messageList[messageList.length - 1].author !== "Bot"
    ) {
      let timerId = setTimeout(() => {
        sendMessage("Bot", "Привет от бота!");
      }, 1500);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [messageList]);

  function sendMessage(author, text) {
    let message = {
      messageID: uniqid(),
      author: author,
      text: text,
    };
    let newMessagesArr = [...messageList, message];

    let chatMessages = {
      chatID: chatID,
      listMessages: newMessagesArr,
    };
    dispatch(addMessageActionCreator(chatMessages, [dispatch]));
    // setMessageList(newMessagesArr);
  }

  function changeInput(e) {
    currentInput = e.target.value;
    setInput(currentInput);
  }
  function addMessage(e) {
    e.preventDefault();
    sendMessage(props.authorName, input);
    console.log(input);
    resetInput();
  }
  function resetInput() {
    setInput("");
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <Box
      onSubmit={addMessage}
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1,
        bgcolor: "background.main",
      }}
    >
      <TextField
        inputRef={inputRef}
        value={input}
        onChange={changeInput}
        id="filled-basic"
        label="Type Something"
        variant="standard"
        name="textInput"
        sx={{ width: "100%", autoComplete: "off" }}
      />
      <Button
        size="small"
        type="submit"
        variant="contained"
        endIcon={<SendIcon />}
        sx={{
          minWidth: 30,
          minHeight: 30,
          borderRadius: "50%",
        }}
      ></Button>
    </Box>
  );
};
