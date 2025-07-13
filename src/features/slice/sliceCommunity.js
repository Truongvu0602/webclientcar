import { createSlice } from "@reduxjs/toolkit";
import { fetchCommunity } from "../../thunk/communityThunk";

const initialState = {
  communityPosts: [],
};

export const sliceCommunity = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommunity.fulfilled, (state, action) => {
      state.communityPosts = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = sliceCommunity.actions;

export default sliceCommunity.reducer;
