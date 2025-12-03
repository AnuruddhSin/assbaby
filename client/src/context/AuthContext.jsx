import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("babybliss_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (data) => {
    setUser(data);
    localStorage.setItem("babybliss_user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("babybliss_user");
  };

  useEffect(() => {}, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
