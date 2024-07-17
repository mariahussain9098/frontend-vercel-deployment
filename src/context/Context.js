import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <Context.Provider value={{ blogs, setBlogs, user, setUser, logout }}>
      {children}
    </Context.Provider>
  );
};
