import uniqid from "uniqid";
import { React, useState, useEffect, useRef } from "react";
import { Box, TextField, Divider, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Message } from "./Message";
import { useParams } from "react-router-dom";

export const Layout = ({ children }) => {
  const [messageList, setMessageList] = useState([]);
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
      id: uniqid(),
      author: author,
      text: text,
    };
    let newMessagesArr = [...messageList, message];
    setMessageList(newMessagesArr);
  }

  function changeInput(e) {
    currentInput = e.target.value;
    setInput(currentInput);
  }
  function addMessage(e) {
    e.preventDefault();
    sendMessage("user", input);
    console.log(input);
    resetInput();
  }
  function resetInput() {
    setInput("");
  }

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const params = useParams();
  console.log(params);
  const chatId = params.chatId;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
          <Message list={messageList} />
        </Box>
        <Divider />
      </Box>
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
    </Box>
  );
};
