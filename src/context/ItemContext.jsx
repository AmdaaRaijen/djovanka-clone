import { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState({
    total: 0,
    price: 0,
  });

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};
