export interface AuthContextType {
  userName: string | null;
  login: (userName: string) => void;
  logout: () => void;
}
