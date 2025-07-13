// src/thunk/heroImgThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../helper/server"; // đường dẫn tới axios config của bạn

export const fetchHeroImages = createAsyncThunk(
  "hero/fetchHeroImages",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/api/hero-images");
      const heroImages = response.data;

      return heroImages;
    } catch (error) {
      // console để debug nếu muốn
      console.error("Fetch hero images error:", error);
      return thunkAPI.rejectWithValue(error.response?.data || "Server error");
    }
  }
);
