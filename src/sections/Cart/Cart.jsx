import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button/Button";
import Order from "../Order/Order";
import Modal from "@/components/Modal/Modal";
import { GiEmptyWoodBucket } from "react-icons/gi";

const schema = Yup.object().shape({
  customerName: Yup.string().required("Введіть ваше імʼя"),
  customerPhone: Yup.string()
    .required("Введіть ваш номер телефону")
    .matches(/^\+?\d{10,12}$/, "Некоректний формат телефону"),
  customerEmail: Yup.string().required("Введіть ваш e-mail"),
});

const Cart = ({ onBack, removeFromCart, clearCart }) => {
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { cartItems, updateCartItemQuantity } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOrder = async (data) => {
    if (!cartItems || cartItems.length === 0) {
      setModalMessage("Корзина порожня. Будь-ласка, додайте товари.");
      return;
    }

    const orderData = {
      ...data,
      cartItems: cartItems,
    };

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
      console.log(result.message);
      setIsOrderSuccess(true);
      clearCart();
    } catch (error) {
      console.error("Помилка:", error);
      setModalMessage(
        error.message || "Упс! Виникла помилка при відправлені заказу",
      );
    }
  };

  const handleQuantityChange = (cartId, quantity) => {
    if (quantity < 1) {
      removeFromCart(cartId);
    } else {
      updateCartItemQuantity(cartId, quantity);
    }
  };

  if (isOrderSuccess) {
    return <Order onBack={onBack} />;
  }

  return (
    <section className="container">
      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage("")} />
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
            className={`border-receipt mb-2 w-full rounded-md border p-2 ${errors.customerName ? "border-error" : ""}`}
          />
          {errors.customerName && (
            <p className="text-error">{errors.customerName.message}</p>
          )}

          <input
            type="text"
            placeholder="Ваш телефон"
            {...register("customerPhone")}
            className={`border-receipt mb-2 w-full rounded-md border p-2 ${errors.customerPhone ? "border-error" : ""}`}
          />
          {errors.customerPhone && (
            <p className="text-error">{errors.customerPhone.message}</p>
          )}

          <input
            type="email"
            placeholder="Ваш e-mail"
            {...register("customerEmail")}
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
                className="flex min-h-[50px] flex-row items-center justify-between border-b border-b-black-text text-s bigMobile:p-2 tablet:text-sm"
              >
                <p className="w-[120px] max-w-[120px] text-left tablet:min-w-[290px]">
                  <strong>{item.name}</strong>
                </p>
                <p>
                  {item.price ? ` ${item.price * item.quantity} грн` : null}
                </p>
                {item.name !== "Доєднатись до школи" ? (
                  <div className="flex items-center">
                    <div>
                      <button
                        className="rounded-full text-center tablet:h-[30px] tablet:w-[30px] tablet:border"
                        onClick={() =>
                          handleQuantityChange(item.cartId, item.quantity - 1)
                        }
                      >
                        <span>-</span>
                      </button>
                      <input
                        type="text"
                        min="1"
                        value={item.quantity || 1}
                        onChange={(e) => {
                          const value = Math.max(1, Number(e.target.value));
                          handleQuantityChange(item.cartId, value);
                        }}
                        className="bg-receipt w-[40px] rounded text-center mobile:w-[50px] bigMobile:mx-2"
                      />
                      <button
                        className="rounded-full text-center tablet:h-[30px] tablet:w-[30px] tablet:border"
                        onClick={() =>
                          handleQuantityChange(item.cartId, item.quantity + 1)
                        }
                      >
                        <span>+</span>
                      </button>
                    </div>
                    <button
                      className="ml-2"
                      onClick={() => removeFromCart(item.cartId)}
                    >
                      <GiEmptyWoodBucket className="mb-2 h-9 w-9" />
                    </button>
                  </div>
                ) : (
                  <button onClick={() => removeFromCart(item.cartId)}>
                    <GiEmptyWoodBucket className="h-9 w-9" />
                  </button>
                )}
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
