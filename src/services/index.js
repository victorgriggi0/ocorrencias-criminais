import axios from "axios";
import { getStorageItem } from "@/utils/storageHelper";

export const index = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

function addToken(req) {
  const token = getStorageItem("@auth:user");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
}

index.interceptors.request.use(addToken);
