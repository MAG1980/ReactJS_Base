import { propTypes } from "prop-types";
import { List } from "@mui/material";
import { Chat } from "./Chat";
export const Chats = ({ children }) => {
  const chats = [
    { id: "341n234", name: "Brad Pitt" },
    { id: "34sfn234", name: "Angelina Jolie" },
    { id: "13434sfn234", name: "Megan Fox" },
  ];
  return (
    <List
      sx={{
        gridArea: "chats",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        border: " 1px solid",
        borderColor: "border.myBorder",
        backgroundColor: "background.main",
        pt: 1,
        pb: 1,
        height: "97%",
      }}
    >
      {children}
      {chats.map((item) => (
        <Chat key={item.id} {...item} />
      ))}
    </List>
  );
};

// Chats.propTypes = {

// }
