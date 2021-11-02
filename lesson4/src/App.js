import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Profile } from "./routes";
import "./App.css";

import { Layout } from "./Components/Layout";
import { Chat } from "./Components/Chat";
import { Chats } from "./Components/Chats";
import { Paper } from "@mui/material";
import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { ChatList } from "./routes/ChatList";

import Main from "./routes/Main";

function App() {
  return (
    <>
      <Switch>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/header" component={Header}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/chat_list" component={ChatList}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route>
          <h3>Page not found</h3>
        </Route>
      </Switch>
    </>
  );
}

export default App;
