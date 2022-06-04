import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoReducer";

const AppStore = configureStore({ reducer: TodoReducer });
export default AppStore;
