import axios, { AxiosError, AxiosInstance } from "axios";
import { Storage } from "../Storage";

const baseUrl = `https://f3c5-210-94-220-230.ngrok-free.app/api/`;
export const BaseInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

BaseInstance.interceptors.request.use(
  (config) => {
    const accessToken = Storage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

BaseInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const { status } = error.response.data;
      if (status === 401) {
        window.location.href = "/";
        Storage.delItem("access_token");
      }
    } else {
      throw error;
    }
  }
);

export interface ErrorResponse {
  message: string;
}
