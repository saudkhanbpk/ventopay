import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/userAdmission/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
