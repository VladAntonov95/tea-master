"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Button from "@/components/Button/Button";

const Cart = ({ onBack, removeFromCart, clearCart }) => {
  const { cartItems } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const handleOrder = async () => {
    if (!customerName || !customerPhone) {
      alert("Будь-ласка заповніть усі поля.");
      return;
    }

    const orderText =
      `Покупець: ${customerName}\nТелефон: ${customerPhone}\n\nЗаказ:\n` +
      cartItems.map((item) => `${item.name} - ${item.price} грн`).join("\n");

    const TELEGRAM_API_URL = `https://api.telegram.org/bot7842960073:AAHvBohpeeTfI5symdUwLUZbTrJZBM0dycU/sendMessage`;

    const messagePayload = {
      chat_id: "175599878",
      text: `Новый заказ:\n${orderText}`,
    };

    try {
      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messagePayload),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Ваше замовлення відправлено!");

        setCustomerName("");
        setCustomerPhone("");

        clearCart();
      } else {
        console.error("Упс! Виникла помилка при відправлені заказу", result);
        alert("Упс! Виникла помилка при відправлені заказу");
      }
    } catch (error) {
      console.error("Помилка", error);
      alert("Упс! Виникла помилка при відправлені заказу");
    }
  };

  return (
    <section className="container">
      <section className="relative mx-auto mt-8 max-w-[750px] rounded-t-2xl bg-background text-center shadow-custom">
        <h2 className="py-4 font-merriweather text-lg font-bold">
          Ваше замовлення
        </h2>
        <div className="mx-auto max-w-[500px] pb-8">
          <input
            type="text"
            placeholder="Ваше имя"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="border-receipt mb-2 w-full rounded-md border p-2"
          />
          <input
            type="text"
            placeholder="Ваш телефон"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            className="border-receipt w-full rounded-md border p-2"
          />
        </div>
      </section>
      <section className="ticket bg-receipt relative mx-auto mb-8 max-w-[750px] py-4 text-center shadow-custom">
        {cartItems.length > 0 ? (
          <ul className="mb-4 font-roboto text-m">
            {cartItems.map((item) => (
              <li key={item.cartId} className="mb-2">
                <p>
                  <strong>{item.name}</strong> - {item.price} грн
                </p>
                <button onClick={() => removeFromCart(item.cartId)}>
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mb-4 font-roboto text-m">Тут будуть ваші покупки</p>
        )}

        <Button
          onClick={onBack}
          className="mx-auto mr-4 mt-4 px-[72px] py-2 font-roboto text-md font-semibold tablet:mt-8"
        >
          Назад
        </Button>
        <Button
          className="mx-auto mt-4 px-[72px] py-2 font-roboto text-md font-semibold tablet:mt-8"
          onClick={() => handleOrder()}
        >
          Замовити
        </Button>
      </section>
    </section>
  );
};

export default Cart;
