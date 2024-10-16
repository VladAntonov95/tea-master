"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button/Button";
import Order from "../Order/Order";
import Modal from "@/components/Modal/Modal";

const schema = Yup.object().shape({
  customerName: Yup.string().required("Введіть ваше імʼя"),
  customerPhone: Yup.string()
    .required("Введіть ваш номер телефону")
    .matches(/^\+?\d{10,12}$/, "Некоректний формат телефону"),
});

const Cart = ({ onBack, removeFromCart, clearCart }) => {
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const {
    cartItems,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
  } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOrder = async (data) => {
    const orderText =
      `Покупець: ${data.customerName}\nТелефон: ${data.customerPhone}\n\nЗамовлення:\n` +
      cartItems
        .map((item) => {
          return item.name === "Доєднатись до школи"
            ? item.name
            : `${item.name} - ${item.price} грн`;
        })
        .join("\n");

    // const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`;
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`;

    // const chatIds = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_IDS.split(",");
    const chatIds = NEXT_PUBLIC_TELEGRAM_CHAT_IDS.split(",");

    try {
      for (const chatId of chatIds) {
        const messagePayload = {
          chat_id: chatId,
          text: `Нове замовлення:\n${orderText}`,
        };

        const response = await fetch(TELEGRAM_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messagePayload),
        });

        const result = await response.json();
        if (!response.ok) {
          console.error("Упс! Виникла помилка при відправлені заказу", result);
        }
      }

      setCustomerName("");
      setCustomerPhone("");
      clearCart();
      setIsOrderSuccess(true);
    } catch (error) {
      console.error("Помилка", error);
      setModalMessage("Упс! Виникла помилка при відправлені заказу");
    }
  };

  if (isOrderSuccess) {
    return <Order onBack={onBack} />;
  }

  return (
    <section className="container">
      {modalMessage && (
        <Modal onClose={() => setModalMessage("")}>{modalMessage}</Modal>
      )}

      <section className="relative mx-auto mt-4 max-w-[750px] items-center rounded-t-2xl bg-background text-center shadow-custom tablet:mt-16">
        <h2 className="py-4 font-merriweather text-lg font-bold">
          Ваше замовлення
        </h2>
        <div className="mx-auto max-w-[500px] pb-8">
          <input
            type="text"
            placeholder="Ваше імʼя"
            {...register("customerName")}
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="border-receipt mb-2 w-full rounded-md border p-2"
          />
          {errors.customerName && (
            <p className="text-red-500">{errors.customerName.message}</p>
          )}
          <input
            type="text"
            placeholder="Ваш телефон"
            {...register("customerPhone")}
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            className="border-receipt w-full rounded-md border p-2"
          />
          {errors.customerPhone && (
            <p className="text-red-500">{errors.customerPhone.message}</p>
          )}
        </div>
      </section>

      <section className="ticket bg-receipt relative mx-auto mb-4 max-w-[750px] py-4 text-center shadow-custom tablet:mb-16">
        {cartItems.length > 0 ? (
          <ul className="mb-4 font-roboto text-m">
            {cartItems.map((item) => (
              <li key={item.cartId} className="mb-2">
                <p>
                  <strong>{item.name}</strong>
                  {item.price ? ` - ${item.price} грн` : null}
                </p>
                <button onClick={() => removeFromCart(item.cartId)}>
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mb-4 font-roboto text-m">Очікуємо на ваше замовлення</p>
        )}

        <Button
          onClick={onBack}
          className="mx-auto w-[231px] px-[72px] py-2 font-roboto text-md font-semibold tablet:mr-4"
        >
          Назад
        </Button>
        <Button
          className="mx-auto mt-4 w-[231px] px-[72px] py-2 font-roboto text-md font-semibold tablet:mt-0"
          onClick={handleSubmit(handleOrder)}
        >
          Замовити
        </Button>
      </section>
    </section>
  );
};

export default Cart;
