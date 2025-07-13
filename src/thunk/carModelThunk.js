// src/thunk/heroImgThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../helper/server"; // đường dẫn tới axios config của bạn

export const fetchCarModel = createAsyncThunk(
  "car/fetchHeroImages",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/api/car-models");
      const carModel = response.data;

      return carModel;
    } catch (error) {
      // console để debug nếu muốn
      console.error("Fetch carr model error:", error);
      return thunkAPI.rejectWithValue(error.response?.data || "Server error");
    }
  }
);
