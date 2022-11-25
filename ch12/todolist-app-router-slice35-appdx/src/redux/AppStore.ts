import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./TodoSlice";

const AppStore = configureStore({ reducer: TodoReducer });
export default AppStore;
