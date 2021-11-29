import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { CircularProgress } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";

const myTheme = createTheme({
  palette: {
    background: {
      main: "#ffffff",
      second: "#fafafa",
    },
    border: {
      myBorder: "#f2f2f2",
    },
    text: {
      myTextMain: "#948f8d",
      myTexSecond: "#5800b9",
    },
    button: "#5800b9",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={myTheme}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<CircularProgress />}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
