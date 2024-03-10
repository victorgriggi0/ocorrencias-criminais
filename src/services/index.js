import axios from "axios";
import { getCookieItem } from "@/utils/cookiesHelper";

export const index = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

function addToken(req) {
  const token = getCookieItem("@auth:token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
}

index.interceptors.request.use(addToken);
