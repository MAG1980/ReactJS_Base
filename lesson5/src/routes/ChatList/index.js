import { List, Box } from "@mui/material/";
import Container from "@mui/material/Container";
import { Chat } from "./routes/Chat";
import { Route, Link, Switch } from "react-router-dom";
import { Error404 } from "../Error_404";
import { MessagesScreen } from "../../Components/MessagesScreen";
// import { chats } from "../../imit_chats/imit_chats";
import { Header } from "../../Components/Header";
import { AddChatModal } from "../../Components/AddChatModal";
import { useSelector, useDispatch } from "react-redux";
import { getChatList } from "../../store/chats/selectors";

export const ChatList = ({ children }) => {
  // const chats = useSelector((store) => store.chatsReducer.chatList);
  const chats = useSelector(getChatList);
  console.log(chats);

  return (
    <Container>
      <Header />
      <Box sx={{ display: "flex", height: "90vh" }}>
        <List
          sx={{
            gridArea: "chats",
            width: "40%",
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
          <AddChatModal />
          {chats.map((item) => (
            <Link
              key={item.id}
              to={`/chats_list/chat/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Chat key={item.id} {...item} />
            </Link>
          ))}
          <Link to={`/chats_list/chat/fake_id`}>
            <Chat id="fake_id" name="Fake Name" />
          </Link>
        </List>
        <Switch>
          {chats.map((item) => (
            <Route key={item.id} path={`/chats_list/chat/${item.id}`}>
              <MessagesScreen authorName={item.name} chatID={item.id} />
            </Route>
          ))}

          {/* <Route path="/chats_list/chat/:chatID">
            <MessagesScreen />
          </Route> */}
          <Route path="/chats_list/chat/*">
            <Error404 />
          </Route>
          <Route exact path="/chats_list/chat/">
            <Error404 />
          </Route>
        </Switch>
      </Box>
    </Container>
  );
};
