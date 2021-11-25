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

import { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { addChatActionCreator } from "../../store/actionCreators/AddChatActionCreator";
// import { addChatActionCreator } from "../../store/chats/action";
import {
  addChatWithThunk,
  removeChatWithThunk,
  onTrackingAddChatWithThunk,
  onTrackingRemoveChatWithThunk,
  offTrackingAddChatWithThunk,
  offTrackingRemoveChatWithThunk,
} from "../../store/chats/action";
import { removeMessagesByChatIDWithThunk } from "../../store/messages/action";
// import { nanoid } from "nanoid";
import { createChat } from "../../helpers/index";
// import { RemoveChatActionCreator } from "../../store/actionCreators/RemoveChatActionCreator";
// import { MessagesDelete } from "../../store/actionCreators/MessagesDelete";
// import { removeMessagesByChatIDWithThunk } from "../../store/messages/action";

export const ChatList = ({ children }) => {
  // const chats = useSelector((store) => store.chatsReducer.chatList);
  let chats = [];
  const Сhats = useSelector(getChatList);
  // Сhats = {snapshot1.key:{ id: snapshot1.key, name: "name"},
  //                          ...
  //  snapshot2.key:{ id: snapshot2.key, name: "name"}, }
  console.log("Сhats: ", Сhats);
  if (!Object.keys(Сhats).length == 0) {
    chats = Object.values(Сhats); // [{ id: snapshot.key, name: "name"}, ...,{...}];
  }
  console.log(chats);

  const [inputValue, setInputValue] = useState("init");
  const changeStateValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const dispatch = useDispatch();

  const addChat = useCallback(() => {
    handleClose();
    // let id = nanoid();
    // const chat = { name: inputValue };
    console.log(inputValue);
    dispatch(addChatWithThunk(createChat(inputValue)));
  }, [inputValue]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const removeChat = useCallback(
    (chatID) => {
      // dispatch(RemoveChatActionCreator(chatID));
      // dispatch(MessagesDelete(chatID));
      dispatch(removeChatWithThunk(chatID));
      dispatch(removeMessagesByChatIDWithThunk(chatID));
    },
    [dispatch]
  );

  // Автоматическое обновление хранилища redux  при изменении Firebase
  useEffect(() => {
    dispatch(onTrackingAddChatWithThunk);
    dispatch(onTrackingRemoveChatWithThunk);

    return () => {
      dispatch(offTrackingAddChatWithThunk);
      dispatch(offTrackingRemoveChatWithThunk);
    };
  }, []);

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
