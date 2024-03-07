import { getCookie } from "cookies-next";

export function getCookieItem(key: string) {
  return getCookie(key);
}
