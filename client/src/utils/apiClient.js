import axios from "axios";
import { API_BASE_URL } from "./constants";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL.replace("/api",""),
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
