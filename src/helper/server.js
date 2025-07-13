// src/features/hero/heroAPI.js
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:3000", // Đổi nếu khác
});
