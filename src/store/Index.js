import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth";
import emailReducer from "./emailReducer";

const store = configureStore({
    reducer : {
        auth:authSlice,
        mail:emailReducer
    }
})
export default store;