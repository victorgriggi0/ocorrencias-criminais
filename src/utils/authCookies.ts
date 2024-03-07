import { setCookie, deleteCookie } from "cookies-next";

export function setAuthCookies(key: string, value: any) {
  const options = {
    path: "/",
  };

  setCookie(key, value, options);
}

export function clearAuthCookies(key: string) {
  deleteCookie(key, { path: "/" });
}
