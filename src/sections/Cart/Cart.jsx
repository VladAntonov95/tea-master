"use client"; // если это компонент, который использует состояние

import React, { useState } from "react";
import { useCart } from "@/context/CartContext"; // убедитесь, что путь правильный
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button/Button"; // проверьте путь
import Order from "../Order/Order"; // проверьте путь к Order
import Modal from "@/components/Modal/Modal"; // проверьте путь

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
    try {
      const response = await fetch("/api/SendOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result.message);
      setIsOrderSuccess(true);
      clearCart();
    } catch (error) {
      console.error("Ошибка:", error);
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
                  {item.price ? ` - ${item.price} грн` : null}{" "}
                  {/* Fixed line */}
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
