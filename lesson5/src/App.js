import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Profile } from "./routes";
import "./App.css";

import { Layout } from "./Components/Layout";
import { Chats } from "./Components/Chats";
import { Paper } from "@mui/material";
import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { Chat } from "./routes/ChatList/routes";
import { ChatList } from "./routes/ChatList";
import { Error_404 } from "./routes/Error_404";

import Main from "./routes/Main";

function App() {
  return (
    <>
      <Provider store={store}>
        <Switch>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/header" component={Header}></Route>
          <Route path="/main" component={Main}></Route>
          <Route path="/chats_list" component={ChatList}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route>
            <Error_404 />
          </Route>
        </Switch>
      </Provider>
    </>
  );
}

export default App;
