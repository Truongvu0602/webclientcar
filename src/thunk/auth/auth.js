// src/thunk/heroImgThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../helper/server"; // đường dẫn tới axios config của bạn

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (formData, thunkAPI) => {
    try {
      const response = await axiosClient.post("/api/users/register", formData);
      const users = response.data;
      console.log(users);

      return users;
    } catch (error) {
      // console để debug nếu muốn
      console.error("Fetch register error:", error);
      return thunkAPI.rejectWithValue(error.response?.data || "Server error");
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (formData, thunkAPI) => {
    try {
      const response = await axiosClient.post("/api/users/login", formData);
      const users = response.data;
      console.log(users);

      return users;
    } catch (error) {
      // console để debug nếu muốn
      console.error("Fetch register error:", error);
      return thunkAPI.rejectWithValue(error.response?.data || "Server error");
    }
  }
);
