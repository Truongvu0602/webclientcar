import { createSlice } from "@reduxjs/toolkit";

import { fetchHeroImages } from "../../thunk/heroImgThunk";

const initialState = {
  heroImages: [],
};

export const sliceHeroImg = createSlice({
  name: "imgHero",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeroImages.fulfilled, (state, action) => {
      state.heroImages = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = sliceHeroImg.actions;

export default sliceHeroImg.reducer;
