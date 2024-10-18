import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button/Button";
import Order from "../Order/Order";
import Modal from "@/components/Modal/Modal";
import { GiEmptyWoodBucket } from "react-icons/gi";

const schema = Yup.object().shape({
  customerName: Yup.string()
    .required("Введіть ваше імʼя")
    .min(2, "Ім'я має містити мінімум 2 символи")
    .max(50, "Ім'я не може бути довшим за 50 символів")
    .matches(
      /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ' ]+$/,
      "Ім'я має містити тільки літери і не може містити цифри",
    ),
  customerPhone: Yup.string()
    .required("Введіть ваш номер телефону")
    .matches(
      /^\+?\d{10,12}$/,
      "Некоректний формат телефону. Номер має містити від 10 до 12 цифр і може починатися з '+'",
    ),
  customerEmail: Yup.string()
    .required("Введіть ваш e-mail")
    .email("Некоректний формат e-mail"),
});

const Cart = ({ onBack, removeFromCart, clearCart }) => {
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    cartItems,
    setCustomerName,
    setCustomerPhone,
    setCustomerEmail,
    customerName,
    customerPhone,
    customerEmail,
    updateCartItemQuantity,
  } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("customerName", customerName);
    setValue("customerPhone", customerPhone);
    setValue("customerEmail", customerEmail);
  }, [customerName, customerPhone, customerEmail, setValue]);

  const handleOrder = async (data) => {
    if (!cartItems || cartItems.length === 0) {
      setModalMessage("Корзина порожня. Будь-ласка, додайте товари.");
      return;
    }

    const orderData = {
      ...data,
      cartItems: cartItems,
    };

    setLoading(true);

    try {
      const response = await fetch("/api/SendOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Помилка відправлення замовлення");
      }

      const result = await response.json();
      setIsOrderSuccess(true);
      clearCart();
    } catch (error) {
      setModalMessage(
        error.message || "Упс! Виникла помилка при відправлені заказу",
      );
    } finally {
      setLoading(false);
    }
  };

  if (isOrderSuccess) {
    return (
      <Order
        onBack={onBack}
        text=" Ваше замовлення успішно відправлено. Ми зв&#039;яжемося з вами найближчим часом."
        showButton={true}
      />
    );
  }

  return (
    <section className="container">
      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage("")} />
      )}

      {loading ? (
        <Order text="Ваш запит обробляється" showButton={false} />
      ) : (
        <>
          <section className="relative mx-auto mt-4 max-w-[750px] items-center rounded-t-2xl bg-background text-center shadow-custom tablet:mt-16">
            <h2 className="py-4 font-merriweather text-lg font-bold">
              Ваше замовлення
            </h2>
            <div className="mx-auto max-w-[500px] pb-8">
              <input
                type="text"
                placeholder="Ваше імʼя"
                {...register("customerName")}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                }}
                className={`border-receipt mb-2 w-full rounded-md border p-2 ${errors.customerName ? "border-error" : ""}`}
              />
              {errors.customerName && (
                <p className="text-error">{errors.customerName.message}</p>
              )}

              <input
                type="text"
                placeholder="Ваш телефон"
                {...register("customerPhone")}
                onChange={(e) => {
                  setCustomerPhone(e.target.value);
                }}
                className={`border-receipt mb-2 w-full rounded-md border p-2 ${errors.customerPhone ? "border-error" : ""}`}
              />
              {errors.customerPhone && (
                <p className="text-error">{errors.customerPhone.message}</p>
              )}

              <input
                type="email"
                placeholder="Ваш e-mail"
                {...register("customerEmail")}
                onChange={(e) => {
                  setCustomerEmail(e.target.value);
                }}
                className={`border-receipt w-full rounded-md border p-2 ${errors.customerEmail ? "border-error" : ""}`}
              />
              {errors.customerEmail && (
                <p className="text-error">{errors.customerEmail.message}</p>
              )}
            </div>
          </section>

          <section className="ticket bg-receipt relative mx-auto mb-4 max-w-[750px] pb-4 text-center shadow-custom tablet:mb-16">
            {cartItems.length > 0 ? (
              <ul className="mx-4 mb-4 items-center font-roboto text-m">
                {cartItems.map((item) => (
                  <li
                    key={item.cartId}
                    className="flex min-h-[50px] flex-col items-center justify-between border-b border-b-black-text text-s bigMobile:p-2 tablet:flex-row tablet:text-sm"
                  >
                    <p className="text-left tablet:min-w-[290px]">
                      <strong>{item.name}</strong>
                    </p>
                    <p className="w-24 text-center">
                      {item.price ? `${item.price * item.quantity} грн` : null}
                    </p>
                    <div className="flex flex-wrap items-center space-x-2">
                      <button
                        className="h-[30px] w-[30px] rounded-full border text-center"
                        onClick={() =>
                          updateCartItemQuantity(item.cartId, item.quantity - 1)
                        }
                      >
                        <span>-</span>
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity || 1}
                        onChange={(e) => {
                          const value = Math.max(1, Number(e.target.value));
                          updateCartItemQuantity(item.cartId, value);
                        }}
                        className="bg-receipt w-[30px] rounded text-center"
                      />
                      <button
                        className="h-[30px] w-[30px] rounded-full border text-center"
                        onClick={() =>
                          updateCartItemQuantity(item.cartId, item.quantity + 1)
                        }
                      >
                        <span>+</span>
                      </button>
                      <button
                        className="mb-2"
                        onClick={() => removeFromCart(item.cartId)}
                      >
                        <GiEmptyWoodBucket className="h-9 w-9" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-4 font-roboto text-m">
                Очікуємо на ваше замовлення
              </p>
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
              Підтвердити
            </Button>
          </section>
        </>
      )}
    </section>
  );
};

export default Cart;
