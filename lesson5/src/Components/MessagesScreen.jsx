import { Box, Divider } from "@mui/material";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";

import { withMessagesScreen } from "../hocs/withMessagesScreen";

export const MessagesScreenRender = ({
  messageList,
  chatID,
  authorName,
  inputRef,
  addMessage,
  input,
  changeInput,
}) => {
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

export const MessagesScreen = withMessagesScreen(MessagesScreenRender);
