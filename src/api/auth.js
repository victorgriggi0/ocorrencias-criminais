import { index } from "./index";
import { setAuthToken } from "@/utils/authStorage";

export async function login({ email, password, rememberMe }) {
  try {
    const result = await index.post("/auth/login", {
      email: email,
      password: password,
    });

    setAuthToken("token", result.data.authToken, rememberMe);
  } catch (error) {
    console.error("error:", error.response);
    throw error.response.data.message;
  }
}
