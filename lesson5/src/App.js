import { Switch, Route } from "react-router-dom";
import { Home, Profile } from "./routes";
import "./App.css";
import { Header } from "./Components/Header";
import { ChatList } from "./routes/ChatList";
import { Error404 } from "./routes/Error_404";
import { TestAPI } from "./routes/API";
import { TestAPIWithMiddleware } from "./routes/API_with_middleWare";
import { TestAPIwithHook } from "./routes/API_with_hook";
import { TestAPIwithFabricatedReducer } from "./routes/API_with_fabricated_reducer";

import Main from "./routes/Main";

function App() {
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
        <Route
          path="/TestAPIwithFabricatedReducer"
          component={TestAPIwithFabricatedReducer}
        ></Route>

        <Route exact path="/" component={Home}></Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
