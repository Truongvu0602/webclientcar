import { createSlice } from "@reduxjs/toolkit";
import { fetchCarModel } from "../../thunk/carModelThunk";

const initialState = {
  carModel: [],
};

export const sliceCarModel = createSlice({
  name: "carModel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCarModel.fulfilled, (state, action) => {
      state.carModel = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = sliceCarModel.actions;

export default sliceCarModel.reducer;
