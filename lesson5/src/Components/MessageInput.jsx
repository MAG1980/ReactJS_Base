import { nanoid } from "nanoid";
import { React, useState, useEffect, useRef } from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useDispatch } from "react-redux";

import { addMessageWithThunk } from "../store/middlewares/addMessageWithThunk";

export const MessageInput = ({ authorName, chatID, inputRef }) => {
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
    // dispatch(addMessageActionCreator(chatID, chatMessage, [dispatch]));
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
