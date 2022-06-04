import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Middleware } from "redux";
import TimeReducer, { HomeStatesType } from "./TimeReducer";
import TodoReducer, { TodoStatesType } from "./TodoReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export type RootStatesType = {
  home: HomeStatesType;
  todos: TodoStatesType;
};

const RootReducer = combineReducers({ home: TimeReducer, todos: TodoReducer });

const loggerMW: Middleware = (store) => (next) => (action) => {
  console.log("### action 실행 : ", action);
  //console.log("### action 변경전 상태 : ", store.getState());
  next(action);
  //console.log("### action 변경후 상태 : ", store.getState());
};

const AppStore = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(loggerMW).concat(sagaMiddleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export default AppStore;
