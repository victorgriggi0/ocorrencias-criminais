import { index } from "./index";
import { setAuthCookies } from "@/utils/authCookies";

export async function login({ email, password }) {
  try {
    const result = await index.post("/auth/login", {
      email: email,
      password: password,
    });

    setAuthCookies("@auth:token", result.data.authToken);
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

export async function checkUser() {
  try {
    const result = await index.get("/auth/checkuser");

    return {
      user: result.data.user,
    };
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
