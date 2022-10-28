import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer, //the user that we created in the userslice with the name
  },
});
