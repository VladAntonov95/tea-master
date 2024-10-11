// src/context/CartContext.js

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const newItem = {
      ...item,
      cartId: Date.now(), // Генерация уникального ID
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    console.log("addToCart:", newItem);
  };

  const removeFromCart = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartId !== cartId),
    );
    console.log("removeFromCart: removed item with cartId", cartId);
  };

  const clearCart = () => {
    setCartItems([]);
    console.log("clearCart: all items removed from cart");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
