export function setAuthToken(
  key: string,
  value: any,
  rememberMe: boolean = true
) {
  if (typeof window === "undefined") return;

  const authToken = JSON.stringify(value);

  if (rememberMe) {
    window.localStorage.setItem(key, authToken);
  } else {
    window.sessionStorage.setItem(key, authToken);
  }
}
