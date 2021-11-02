import List from "@mui/material/List";
import { Link } from "@mui/material";
import Container from "@mui/material/Container";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { Chat } from "../../Components/Chat";

export const ChatList = ({ children }) => {
  const chats = [
    { id: "341n234", name: "Brad Pitt" },
    { id: "34sfn234", name: "Angelina Jolie" },
    { id: "13434sfn234", name: "Megan Fox" },
  ];
  return (
    <Container>
      <List sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
        {[1, 2, 3].map((value) => (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton>
                <CommentIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`Chat ${value}`} />
          </ListItem>
        ))}
      </List>
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
          <Link>
            <Chat key={item.id} {...item} />
          </Link>
        ))}
      </List>
    </Container>
  );
};
