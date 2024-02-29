import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import { AppRoutes } from "@/constants/appRoutes";
import { checkUserAuthenticated } from "@/functions/checkUserAuthenticated";

type PrivateRouteProps = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();

  const [isAuth, setIsAuth] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    const isUserAuthenticated = checkUserAuthenticated();

    setIsAuth(isUserAuthenticated);
    setIsCheck(true);

    if (!isUserAuthenticated) {
      push(AppRoutes.public.login);
    }
  }, [push]);

  if (isCheck && !isAuth) return null;

  return isAuth ? <>{children}</> : null;
};
