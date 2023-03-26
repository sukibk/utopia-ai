import {configureStore} from "@reduxjs/toolkit";
import authReducer from './authSlice.js'
import urlReducer from './urlSlice.js'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        url: urlReducer
    }
})