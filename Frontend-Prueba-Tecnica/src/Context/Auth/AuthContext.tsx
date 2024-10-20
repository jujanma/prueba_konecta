import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (user: string, id: string, role: string, token: string) => void;
  logout: () => void;
  userToken: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string>("");

  const TOKEN_KEY: string = "authToken";
  const EXPIRATION_KEY: string = "tokenExpiration";
  const USER_NUMBER_ID: string = "userNumberId";
  const USER_NUMBER_EMAIL: string = "userNumberEmail";
  const USER_ROLE: string = "userRole";

  useEffect(() => {
    const checkAuthentication = () => {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const tokenExpiration = localStorage.getItem(EXPIRATION_KEY);

      if (storedToken && tokenExpiration) {
        const currentTime = new Date().getTime();
        const isExpired = currentTime > parseInt(tokenExpiration, 10);

        if (!isExpired) {
          setIsAuthenticated(true);
          setUserToken(storedToken);
        }
      }
    };

    checkAuthentication();
  }, []);

  const login = (user: string, id: string, role: string,  token: string) => {
    setUserToken(token);
    const authToken = token;
    const tokenExpirationMs = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem(TOKEN_KEY, authToken);
    localStorage.setItem(EXPIRATION_KEY, tokenExpirationMs.toString());
    localStorage.setItem(USER_NUMBER_ID, id);
    localStorage.setItem(USER_NUMBER_EMAIL, user);
    localStorage.setItem(USER_ROLE, role);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRATION_KEY);
    localStorage.removeItem(USER_NUMBER_ID);
    localStorage.removeItem(USER_NUMBER_EMAIL);
    localStorage.removeItem(USER_ROLE);
    setIsAuthenticated(false);
    setUserToken("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};