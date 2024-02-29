import { getStorageItem } from "@/utils/storageHelper";

export const checkUserAuthenticated = () => {
  const authToken = getStorageItem("token");

  return !!authToken;
};
