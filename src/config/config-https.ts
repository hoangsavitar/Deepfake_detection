import axios from "axios";
import { BASE_URL_BACKEND, BASE_URL_BACKEND_DEEPFAKE } from "../utils/api";

export const configAxios = axios.create({
  baseURL: BASE_URL_BACKEND,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "ngrok-skip-browser-warning": "true",
  },
});

export const configAxios2 = axios.create({
  baseURL: BASE_URL_BACKEND_DEEPFAKE,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "ngrok-skip-browser-warning": "true",
  },
});