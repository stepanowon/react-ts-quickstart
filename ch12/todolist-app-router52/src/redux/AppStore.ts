import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Middleware } from "redux";
import TimeReducer, { HomeStatesType } from "./TimeReducer";
import TodoReducer, { TodoStatesType } from "./TodoReducer";

export type RootStatesType = {
  home: HomeStatesType;
  todos: TodoStatesType;
};

const RootReducer = combineReducers({ home: TimeReducer, todos: TodoReducer });

const mw1: Middleware = (store) => (next) => (action) => {
  console.log("### mw1 전");
  //next(action);
  console.log("### mw1 후");
};

const mw2: Middleware = (store) => (next) => (action) => {
  console.log("### mw2 전");
  next(action);
  console.log("### mw2 후");
  console.log(store.getState());
};

const AppStore = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(mw1).concat(mw2);
  },
});

export default AppStore;
