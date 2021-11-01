import "./App.css";
import uniqid from "uniqid";
import { React, useState, useEffect } from "react";
import Message from "./Message";
import { Layout } from "./Components/Layout";
import { Avatar, Box, Paper, TextField, Divider, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function App() {
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
  return (
    <Paper
      evaluation={2}
      variant="outlined"
      sx={{
        boxSizing: "border-box",
        p: "20px 10%",
        height: "100vh",
        backgroundColor: "background.main",
      }}
    >
      <Paper
        sx={{
          backgroundColor: "background.second",
          display: "flex",
          flexDirection: "column",
          height: "85vh",
          p: 2,
        }}
      >
        <Layout
          sx={{
            border: " 1px solid border",
          }}
        >
          <Box
            sx={{
              border: " 1px solid",
              borderColor: "border.myBorder",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              gridTemplateRows: "70vh",
            }}
          >
            <Box
              sx={{
                border: " 1px solid",
                borderColor: "border.myBorder",
                backgroundColor: "background.main",
              }}
            >
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Box>
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
                }}
              >
                <TextField
                  value={input}
                  onChange={changeInput}
                  id="filled-basic"
                  label="Type Something"
                  variant="standard"
                  name="textInput"
                  data-user-name="Елена"
                  sx={{ width: "100%" }}
                />
                <Button
                  size="small"
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    minWidth: 20,
                    borderRadius: "50%",
                  }}
                ></Button>
              </Box>
            </Box>
          </Box>
        </Layout>
      </Paper>
    </Paper>
  );
}

export default App;
