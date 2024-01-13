import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import gameReducer from "./gameReducer";
import thunk from "redux-thunk";

let store = configureStore({
  reducer: {
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    gamePage: gameReducer,
    auth: authReducer,
  },
  middleware: [thunk],

  devTools: true,
});

export default store;
