import { forwardRef, useEffect } from "react";
import { Box, TextField, Divider, Button } from "@mui/material";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";
import { useSelector, useDispatch } from "react-redux";
import { getMessagesList } from "../store/messages/selectors";

export const MessagesScreen = (props) => {
  const chatID = props.chatID;
  const authorName = props.authorName;

  let messageList = useSelector(
    (store) => store.messagesReducer.messagesList[chatID]
  );

  if (!messageList) {
    messageList = [];
  }
  // 17.11.21

  const inputRef = forwardRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

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
      />
    </Box>
  );
};
