import {createSlice} from "@reduxjs/toolkit";
import {auth} from "../firebase.js";

const initialState = {
    currentUser: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.currentUser = action.payload.currentUser
        },
        removeUser: (state, action) => {
            state.currentUser = null;
        }
    }
})


export const {setUser, removeUser} = authSlice.actions;
export default authSlice.reducer;