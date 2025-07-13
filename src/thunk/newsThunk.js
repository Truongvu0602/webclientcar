// src/thunk/heroImgThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../helper/server"; // đường dẫn tới axios config của bạn

export const fetchNews = createAsyncThunk(
  "car/fetchNews",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/api/car-news");
      const news = response.data;

      return news;
    } catch (error) {
      // console để debug nếu muốn
      console.error("Fetch carr model error:", error);
      return thunkAPI.rejectWithValue(error.response?.data || "Server error");
    }
  }
);
