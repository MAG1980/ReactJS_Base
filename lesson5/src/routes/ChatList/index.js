import { List, Box } from "@mui/material/";
import Container from "@mui/material/Container";
import { Chat } from "./routes/Chat";
import { Route, Link, Switch } from "react-router-dom";
import { Error404 } from "../Error_404";
import { MessagesScreen } from "../../Components/MessagesScreen";
import { Header } from "../../Components/Header";
import { AddChatModal } from "../../Components/AddChatModal";
import { useSelector } from "react-redux";
import { getChatList } from "../../store/chats/selectors";

import { useCallback, useState, React } from "react";
import { useDispatch } from "react-redux";
// import { addChatActionCreator } from "../../store/actionCreators/AddChatActionCreator";
import { addChatActionCreator } from "../../store/chats/action";
import { addChatWithThunk } from "../../store/chats/action";
import { nanoid } from "nanoid";
import { createChat } from "../../helpers/index";
import { RemoveChatActionCreator } from "../../store/actionCreators/RemoveChatActionCreator";
import { MessagesDelete } from "../../store/actionCreators/MessagesDelete";

export const ChatList = ({ children }) => {
  // const chats = useSelector((store) => store.chatsReducer.chatList);
  let chats = [];
  const Сhats = useSelector(getChatList);
  console.log("Сhats: ", Сhats);
  if (!Object.keys(Сhats).length == 0) {
    chats = Object.values(Сhats);
  }
  console.log(chats);

  const [inputValue, setInputValue] = useState("");
  const changeStateValue = (e) => {
    setInputValue(e.target.value);
  };

  const dispatch = useDispatch();

  const addChat = useCallback(() => {
    handleClose();
    // let id = nanoid();
    // const chat = { name: inputValue };
    dispatch(addChatWithThunk(createChat(inputValue)));
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //removing chats

  // console.log("chatID: ", chatID);

  const removeChat = useCallback(
    (chatID) => {
      dispatch(RemoveChatActionCreator(chatID));
      dispatch(MessagesDelete(chatID));
    },
    [dispatch]
  );

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
          <AddChatModal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            addChat={addChat}
            changeStateValue={changeStateValue}
          />
          {chats.map((item) => (
            <Link
              key={item.id}
              to={`/chats_list/chat/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Chat name={item.name} removeChat={() => removeChat(item.id)} />
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
