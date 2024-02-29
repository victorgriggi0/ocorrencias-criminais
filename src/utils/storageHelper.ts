export function getStorageItem(key: string) {
  if (typeof window === "undefined") return;

  const data =
    window.localStorage.getItem(key) || window.sessionStorage.getItem(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}

export function removeStorageItem(key: string) {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(key);

  window.sessionStorage.removeItem(key);
}
