import { createSlice } from "@reduxjs/toolkit";
import { fetchCarModelFeaturn } from "../../thunk/carModelFeaturnThunk";

const initialState = {
  carModelFeaturn: [],
};

export const sliceCarModelFeaturn = createSlice({
  name: "carModelFeaturn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCarModelFeaturn.fulfilled, (state, action) => {
      state.carModelFeaturn = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = sliceCarModelFeaturn.actions;

export default sliceCarModelFeaturn.reducer;
