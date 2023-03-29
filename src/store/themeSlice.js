import {createSlice} from "@reduxjs/toolkit";

let theme = 'dark';

if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
}

const initialState = {
    theme: theme
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload.theme;
        }
    }
})

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;