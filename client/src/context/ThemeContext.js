import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode")) || "light";

  const toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
