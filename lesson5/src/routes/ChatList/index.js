import { List, Box } from "@mui/material/";
import Container from "@mui/material/Container";
import { Chat } from "./routes/Chat";
import { Route, Link, Switch } from "react-router-dom";
import { Error_404 } from "../Error_404";
import { Layout } from "../../Components/MessagesScreen";
// import { chats } from "../../imit_chats/imit_chats";
import { Header } from "../../Components/Header";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../store/index";

export const ChatList = ({ children }) => {
  // const chats = [
  //   { id: "341n234", name: "Brad Pitt" },
  //   { id: "34sfn234", name: "Angelina Jolie" },
  //   { id: "13434sfn234", name: "Megan Fox" },
  // ];

  const chats = useSelector((state) => state.chatList);
  console.log(chats);
  const isShow = useSelector((state) => state.isShow);
  console.log(isShow);

  return (
    <Container>
      <Header />
      <Box sx={{ display: "flex", height: "90vh" }}>
        {/* <List
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
            <Link
              to={`/chats_list/chat/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Chat key={item.id} {...item} />
            </Link>
          ))}
          <Link to={`/chats_list/chat/fake_id`}>
            <Chat id="fake_id" name="Fake Name" />
          </Link>
        </List> */}
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
