import "./App.css";
import uniqid from "uniqid";
import { React, useState, useEffect } from "react";
import Message from "./Message";
import { Layout } from "./Components/Layout";
import { Header } from "./Components/Header";
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
          p: 2,
        }}
      >
        <Layout
          sx={{
            border: " 1px solid border",
          }}
        >
          <Header />
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
            <Box>
              <Box
                sx={{
                  overflow: "hidden",
                  height: "55vh",
                  border: " 1px solid",
                  borderColor: "border.myBorder",
                  backgroundColor: "background.main",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column-reverse",
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
                  p: "10px",
                  height: "15vh",
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
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    borderRadius: "50%",
                    width: "10vh",
                    height: "10vh",
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
