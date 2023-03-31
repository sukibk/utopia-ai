import {configureStore} from "@reduxjs/toolkit";
import authReducer from './authSlice.js'
import urlReducer from './urlSlice.js'
import themeReducer from './themeSlice.js'
import backgroundReducer from "./backgroundSlice.js";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        url: urlReducer,
        theme: themeReducer,
        background: backgroundReducer
    }
})