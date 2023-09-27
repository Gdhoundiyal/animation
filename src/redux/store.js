import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoReducers";
import UserReducer from "../LoginRedux/userReducer";
const store = configureStore({
  reducer: {
    todo: TodoReducer,
    user: UserReducer,
    foundUser: UserReducer,
    foundUsername: UserReducer,
    addedUser: UserReducer,
  },
});

export default store;
