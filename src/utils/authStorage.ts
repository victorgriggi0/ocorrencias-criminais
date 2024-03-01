export function setAuthToken(key: string, value: any, rememberMe: boolean) {
  if (typeof window === "undefined") return;

  const authToken = JSON.stringify(value);
  const storage = rememberMe ? localStorage : sessionStorage;

  storage.setItem(key, authToken);
}
