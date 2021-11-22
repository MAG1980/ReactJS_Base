import { useEffect, useState } from "react";
import firebase from "firebase";
import { Switch, Route } from "react-router-dom";
import { Home, Profile } from "./routes";
import "./App.css";
import { Header } from "./Components/Header";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { ChatList } from "./routes/ChatList";
import { Error404 } from "./routes/Error_404";
import { TestAPI } from "./routes/API";
import { TestAPIWithMiddleware } from "./routes/API_with_middleWare";
import { TestAPIwithHook } from "./routes/API_with_hook";
import { TestAPIwithFabricatedReducer } from "./routes/API_with_fabricated_reducer";
import Main from "./routes/Main";
import "./services/firebase";
import { PublicRoute } from "./hocs/PublicRoute";
import { PrivateRoute } from "./hocs/PrivateRoute";

function App() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  }, []);
  return (
    <>
      <Switch>
        <PublicRoute authenticated={authed} exact path="/login">
          <Login />
        </PublicRoute>
        <PublicRoute authenticated={authed} exact path="/signup">
          <SignUp />
        </PublicRoute>
        <PublicRoute
          authenticated={authed}
          path="/testAPI_wit_middleware"
          component={TestAPIWithMiddleware}
        />
        <PublicRoute
          authenticated={authed}
          path="/TestAPIwithHook"
          component={TestAPIwithHook}
        />
        <PublicRoute
          authenticated={authed}
          path="/TestAPIwithFabricatedReducer"
          component={TestAPIwithFabricatedReducer}
        />
        <PublicRoute authenticated={authed} exact path="/" component={Home} />
        {/* <PublicRoute authenticated={authed}>
          <Error404 />
        </PublicRoute> */}

        <PrivateRoute
          authenticated={authed}
          path="/profile"
          component={Profile}
        />
        <PrivateRoute
          authenticated={authed}
          path="/header"
          component={Header}
        />
        <PrivateRoute authenticated={authed} path="/main" component={Main} />
        <PrivateRoute
          authenticated={authed}
          path="/chats_list"
          component={ChatList}
        />
        <PrivateRoute
          authenticated={authed}
          path="/testAPI"
          component={TestAPI}
        />
      </Switch>
    </>
  );
}

export default App;
