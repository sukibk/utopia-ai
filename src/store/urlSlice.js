// Used in 'HomePageContainer' to provide transparent background-picture to 'ProductPageItem' container

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
};

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload.url;
    },
  },
});

export const { setUrl } = urlSlice.actions;
export default urlSlice.reducer;
