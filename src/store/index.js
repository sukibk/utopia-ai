import {configureStore} from "@reduxjs/toolkit";
import authReducer from './authSlice.js'
import urlReducer from './urlSlice.js'
import themeReducer from './themeSlice.js'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        url: urlReducer,
        theme: themeReducer
    }
})