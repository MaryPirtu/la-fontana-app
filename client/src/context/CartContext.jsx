import { createContext, useContext, useState, useMemo } from "react";

export const CartContext = createContext();

export default function ContentProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const cartContext = useMemo(
    () => ({ selectedProducts, setSelectedProducts }),
    [selectedProducts]
  );

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export function useContentContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useContentContext must be used within a UserProvider");
  }
  return context;
}
