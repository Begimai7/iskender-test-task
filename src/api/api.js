import axios from "axios";

export const BASE_URL = "https://6597c275668d248edf235763.mockapi.io/iskender/";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  "Content-Type": "application/json",
});
