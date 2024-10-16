import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
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
      const newItem = { ...item, cartId: Date.now(), quantity: 1 };
      setCartItems((prevItems) => [...prevItems, newItem]);
      setModalMessage("Дякуємо, що хочете бути частиною нас!");
      setIsModalOpen(true);
      return;
    }

    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name,
    );

    if (existingItem) {
      updateCartItemQuantity(existingItem.cartId, existingItem.quantity + 1);
      setModalMessage("Дякуємо! Ваш товар додано в замовлення.");
    } else {
      const newItem = { ...item, cartId: Date.now(), quantity: 1 };
      setCartItems((prevItems) => [...prevItems, newItem]);
      setModalMessage("Дякуємо! Ваш товар додано в замовлення.");
    }

    setIsModalOpen(true);
  };

  const updateCartItemQuantity = (cartId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === cartId ? { ...item, quantity } : item,
      ),
    );
  };

  const removeFromCart = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartId !== cartId),
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setCustomerName("");
    setCustomerPhone("");
    setCustomerEmail("");
  };

  const handleJoinSchool = () => {
    const newItem = {
      name: "Доєднатись до школи",
      category: "membership",
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
        updateCartItemQuantity,
        clearCart,
        handleJoinSchool,
        customerName,
        setCustomerName,
        customerPhone,
        setCustomerPhone,
        customerEmail,
        setCustomerEmail,
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
