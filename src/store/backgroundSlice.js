import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    className: 'main-home'
}

const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        showHomeSquares: (state) => {
            state.className = 'main-home'
        },

        hideHomeSquares: (state) => {
            state.className = 'main'
        }
    }
})

export const {showHomeSquares, hideHomeSquares} = backgroundSlice.actions;
export default backgroundSlice.reducer;