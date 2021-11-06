import { List, Box } from "@mui/material/";
import Container from "@mui/material/Container";
import { Chat } from "./routes/Chat";
import { Route, Link, Switch } from "react-router-dom";
import { Error_404 } from "../Error_404";
import { Layout } from "../../Components/Layout";
import { chats } from "../../imit_chats/imit_chats";
import { Header } from "../../Components/Header";

export const ChatList = ({ children }) => {
  // const chats = [
  //   { id: "341n234", name: "Brad Pitt" },
  //   { id: "34sfn234", name: "Angelina Jolie" },
  //   { id: "13434sfn234", name: "Megan Fox" },
  // ];
  return (
    <Container>
      <Header />
      <Box sx={{ display: "flex" }}>
        {/* <List sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
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
          </List> */}
        <List
          sx={{
            gridArea: "chats",
            width: "30%",
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
          {chats.map((item) => (
            <Link to={`/chats_list/chat/${item.id}`}>
              <Chat key={item.id} {...item} />
            </Link>
          ))}
          <Link to={`/chats_list/chat/fake_id`}>
            <Chat id="fake_id" name="Fake Name" />
          </Link>
        </List>
        <Switch>
          <Route path="/chats_list/chat/not_found">
            <Error_404 />
          </Route>
          <Route path="/chats_list/chat/:chatId" component={Layout}></Route>
          <Route path="/chats_list/chat/">
            <Error_404 />
          </Route>
        </Switch>
      </Box>
    </Container>
  );
};
