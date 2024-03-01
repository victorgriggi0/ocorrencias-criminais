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
    if (error.response) {
      console.error("error:", error.response);
      throw error.response.data.message;
    } else if (error.request) {
      console.error("error:", error.request);
      throw "Tempo de requisição esgotado. Tente novamente mais tarde.";
    } else {
      console.error("error:", error.message);
      throw error.message;
    }
  }
}
