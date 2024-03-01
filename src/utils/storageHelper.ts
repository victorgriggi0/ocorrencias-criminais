export function getStorageItem(key: string) {
  if (typeof window === "undefined") return;

  const data =
    window.localStorage.getItem(key) || window.sessionStorage.getItem(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}

export function clearStorage() {
  if (typeof window === "undefined") return;

  window.sessionStorage.clear();
  window.localStorage.clear();
}
