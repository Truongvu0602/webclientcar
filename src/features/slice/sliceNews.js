import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "../../thunk/newsThunk";

const initialState = {
  newsData: [],
};

export const sliceNews = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.newsData = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = sliceNews.actions;

export default sliceNews.reducer;
