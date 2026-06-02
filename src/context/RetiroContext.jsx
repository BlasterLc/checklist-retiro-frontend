import { createContext, useContext, useState } from "react";

const RetiroContext = createContext();

export function RetiroProvider({ children }) {

  const [retiros, setRetiros] = useState([]);

  return (
    <RetiroContext.Provider
      value={{
        retiros,
        setRetiros
      }}
    >
      {children}
    </RetiroContext.Provider>
  );
}

export function useRetiros() {
  return useContext(RetiroContext);
}