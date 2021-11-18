import { Switch, Route } from "react-router-dom";
import { Home, Profile } from "./routes";
import "./App.css";
import { useSelector } from "react-redux";
import { Header } from "./Components/Header";
import { ChatList } from "./routes/ChatList";
import { Error404 } from "./routes/Error_404";
import { TestAPI } from "./routes/API";
import { TestAPIWithMiddleware } from "./routes/API_with_middleWare";
import { TestAPIwithHook } from "./routes/API_with_hook";

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
        <Route path="/testAPI" component={TestAPI}></Route>
        <Route
          path="/testAPI_wit_middleware"
          component={TestAPIWithMiddleware}
        ></Route>
        <Route path="/TestAPIwithHook" component={TestAPIwithHook}></Route>

        <Route exact path="/" component={Home}></Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
