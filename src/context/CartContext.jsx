import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [newItemCount, setNewItemCount] = useState(0);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setNewItemCount((prev) => prev + 1); 
  };

  const clearNewItemFlag = () => {
    setNewItemCount(0); 
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, clearNewItemFlag, newItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
