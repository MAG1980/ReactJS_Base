import { createStore, applyMiddleware, compose } from "redux";
import { storeCombineReducer } from "./combineReducers/";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

const persistConfig = {
  key: "root",
  storage, //Берётся из redux-persist. По умолчанию - localstorage.
};

const persistedReducer = persistReducer(persistConfig, storeCombineReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
