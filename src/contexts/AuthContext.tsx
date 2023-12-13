import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { AuthContextType } from '../types/AuthContext';

//creating the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode; // Use ReactNode for the children prop
}

//creating a provider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  //user login handler
  const login = (newUserName: string) => {
    setUserName(newUserName);
    localStorage.setItem('userName', newUserName);
  };

  const logout = () => {
    setUserName(null);
    localStorage.removeItem('userName');
  };

  const contextValue: AuthContextType = {
    userName,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// creating custom hoook to use the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};
