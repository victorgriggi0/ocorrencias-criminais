import * as React from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import { AppRoutes } from "@/constants/appRoutes";
import { checkUser } from "@/services/authService";

type AuthenticatedRouteProps = {
  children: React.ReactNode;
};

type User = {
  id: string;
  name: string;
  rolesOfUser: {
    id: string;
    name: string;
    permissionsOfRole: {
      id: string;
      name: string;
    }[];
  }[];
  permissionsOfUser: {
    id: string;
    name: string;
  }[];
};

const UserContext = React.createContext<User | null>(null);

export const useAuthenticatedUser = () => React.useContext(UserContext);

const AuthenticatedRoute = ({ children }: AuthenticatedRouteProps) => {
  const { push } = useRouter();

  const [isLoading, setIsLoading] = React.useState(true);

  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const initializeUser = async () => {
      try {
        const result = await checkUser();
        setUser(result.user);
      } catch (error) {
        push(AppRoutes.public.login);
      } finally {
        setIsLoading(false);
      }
    };

    initializeUser();
  }, [push]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return user ? (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  ) : null;
};

export default AuthenticatedRoute;
