import { AppRoutes } from "@/constants/appRoutes";

export const checkIsPublicRoute = (asPath: string): boolean => {
  const appPublicRoutes = Object.values(AppRoutes.public);

  return appPublicRoutes.includes(asPath);
};
