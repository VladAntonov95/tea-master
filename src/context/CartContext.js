import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (item) => {
    if (item.name === "Доєднатись до школи") {
      const existingItem = cartItems.find(
        (cartItem) => cartItem.name === "Доєднатись до школи",
      );
      if (existingItem) {
        setModalMessage("Дякуємо, що хочете бути частиною нас!");
        setIsModalOpen(true);
        return;
      }
    }

    if (item.category === "tea") {
      setModalMessage("Дякуємо! Ваш чай додано в замовлення.");
    } else if (item.category === "tableware") {
      setModalMessage("Дякуємо! Чайний посуд додано в замовлення.");
    } else {
      setModalMessage("Дякуємо, що хочете бути частиною нас!");
    }

    const newItem = { ...item, cartId: Date.now() };
    setCartItems((prevItems) => [...prevItems, newItem]);
    setIsModalOpen(true);
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

  const closeModal = () => {
    setIsModalOpen(false);
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
        modalMessage,
        isModalOpen,
        closeModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
