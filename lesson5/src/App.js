import { Switch, Route } from "react-router-dom";
import { Home, Profile } from "./routes";
import "./App.css";
import { useSelector } from "react-redux";
import { Header } from "./Components/Header";
import { ChatList } from "./routes/ChatList";
import { Error404 } from "./routes/Error_404";

import Main from "./routes/Main";

function App() {
  let name = useSelector((store) => store.name);
  console.log(name);
  return (
    <>
      <Switch>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/header" component={Header}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/chats_list" component={ChatList}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
