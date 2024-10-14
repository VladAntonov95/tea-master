// src/context/CartContext.js

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const addToCart = (item) => {
    if (item.name === "Доєднатись до школи") {
      const existingItem = cartItems.find(
        (cartItem) => cartItem.name === "Доєднатись до школи",
      );
      if (existingItem) {
        alert("Ми вже робими все можливе щоб доєднати вас до школи! Дякую!");
        return;
      }
    }
    const newItem = { ...item, cartId: Date.now() };
    setCartItems((prevItems) => [...prevItems, newItem]);
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

  const handleJoinSchool = () => {
    const newItem = {
      name: "Доєднатись до школи",
    };
    addToCart(newItem);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        handleJoinSchool,
        customerName,
        setCustomerName,
        customerPhone,
        setCustomerPhone,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
