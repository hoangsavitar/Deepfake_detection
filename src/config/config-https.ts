import axios from "axios";
import { BASE_URL_BACKEND } from "../utils/api";

export const configAxios = axios.create({
  baseURL: BASE_URL_BACKEND,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "ngrok-skip-browser-warning": "true",
  },
});
